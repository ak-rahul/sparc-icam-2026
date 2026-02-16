import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
} from '@react-email/components';

interface PaperStatusEmailProps {
    firstName: string;
    paperTitle: string;
    status: 'approved' | 'rejected';
}

export const PaperStatusEmail = ({ firstName, paperTitle, status }: PaperStatusEmailProps) => {
    const isApproved = status === 'approved';
    const color = isApproved ? '#22c55e' : '#ef4444'; // Green for success, Red for rejection
    const title = isApproved ? 'Paper Accepted! 🎉' : 'Submission Update';
    const previewText = `Your paper status has been updated: ${status.toUpperCase()}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: '#ffffff',
                                background: '#121212',
                                surface: '#1e1e1e',
                                statusColor: color,
                            },
                        },
                    },
                }}
            >
                <Body className="bg-background my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#333] rounded my-[40px] mx-auto p-[20px] max-w-[465px] bg-surface">
                        <Section className="mt-[32px]">
                            <Text className="text-white text-[24px] font-bold text-center p-0 my-0 mx-auto">
                                ICAFM <span className="text-white">2026</span>
                            </Text>
                        </Section>
                        <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            <strong>{title}</strong>
                        </Heading>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Hello {firstName},
                        </Text>
                        <Section className="bg-[#2a2a2a] rounded p-4 border border-[#444] my-6 border-l-4" style={{ borderLeftColor: color }}>
                            <Text className="text-[#888] text-[12px] uppercase font-bold m-0 mb-2">
                                Submission Status Update
                            </Text>
                            <Text className="text-white text-[14px] m-0 mb-2">
                                Paper: <span className="font-medium text-[#bfbfbf]">{paperTitle}</span>
                            </Text>
                            <Text className="text-[16px] font-bold m-0 capitalize" style={{ color: color }}>
                                {status}
                            </Text>
                        </Section>

                        {isApproved ? (
                            <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                                Congratulations! Your paper has been accepted for presentation at ICAFM 2026.
                                Please log in to your dashboard to view the next steps and prepare your final deliverables.
                            </Text>
                        ) : (
                            <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                                We appreciate your submission. Unfortunately, after careful review, your paper was not selected for this year's conference.
                                We encourage you to submit to future events.
                            </Text>
                        )}

                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                style={{ backgroundColor: color }}
                                href="https://icafm2026.org/dashboard"
                            >
                                View Dashboard
                            </Button>
                        </Section>
                        <Hr className="border border-solid border-[#333] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            © 2026 ICAFM Organization.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default PaperStatusEmail;
