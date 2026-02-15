'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { paperSubmissionSchema } from '@/lib/validations/schemas'

export async function submitPaper(formData: FormData) {
    const supabase = await createClient()

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: 'You must be logged in to submit a paper.' }
    }

    const rawData = {
        title: formData.get('title'),
        abstract: formData.get('abstract'),
        track: formData.get('track'),
    }

    const validatedFields = paperSubmissionSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: 'Invalid submission data.' }
    }

    const { title, abstract, track } = validatedFields.data
    const paperFile = formData.get('paperFile') as File
    // Simple authors handling for MVP: just a string or assume it's the user
    // For production, we'd want a dynamic list of authors. 
    // Here we'll just store the user as the primary author.

    if (!paperFile) {
        return { error: 'Paper file is required.' }
    }

    // Upload paper
    const fileExt = paperFile.name.split('.').pop()
    const fileName = `${user.id}-${Date.now()}.${fileExt}`
    const { data: uploadData, error: uploadError } = await supabase.storage
        .from('papers')
        .upload(fileName, paperFile)

    if (uploadError) {
        return { error: `Upload failed: ${uploadError.message}` }
    }

    // Save paper details
    const { error: insertError } = await supabase
        .from('submissions')
        .insert({
            user_id: user.id,
            title,
            abstract,
            track,
            file_url: uploadData.path,
            status: 'submitted',
            authors: user.user_metadata.full_name // simplified for MVP, just the submitter
        })

    if (insertError) {
        return { error: `Submission failed: ${insertError.message}` }
    }

    revalidatePath('/dashboard')
    return { success: 'Paper submitted successfully!' }
}
