import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header Skeleton */}
            <div className="fixed top-0 left-0 right-0 z-50 py-5 bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-8 rounded-lg" />
                        <Skeleton className="h-8 w-24" />
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-9 w-20 rounded-full" />
                            <Skeleton className="h-9 w-20 rounded-full" />
                            <Skeleton className="h-9 w-20 rounded-full" />
                            <Skeleton className="h-9 w-20 rounded-full" />
                        </div>
                        <Skeleton className="h-9 w-24 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <main className="flex-1 mt-24">
                <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
                    {/* Hero/Page Header Skeleton */}
                    <div className="space-y-4 max-w-3xl mx-auto text-center">
                        <Skeleton className="h-12 w-3/4 mx-auto" />
                        <Skeleton className="h-6 w-1/2 mx-auto" />
                    </div>

                    {/* Grid Content Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex flex-col space-y-3">
                                <Skeleton className="h-[200px] w-full rounded-xl" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-4/5" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
