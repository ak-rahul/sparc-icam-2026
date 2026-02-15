import { PageHeader } from "@/components/layout/page-header"

export default function SpeakersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Keynote Speakers"
                description="Renowned experts sharing their insights."
            />
            <div className="container py-12 px-4 md:px-6">
                <p>Content coming soon...</p>
            </div>
        </div>
    )
}
