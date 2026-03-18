"use client"
import { motion, useScroll, useTransform } from "motion/react"

export default function Hero() {
    const { scrollY } = useScroll()
    const bgScale = useTransform(scrollY, [0, 600], [1, 0.8])
    const bgOpacity = useTransform(scrollY, [0, 400], [0.9, 0])

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            {/* <div style={{
                position: "absolute", top: "-20%", left: "-10%",
                width: "60vw", height: "60vw", borderRadius: "9999px",
                background: "radial-gradient(ellipse at center, rgba(14,100,233,0.55) 0%, transparent 70%)",
                animation: "drift 8s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", bottom: "-20%", right: "-10%",
                width: "50vw", height: "50vw", borderRadius: "9999px",
                background: "radial-gradient(ellipse at center, rgba(80,160,255,0.40) 0%, transparent 70%)",
                animation: "drift2 10s ease-in-out infinite",
            }} /> */}
            <motion.div style={{
                position: "absolute",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                overflow: "hidden",
                backgroundRepeat: "no-repeat",
                opacity: bgOpacity,
                scale: bgScale,
                inset: 0,
                backgroundImage: "url('/neb.png')",
                backgroundSize: "cover",
                // backgroundPosition: "center",
            }} />

            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(4rem, 13vw, 7rem)" }} className="italic text-white z-10">
                Sepehr
            </motion.h1>

            <motion.p 
                style={{fontFamily: "var(--font-playfair)", textShadow: "0 0 40px rgba(255,255,255,0.3)"}} 
                className="z-10 py-4 font-light text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            >
                I'll fill this out later.
            </motion.p>

            <motion.div
                className="flex gap-4 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            >    
                <a href="#work" className="rounded-full px-5 py-3 text-sm border border-[rgba(240,237,232,0.4)] hover:bg-[rgba(240,237,232,0.1)] transition-colors duration-300 bg-gray-100 text-black">
                    See My Work
                </a>
                <a href="mailto:sepehrth85@gmail.com" className="rounded-full px-5 py-3 text-sm flex border border-[rgba(240,237,232,0.4)] text-white hover:bg-[rgba(240,237,232,0.1)] transition-colors duration-300">
                    Reach Out
                </a>
            </motion.div>
        </section>
    )
}