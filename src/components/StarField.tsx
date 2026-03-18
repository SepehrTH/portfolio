"use client"
import { useEffect, useState } from "react"

type Star = {
    id: number
    x: number
    y: number
    size: number
    animation: "twinkle" | "twinkle-bright" | "twinkle-dim"
    duration: number
    delay: number
}

const ANIMATIONS = ["twinkle", "twinkle-bright", "twinkle-dim"] as const

export default function StarField({ count = 160 }: { count?: number }) {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        setStars(
            Array.from({ length: count }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 1.5 + 0.5,
                animation: ANIMATIONS[Math.floor(Math.random() * 3)],
                duration: Math.random() * 4 + 2,
                delay: Math.random() * 7,
            }))
        )
    }, [count])

    return (
        <div
            style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}
            aria-hidden="true"
        >
            {stars.map((star) => (
                <div
                    key={star.id}
                    style={{
                        position: "absolute",
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        borderRadius: "50%",
                        backgroundColor: "white",
                        boxShadow: star.animation === "twinkle-bright"
                            ? `0 0 ${star.size * 3}px rgba(200, 220, 255, 0.6)`
                            : undefined,
                        animationName: star.animation,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                    }}
                />
            ))}
        </div>
    )
}
