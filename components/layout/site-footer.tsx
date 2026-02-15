import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built for the <span className="font-medium underline underline-offset-4">International Conference on Advanced Research 2024</span>.
                    <br />
                    &copy; {new Date().getFullYear()} ICAR. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
