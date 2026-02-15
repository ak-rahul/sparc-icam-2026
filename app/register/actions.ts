'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { registrationSchema } from '@/lib/validations/schemas'

export async function registerParticipant(formData: FormData) {
    const supabase = await createClient()

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        return { error: 'You must be logged in to register.' }
    }

    const rawData = {
        fullName: formData.get('fullName'),
        affiliation: formData.get('affiliation'),
        category: formData.get('category'),
    }

    const validatedFields = registrationSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: 'Invalid registration data.' }
    }

    const { fullName, affiliation, category } = validatedFields.data
    const paymentProof = formData.get('paymentProof') as File

    if (!paymentProof) {
        return { error: 'Payment proof is required.' }
    }

    // Upload payment proof
    const fileExt = paymentProof.name.split('.').pop()
    const fileName = `${user.id}-${Date.now()}.${fileExt}`
    const { data: uploadData, error: uploadError } = await supabase.storage
        .from('receipts')
        .upload(fileName, paymentProof)

    if (uploadError) {
        return { error: `Upload failed: ${uploadError.message}` }
    }

    // Save registration details
    const { error: insertError } = await supabase
        .from('registrations')
        .insert({
            user_id: user.id,
            full_name: fullName,
            affiliation,
            category,
            payment_proof_url: uploadData.path,
            status: 'pending' // pending verification
        })

    if (insertError) {
        return { error: `Registration failed: ${insertError.message}` }
    }

    revalidatePath('/dashboard')
    return { success: 'Registration submitted successfully! We will verify your payment and notify you.' }
}
