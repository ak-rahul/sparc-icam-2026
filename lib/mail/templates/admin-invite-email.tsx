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

interface AdminInviteEmailProps {
    email: string;
    tempPass: string;
}

export const AdminInviteEmail = ({ email, tempPass }: AdminInviteEmailProps) => {
    const previewText = `You have been invited to manage ICAFM 2026`;

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
                                primary: '#e11d48', // Red for admin warnings/importance
                            },
                        },
                    },
                }}
            >
                <Body className="bg-background my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#333] rounded my-[40px] mx-auto p-[20px] max-w-[465px] bg-surface">
                        <Section className="mt-[32px]">
                            <Text className="text-white text-[24px] font-bold text-center p-0 my-0 mx-auto">
                                ICAFM <span className="text-primary">ADMIN</span>
                            </Text>
                        </Section>
                        <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            <strong>System Access Granted</strong>
                        </Heading>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Hello,
                        </Text>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            You have been granted <strong>Administrator</strong> privileges for the ICAFM 2026 platform.
                        </Text>
                        <Section className="bg-[#2a2a2a] rounded p-4 border border-[#444] my-6">
                            <Text className="text-[#888] text-[12px] uppercase font-bold m-0 mb-2">
                                Your Login Credentials
                            </Text>
                            <Text className="text-white text-[14px] m-0 mb-1">
                                Email: <span className="font-mono text-[#bfbfbf]">{email}</span>
                            </Text>
                            <Text className="text-white text-[14px] m-0">
                                Password: <span className="font-mono text-primary font-bold">{tempPass}</span>
                            </Text>
                        </Section>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Please log in immediately and change your password for security.
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-primary rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href="https://icar2026.org/login"
                            >
                                Login to Admin Console
                            </Button>
                        </Section>
                        <Hr className="border border-solid border-[#333] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            Do not share these credentials.
                            <br />
                            © 2026 ICAR Security Team.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default AdminInviteEmail;
