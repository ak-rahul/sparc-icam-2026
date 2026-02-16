import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1 mt-24">
                <div className="container px-4 md:px-6 py-16 md:py-24">
                    <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
                        <Skeleton className="h-12 w-48 mx-auto" />
                        <Skeleton className="h-6 w-80 mx-auto" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info Skeleton */}
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Skeleton className="h-10 w-64" />
                                    <Skeleton className="h-20 w-full" />
                                </div>
                                <div className="grid gap-6">
                                    {[1, 2, 3].map((i) => (
                                        <Skeleton key={i} className="h-24 w-full rounded-xl" />
                                    ))}
                                </div>
                            </div>
                            <Skeleton className="h-[350px] w-full rounded-3xl" />
                        </div>

                        {/* Contact Form Skeleton */}
                        <div className="h-full">
                            <Skeleton className="h-[600px] w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
