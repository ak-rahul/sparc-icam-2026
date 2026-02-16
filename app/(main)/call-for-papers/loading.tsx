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

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-48" />
                                <Skeleton className="h-24 w-full" />
                            </div>
                            <Skeleton className="h-12 w-48" />
                            <Skeleton className="h-48 w-full rounded-2xl" />
                        </div>

                        <div className="space-y-6">
                            <Skeleton className="h-8 w-40" />
                            <div className="grid gap-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Skeleton key={i} className="h-24 w-full rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
