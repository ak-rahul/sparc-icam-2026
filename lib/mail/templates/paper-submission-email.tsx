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

interface PaperSubmissionEmailProps {
    firstName: string;
    paperTitle: string;
    track: string;
}

export const PaperSubmissionEmail = ({ firstName, paperTitle, track }: PaperSubmissionEmailProps) => {
    const previewText = `Paper Submission Received: ${paperTitle}`;

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
                                primary: '#3b82f6',
                            },
                        },
                    },
                }}
            >
                <Body className="bg-background my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#333] rounded my-[40px] mx-auto p-[20px] max-w-[465px] bg-surface">
                        <Section className="mt-[32px]">
                            <Text className="text-white text-[24px] font-bold text-center p-0 my-0 mx-auto">
                                ICAFM <span className="text-primary">2026</span>
                            </Text>
                        </Section>
                        <Heading className="text-white text-[20px] font-normal text-center p-0 my-[30px] mx-0">
                            <strong>Submission Received</strong>
                        </Heading>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Hello {firstName},
                        </Text>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            We have successfully received your paper submission for ICAFM 2026.
                        </Text>
                        <Section className="bg-[#2a2a2a] rounded p-4 border border-[#444] my-6">
                            <Text className="text-[#888] text-[12px] uppercase font-bold m-0 mb-2">
                                Submission Details
                            </Text>
                            <Text className="text-white text-[14px] m-0 mb-1">
                                Title: <span className="font-medium text-[#bfbfbf]">{paperTitle}</span>
                            </Text>
                            <Text className="text-white text-[14px] m-0">
                                Track: <span className="font-medium text-primary">{track}</span>
                            </Text>
                        </Section>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Our technical committee will review your submission. You will be notified of the decision by <strong>February 20, 2026</strong>.
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-primary rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href="https://icafm2026.org/dashboard"
                            >
                                Track Status
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

export default PaperSubmissionEmail;
