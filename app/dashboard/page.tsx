import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, User, CreditCard } from 'lucide-react'

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Fetch registration details
    const { data: registration } = await supabase
        .from('registrations')
        .select('*')
        .eq('user_id', user.id)
        .single()

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Dashboard"
                description={`Welcome back, ${user.user_metadata.full_name || 'User'}`}
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Registration Status */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Registration
                            </CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            {registration ? (
                                <div className="text-2xl font-bold capitalize">{registration.status}</div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm text-muted-foreground">Not registered yet</p>
                                    <Button asChild size="sm">
                                        <Link href="/register">Register Now</Link>
                                    </Button>
                                </div>
                            )}
                            {registration && (
                                <p className="text-xs text-muted-foreground mt-1">
                                    Category: {registration.category}
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Paper Submission */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Paper Submission
                            </CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Submitted Papers
                            </p>
                            <Button asChild size="sm" className="mt-4 w-full">
                                <Link href="/submit-paper">Submit New Paper</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
