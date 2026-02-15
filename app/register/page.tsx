"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/layout/page-header"
import { registerParticipant } from "./actions"

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        const result = await registerParticipant(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else if (result?.success) {
            toast.success(result.success)
            // Optional: redirect or clear form
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Registration"
                description="Secure your spot at ICAR 2024. Please login before registering."
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="mx-auto max-w-[600px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Delegate Registration</CardTitle>
                            <CardDescription>
                                Fill in your details and upload the payment proof.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input id="fullName" name="fullName" placeholder="Dr. Jane Doe" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="affiliation">Affiliation / Institution</Label>
                                    <Input id="affiliation" name="affiliation" placeholder="University of Technology" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select name="category" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select registration category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Postgraduate Student">Postgraduate Student (₹2000)</SelectItem>
                                            <SelectItem value="Research Scholar">Research Scholar (₹3000)</SelectItem>
                                            <SelectItem value="Academician">Academician (₹4000)</SelectItem>
                                            <SelectItem value="Industry Professional">Industry Professional (₹5000)</SelectItem>
                                            <SelectItem value="Foreign Delegate">Foreign Delegate ($100)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Payment QR Code</Label>
                                    <div className="border rounded-md p-4 bg-muted/50 flex flex-col items-center justify-center text-center">
                                        {/* Placeholder for QR Code Image */}
                                        <div className="w-32 h-32 bg-white mb-2 flex items-center justify-center border font-mono text-xs text-muted-foreground">
                                            [QR Code Here]
                                        </div>
                                        <p className="text-sm font-medium">Scan to Pay via Google Pay</p>
                                        <p className="text-xs text-muted-foreground">UPI ID: conference@upi</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="paymentProof">Upload Payment Screenshot</Label>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Input id="paymentProof" name="paymentProof" type="file" accept="image/*,application/pdf" required />
                                        <p className="text-xs text-muted-foreground">Upload the transaction receipt (JPG, PNG, PDF). Max 5MB.</p>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit Registration"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
