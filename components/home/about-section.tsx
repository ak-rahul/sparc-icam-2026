import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            About the Conference
                        </h2>
                        <p className="text-muted-foreground text-lg text-pretty">
                            The International Conference on Advanced Research (ICAR 2024) is a premier forum for presenting innovations in science, engineering, and technology.
                            Our mission is to bring together leading academicians, scientists, researchers, and scholars to exchange specific experiences and share results.
                        </p>
                        <p className="text-muted-foreground text-lg text-pretty">
                            The conference features keynote addresses, technical sessions, workshops, and networking opportunities designed to foster collaboration and advance the state of the art in various fields.
                        </p>
                        <Button asChild variant="link" className="px-0 text-lg">
                            <Link href="/about">
                                Read our Vision & Mission <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                        {/* Placeholder for an image or video */}
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                            <span className="text-muted-foreground">Conference Highlight Video/Image</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
