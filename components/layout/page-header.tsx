import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    description?: string
    className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <div className={cn("border-b bg-muted/40 py-12 md:py-20", className)}>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    {description && (
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
