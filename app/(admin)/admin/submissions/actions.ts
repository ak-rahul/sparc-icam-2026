'use server'

import { createAdminClient } from "@/lib/supabase/admin"
import { revalidatePath } from "next/cache"
import { sendPaperStatusUpdate } from "@/lib/mail"

export async function updateSubmissionStatus(
    submissionId: string,
    status: 'approved' | 'rejected',
    email: string,
    name: string,
    title: string
) {
    const supabase = createAdminClient()

    try {
        const { error } = await supabase
            .from('submissions')
            .update({ status })
            .eq('id', submissionId)

        if (error) {
            return { error: error.message }
        }

        // Send Status Update Email
        await sendPaperStatusUpdate(email, name, title, status)

        revalidatePath('/admin/submissions')
        return { success: `Submission ${status} successfully.` }
    } catch (error) {
        return { error: 'Failed to update submission status.' }
    }
}
