import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
} from '@react-email/components';

interface WelcomeEmailProps {
    firstName: string;
    role: string;
}

export const WelcomeEmail = ({ firstName, role }: WelcomeEmailProps) => {
    const previewText = `Welcome to ICAR 2026, ${firstName}!`;

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
                        <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Welcome, <strong>{firstName}</strong>
                        </Heading>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Hello {firstName},
                        </Text>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            Thank you for joining the <strong>International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare 2026</strong> as a <span className="capitalize text-white">{role}</span>.
                        </Text>
                        <Text className="text-[#bfbfbf] text-[14px] leading-[24px]">
                            We are thrilled to have you part of this global event in New York City.
                            {role === 'presenter'
                                ? " As a presenter, you can now submit your papers for review via your dashboard."
                                : " You can now complete your registration and secure your spot."}
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-primary rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href="https://icafm2026.org/dashboard"
                            >
                                Go to Dashboard
                            </Button>
                        </Section>
                        <Hr className="border border-solid border-[#333] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            If this wasn&apos;t you, please ignore this email.
                        </Text>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            © 2026 ICAFM Organization. New York, USA.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
