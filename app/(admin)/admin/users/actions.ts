'use server'

import { createAdminClient } from "@/lib/supabase/admin"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { sendAdminInvite } from "@/lib/mail"

const createAdminSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    fullName: z.string().min(2, "Name must be at least 2 characters"),
})

export async function createAdminUser(formData: FormData) {
    const rawData = {
        email: formData.get('email'),
        password: formData.get('password'),
        fullName: formData.get('fullName'),
    }

    const validatedFields = createAdminSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: 'Invalid input data. Password must be 8+ chars.' }
    }

    const { email, password, fullName } = validatedFields.data
    const supabaseAdmin = createAdminClient()

    try {
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: {
                full_name: fullName,
                role: 'admin'
            }
        })

        if (error) {
            return { error: error.message }
        }

        // Send Admin Invite Email
        await sendAdminInvite(email, password as string)

        revalidatePath('/admin/users')
        return { success: `Admin ${data.user.email} created successfully!` }
    } catch (error) {
        return { error: 'Failed to create admin user.' }
    }
}
