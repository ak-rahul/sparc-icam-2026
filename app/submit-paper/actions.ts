'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function submitPaper(formData: FormData) {
    const supabase = await createClient()

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: 'You must be logged in to submit a paper.' }
    }

    const title = formData.get('title') as string
    const abstract = formData.get('abstract') as string
    const track = formData.get('track') as string
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
        .from('papers')
        .insert({
            uploader_id: user.id,
            title,
            abstract,
            track,
            file_url: uploadData.path,
            status: 'submitted',
            authors: [{ name: user.user_metadata.full_name, email: user.email }] // simplified for MVP
        })

    if (insertError) {
        return { error: `Submission failed: ${insertError.message}` }
    }

    revalidatePath('/dashboard')
    return { success: 'Paper submitted successfully!' }
}
