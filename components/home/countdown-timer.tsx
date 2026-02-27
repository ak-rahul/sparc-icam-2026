"use client"

import { useEffect, useState } from "react"
import { differenceInSeconds } from "date-fns"

interface CountdownTimerProps {
    targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const updateTimer = () => {
            const now = new Date()
            const diff = differenceInSeconds(targetDate, now)
            setTimeLeft(diff > 0 ? diff : 0)
        }

        updateTimer() // Calculate immediately
        const timer = setInterval(updateTimer, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    if (!mounted) {
        return null // Avoid rendering 0s to prevent layout flicker
    }

    const days = Math.floor(timeLeft / (3600 * 24))
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60

    return (
        <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{days}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{hours}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{minutes}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Mins</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{seconds}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Secs</span>
            </div>
        </div>
    )
}
