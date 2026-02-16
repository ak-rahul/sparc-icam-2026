import { Resend } from 'resend';
import { WelcomeEmail } from './templates/welcome-email';
import { AdminInviteEmail } from './templates/admin-invite-email';
import { PaperSubmissionEmail } from './templates/paper-submission-email';
import { PaperStatusEmail } from './templates/paper-status-email';

// Initialize Resend with API Key from environment variables safely
const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

export const sendWelcomeEmail = async (email: string, firstName: string, role: string) => {
    if (!resend) {
        console.warn("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        const { error } = await resend.emails.send({
            from: 'ICAFM 2026 <noreply@icafm2026.org>',
            to: email,
            subject: 'Welcome to ICAFM 2026! 🚀',
            react: WelcomeEmail({ firstName, role }),
        });

        if (error) {
            console.error("Resend Error:", error);
        }
    } catch (error) {
        console.error("Failed to send welcome email:", error);
    }
};

export const sendAdminInvite = async (email: string, tempPass: string) => {
    if (!resend) {
        console.warn("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        const { error } = await resend.emails.send({
            from: 'ICAFM Security <security@icafm2026.org>',
            to: email,
            subject: 'Restricted: Administrator Access Granted',
            react: AdminInviteEmail({ email, tempPass }),
        });

        if (error) {
            console.error("Resend Error:", error);
        }
    } catch (error) {
        console.error("Failed to send admin invite:", error);
    }
};

export const sendSubmissionReceipt = async (email: string, name: string, paperTitle: string, track: string) => {
    if (!resend) {
        console.warn("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        const { error } = await resend.emails.send({
            from: 'ICAFM Submissions <submissions@icafm2026.org>',
            to: email,
            subject: 'Submission Received - ICAFM 2026',
            react: PaperSubmissionEmail({ firstName: name, paperTitle, track }),
        });

        if (error) {
            console.error("Resend Error:", error);
        }
    } catch (error) {
        console.error("Failed to send submission receipt:", error);
    }
};

export const sendPaperStatusUpdate = async (email: string, name: string, paperTitle: string, status: 'approved' | 'rejected') => {
    if (!resend) {
        console.warn("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        const { error } = await resend.emails.send({
            from: 'ICAFM Committee <committee@icafm2026.org>',
            to: email,
            subject: `Paper Status Update: ${status.toUpperCase()}`,
            react: PaperStatusEmail({ firstName: name, paperTitle, status }),
        });

        if (error) {
            console.error("Resend Error:", error);
        }
    } catch (error) {
        console.error("Failed to send status update:", error);
    }
};
