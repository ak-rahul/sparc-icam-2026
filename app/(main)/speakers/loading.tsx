import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1 mt-24">
                <div className="container px-4 md:px-6 py-12 space-y-12">
                    {/* Page Header */}
                    <div className="space-y-4 max-w-3xl mx-auto text-center">
                        <Skeleton className="h-12 w-64 mx-auto" />
                        <Skeleton className="h-6 w-96 mx-auto" />
                    </div>

                    {/* Speakers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4 p-4 border rounded-xl bg-card">
                                <Skeleton className="h-32 w-32 rounded-full" />
                                <div className="space-y-2 w-full">
                                    <Skeleton className="h-6 w-3/4 mx-auto" />
                                    <Skeleton className="h-4 w-1/2 mx-auto" />
                                    <Skeleton className="h-4 w-2/3 mx-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
