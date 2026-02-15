import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const speakers = [
    {
        name: "Dr. Sarah Johnson",
        role: "Professor of AI, MIT",
        topic: "The Future of Generative AI",
        image: "/speakers/sarah.jpg",
        initials: "SJ",
    },
    {
        name: "Prof. David Chen",
        role: "Director, Quantum Institute",
        topic: "Quantum Computing Breakthroughs",
        image: "/speakers/david.jpg",
        initials: "DC",
    },
    {
        name: "Dr. Emily Wong",
        role: "Chief Scientist, BioTech Corp",
        topic: "CRISPR & Genetic Engineering",
        image: "/speakers/emily.jpg",
        initials: "EW",
    },
]

export function SpeakersPreview() {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Keynote Speakers
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Hear from world-renowned experts shaping the future of research.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                    {speakers.map((speaker) => (
                        <Card key={speaker.name} className="flex flex-col items-center text-center">
                            <CardHeader className="flex flex-col items-center gap-4">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src={speaker.image} alt={speaker.name} />
                                    <AvatarFallback className="text-lg">{speaker.initials}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <CardTitle>{speaker.name}</CardTitle>
                                    <CardDescription className="text-sm font-medium text-primary">
                                        {speaker.role}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-foreground/80">
                                    Topic: "{speaker.topic}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
