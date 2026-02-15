"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/layout/page-header"
import { submitPaper } from "./actions"

export default function SubmitPaperPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        const result = await submitPaper(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
            // Optional: redirect
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Paper Submission"
                description="Submit your research work for review."
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="mx-auto max-w-[800px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>New Submission</CardTitle>
                            <CardDescription>
                                Please ensure your paper follows the conference formatting guidelines before uploading.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Paper Title</Label>
                                    <Input id="title" name="title" placeholder="Enter the full title of your paper" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="abstract">Abstract</Label>
                                    <Textarea id="abstract" name="abstract" placeholder="Paste your abstract here (max 500 words)..." className="min-h-[150px]" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="track">Conference Track</Label>
                                    <Select name="track" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a track" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                                            <SelectItem value="Data Science & Big Data">Data Science & Big Data</SelectItem>
                                            <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                                            <SelectItem value="IoT & Cloud Computing">IoT & Cloud Computing</SelectItem>
                                            <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="paperFile">Upload Paper (PDF)</Label>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Input id="paperFile" name="paperFile" type="file" accept=".pdf,.doc,.docx" required />
                                        <p className="text-xs text-muted-foreground">PDF or DOCX format. Max 10MB.</p>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Uploading..." : "Submit Paper"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
