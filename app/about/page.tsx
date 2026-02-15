import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Target } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About ICAR 2025"
                description="Fostering innovation and collaboration across borders."
            />

            <div className="container py-12 px-4 md:px-6 space-y-16">

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-primary/5 border-none shadow-none">
                        <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To provide a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns in the fields of Advanced Research.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-none shadow-none">
                        <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Global Reach</h3>
                            <p className="text-muted-foreground">
                                Connecting over 50 countries, facilitating a truly global exchange of ideas and fostering international collaborations that drive scientific progress.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-none shadow-none">
                        <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Excellence</h3>
                            <p className="text-muted-foreground">
                                Celebrating high-quality research through rigorous peer review and recognizing outstanding contributions with Best Paper Awards and research grants.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* History */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Conference History</h2>
                    <div className="prose dark:prose-invert max-w-4xl mx-auto">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The International Conference on Advanced Research (ICAR) began in 2010 as a small symposium in London, UK. Over the past decade, it has grown into one of the most respected annual gatherings in the scientific community.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            From its humble beginnings with 50 attendees, ICAR now welcomes over 1,000 delegates each year. Past editions have been held in major cities including Tokyo, Berlin, San Francisco, and Singapore, each bringing a unique cultural perspective to the scientific discourse.
                        </p>
                    </div>
                    {/* Visual Timeline (Simplified for UI) */}
                    <div className="border-l-2 border-primary/20 ml-4 md:ml-auto md:mr-auto max-w-2xl pl-8 space-y-8 py-4">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                            <h4 className="text-lg font-bold">2024 - Sydney, Australia</h4>
                            <p className="text-muted-foreground">Focus on Climate Tech & Sustainability.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
                            <h4 className="text-lg font-bold">2023 - Paris, France</h4>
                            <p className="text-muted-foreground">Theme: "The Age of AI". Record attendance.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground"></div>
                            <h4 className="text-lg font-bold">2022 - Virtual</h4>
                            <p className="text-muted-foreground">Successful transition to online format during global challenges.</p>
                        </div>
                    </div>
                </section>

                {/* Venue */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter">The Venue</h2>
                        <h3 className="text-2xl font-semibold text-primary">Grand Convention Center, NY</h3>
                        <p className="text-lg text-muted-foreground">
                            Located in the heart of Manhattan, the Grand Convention Center offers state-of-the-art facilities, world-class catering, and easy access to New York City's famous landmarks.
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>200,000 sq ft of exhibition space</li>
                            <li>50+ breakage rooms for workshops</li>
                            <li>High-speed fiber optic internet</li>
                            <li>Sustainable building design (LEED Gold)</li>
                        </ul>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1000&auto=format&fit=crop"
                            alt="Grand Convention Center"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </section>

            </div>
        </div>
    )
}
