import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const speakers = [
    {
        name: "Dr. Sarah Johnson",
        role: "Professor of AI, MIT",
        topic: "The Future of Generative AI",
        bio: "Dr. Sarah Johnson is a pioneer in the field of Generative Adversarial Networks. Her research focuses on the ethical implications of AI and its application in creative industries.",
        image: "https://i.pravatar.cc/150?u=sarah",
        initials: "SJ",
    },
    {
        name: "Prof. David Chen",
        role: "Director, Quantum Institute",
        topic: "Quantum Computing Breakthroughs",
        bio: "Prof. Chen leads the Quantum Institute's research on error correction in quantum systems. He has published over 100 papers in top-tier physics and computing journals.",
        image: "https://i.pravatar.cc/150?u=david",
        initials: "DC",
    },
    {
        name: "Dr. Emily Wong",
        role: "Chief Scientist, BioTech Corp",
        topic: "CRISPR & Genetic Engineering",
        bio: "Dr. Wong oversees the R&D department at BioTech Corp, working on revolutionary gene-editing therapies. She is a strong advocate for open science.",
        image: "https://i.pravatar.cc/150?u=emily",
        initials: "EW",
    },
    {
        name: "James Anderson",
        role: "CTO, CloudScale",
        topic: "Scalable Cloud Architectures",
        bio: "James has over 20 years of experience in building distributed systems. He currently leads the engineering team at CloudScale, serving millions of users globally.",
        image: "https://i.pravatar.cc/150?u=james",
        initials: "JA",
    },
]

export default function SpeakersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Keynote Speakers"
                description="Renowned experts sharing their insights."
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {speakers.map((speaker) => (
                        <Card key={speaker.name} className="flex flex-col md:flex-row overflow-hidden">
                            <div className="w-full md:w-1/3 bg-muted flex items-center justify-center p-6">
                                <Avatar className="h-32 w-32 border-4 border-background">
                                    <AvatarImage src={speaker.image} alt={speaker.name} />
                                    <AvatarFallback className="text-2xl">{speaker.initials}</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardHeader className="w-full md:w-2/3">
                                <div className="space-y-1">
                                    <CardTitle className="text-2xl">{speaker.name}</CardTitle>
                                    <CardDescription className="text-base font-medium text-primary">
                                        {speaker.role}
                                    </CardDescription>
                                </div>
                                <CardContent className="p-0 mt-4 space-y-2">
                                    <p className="font-semibold">Keynote: "{speaker.topic}"</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {speaker.bio}
                                    </p>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
