"use client"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import Link from "next/link"

export default function AboutPage() {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = new Audio("/about_soundtrack.mp3")
        audio.volume = 0.6
        audioRef.current = audio
        audio.play().catch(() => {
            // Autoplay blocked — browser requires user interaction first
        })
        return () => {
            audio.pause()
            audio.currentTime = 0
        }
    }, [])

    return (
        // overflow-hidden clips content while it's below the fold during PageTransition fade-in
        <div className="fixed inset-0 overflow-hidden flex items-center justify-center">

            {/* Back button */}
            <motion.div
                className="fixed top-8 left-8 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 20, duration: 3 }}
            >
                <Link
                    href="/"
                    style={{
                        fontFamily: "var(--font-outfit)",
                        color: "rgba(240,237,232,0.35)",
                        fontSize: "0.8rem",
                        letterSpacing: "0.15em",
                    }}
                    className="uppercase hover:text-white transition-colors duration-300"
                >
                    ← Back
                </Link>
            </motion.div>

            {/* "A long time ago..." — fades in, holds, fades out before content arrives */}
            <motion.p
                className="absolute text-center px-8 pointer-events-none"
                style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                    color: "#4db8ff",
                    letterSpacing: "0.04em",
                }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 6, times: [0, 0.15, 0.7, 1], ease: "easeInOut" }}
            >
                A long time ago in a galaxy far, far away....
            </motion.p>

            {/* Star Wars scroll — starts below, stops centered */}
            <motion.div
                className="w-full max-w-xl px-10 text-center"
                initial={{ y: "110vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 22, ease: "linear" }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-playfair)",
                        color: "rgba(240,237,232,0.25)",
                        letterSpacing: "0.25em",
                        fontSize: "0.7rem",
                    }}
                    className="uppercase mb-3"
                >
                    About
                </p>
                <h1
                    style={{
                        fontFamily: "var(--font-playfair)",
                        color: "#f0ede8",
                        fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                    }}
                    className="italic mb-2 leading-tight"
                >
                    Sepehr
                </h1>
                <p
                    style={{
                        fontFamily: "var(--font-outfit)",
                        color: "rgba(240,237,232,0.4)",
                        letterSpacing: "0.18em",
                        fontSize: "0.72rem",
                    }}
                    className="uppercase mb-16"
                >
                    idk what am i yet.
                </p>

                <div
                    style={{
                        fontFamily: "var(--font-outfit)",
                        color: "rgba(240,237,232,0.6)",
                        fontSize: "1rem",
                        lineHeight: "1.9",
                    }}
                    className="space-y-8 text-white"
                >
                    <p>
                        This section is currently a void. Not a metaphorical void; a literal one. The kind that stares back. I'll fill it with actual information about myself once I figure out what to say that doesn't sound like a LinkedIn bio written by a robot having an identity crisis.
                    </p>
                    <p>
                        This paragraph is also empty. A vast, echoing emptiness. Somewhere in a parallel universe, a version of me already wrote something compelling here about my background and experience. That version of me had his life together. I am not that version.
                    </p>
                    <p>
                        I've apparently done things worth mentioning — projects, tools, technologies, the whole deal. What those things are will be revealed in due time. Possibly after sleep. Possibly after an existential reckoning. The timeline is unclear.
                    </p>
                    <p>
                        When I'm not avoiding writing this section, I'm probably doing something that would sound interesting here if I just got around to describing it. Hobbies. Passions. A general sense of direction. Coming soon™.
                    </p>

                    <div
                        style={{ borderColor: "rgba(240,237,232,0.1)" }}
                        className="border-t pt-8"
                    >
                        <p
                            style={{
                                color: "rgba(240,237,232,0.35)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.05em",
                            }}
                            className="mb-4"
                        >
                            Currently open to new opportunities. TLDR: UNEMPLOYED
                        </p>
                        <a
                            href="mailto:sepehrth85@gmail.com"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                color: "#f0ede8",
                                fontSize: "1.3rem",
                            }}
                            className="italic hover:opacity-60 transition-opacity duration-300"
                        >
                            sepehrth85@gmail.com
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
