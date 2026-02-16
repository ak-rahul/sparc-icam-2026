"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, X, Loader2 } from "lucide-react"
import { updateSubmissionStatus } from "./actions"
import { toast } from "sonner"

interface SubmissionActionsProps {
    id: string
    email: string
    name: string
    title: string
    currentStatus: string
}

export function SubmissionActions({ id, email, name, title, currentStatus }: SubmissionActionsProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleStatusUpdate = async (status: 'approved' | 'rejected') => {
        setIsLoading(true)
        const result = await updateSubmissionStatus(id, status, email, name, title)
        setIsLoading(false)

        if (result.error) {
            toast.error(result.error)
        } else {
            toast.success(result.success)
        }
    }

    if (currentStatus === 'approved' || currentStatus === 'rejected') {
        return null // Already processed
    }

    return (
        <div className="flex justify-end gap-2">
            <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                onClick={() => handleStatusUpdate('approved')}
                disabled={isLoading}
            >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            </Button>
            <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => handleStatusUpdate('rejected')}
                disabled={isLoading}
            >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
            </Button>
        </div>
    )
}
