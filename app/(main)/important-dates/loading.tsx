import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1 mt-24">
                <div className="container px-4 md:px-6 py-16 md:py-24">
                    <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
                        <Skeleton className="h-12 w-64 mx-auto" />
                        <Skeleton className="h-6 w-96 mx-auto" />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Timeline items */}
                        <div className="border-l-2 border-border/60 ml-4 md:ml-0 space-y-12">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="relative md:pl-16">
                                    <Skeleton className="absolute -left-[9px] top-6 h-5 w-5 rounded-full" />
                                    <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border bg-card">
                                        <div className="md:w-56 shrink-0 space-y-2">
                                            <Skeleton className="h-6 w-32" />
                                            <Skeleton className="h-6 w-24 rounded-full" />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <Skeleton className="h-8 w-3/4" />
                                            <Skeleton className="h-6 w-full" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
