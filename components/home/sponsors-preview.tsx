import { Handshake } from "lucide-react"

export function SponsorsPreview() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Our Sponsors</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 items-center opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    {/* Placeholders for logos */}
                    {/* Placeholders for logos */}
                    {[
                        { name: "TechCorp", color: "text-blue-500" },
                        { name: "InnovateLabs", color: "text-green-500" },
                        { name: "FutureSystems", color: "text-purple-500" },
                        { name: "GlobalScience", color: "text-red-500" }
                    ].map((sponsor) => (
                        <div key={sponsor.name} className="flex items-center justify-center p-6 border rounded-lg bg-background shadow-sm h-32">
                            <div className="flex flex-col items-center gap-2">
                                <Handshake className={`h-8 w-8 ${sponsor.color}`} />
                                <span className="font-semibold text-foreground">{sponsor.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">Interested in sponsoring? Contact us at <a href="mailto:sponsors@icar2024.org" className="underline hover:text-primary">sponsors@icar2024.org</a></p>
                </div>
            </div>
        </section>
    )
}
