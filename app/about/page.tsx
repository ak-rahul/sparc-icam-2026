import { PageHeader } from "@/components/layout/page-header"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About the Conference"
                description="Learn more about our vision, mission, and the history of ICAR."
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="prose dark:prose-invert max-w-none">
                    <p>Content coming soon...</p>
                </div>
            </div>
        </div>
    )
}
