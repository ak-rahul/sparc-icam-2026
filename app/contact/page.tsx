import { PageHeader } from "@/components/layout/page-header"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Contact Us"
                description="Get in touch with the conference secretariat."
            />
            <div className="container py-12 px-4 md:px-6">
                <p>Content coming soon...</p>
            </div>
        </div>
    )
}
