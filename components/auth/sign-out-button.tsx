"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button, ButtonProps } from "@/components/ui/button"
import { LogOut, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface SignOutButtonProps extends ButtonProps {
    children?: React.ReactNode
    showIcon?: boolean
}

export function SignOutButton({ children, showIcon = true, className, ...props }: SignOutButtonProps) {
    const router = useRouter()
    const supabase = createClient()
    const [isLoading, setIsLoading] = React.useState(false)

    const handleSignOut = async () => {
        setIsLoading(true)
        try {
            await supabase.auth.signOut()
            toast.success("Signed out successfully")
            router.refresh()
            router.replace("/login")
        } catch (error) {
            toast.error("Error signing out")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button
            onClick={handleSignOut}
            disabled={isLoading}
            className={className}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                showIcon && <LogOut className="mr-2 h-4 w-4" />
            )}
            {children || "Sign Out"}
        </Button>
    )
}
