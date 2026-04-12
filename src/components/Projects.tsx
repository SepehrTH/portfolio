"use client"
import { motion } from "motion/react"

const projects = [
    {
        name: "CalIntern",
        description: "Local AI planning assistant — connects to Google Calendar and lets you manage your schedule through natural conversation. Built on a multi-turn agentic loop where a local LLM reads your calendar, reasons over availability, and writes events. All local, no cloud.",
        tags: ["React", "Express", "Ollama", "Claude Code"],
        github: "https://github.com/SepehrTH/calintern",
    },
    
]

export default function Projects() {
    return (
        <section
            id="work"
            style={{ backgroundColor: "#050508", fontFamily: "var(--font-outfit)" }}
            className="min-h-screen w-full flex flex-col justify-center px-6 py-20 md:px-12"
        >
            <div className="max-w-4xl mx-auto w-full">

                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-5 mb-4">
                        <p
                            style={{ color: "rgba(240,237,232,0.3)", letterSpacing: "0.2em" }}
                            className="text-xs uppercase shrink-0"
                        >
                            Selected Work
                        </p>
                        <div style={{ borderColor: "rgba(240,237,232,0.1)" }} className="flex-1 border-t" />
                    </div>
                    <h2
                        style={{ fontFamily: "var(--font-playfair)", color: "#f0ede8" }}
                        className="text-4xl italic"
                    >
                        Work
                    </h2>
                </motion.div>

                {/* Top rule */}
                <motion.div
                    style={{ borderColor: "rgba(240,237,232,0.1)" }}
                    className="border-t"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                />

                {/* Project rows */}
                {projects.map((project, i) => (
                    <motion.a
                        key={project.name}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-6 py-8 cursor-pointer will-change-transform"
                        style={{ borderBottom: "1px solid rgba(240,237,232,0.1)" }}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 6 }}
                    >
                        {/* Number */}
                        <span
                            style={{
                                fontFamily: "var(--font-playfair)",
                                color: "rgba(240,237,232,0.2)",
                                minWidth: "2rem",
                            }}
                            className="text-sm italic pt-1 transition-colors duration-300 group-hover:text-[rgba(240,237,232,0.5)]"
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Content */}
                        <div className="flex-1 flex flex-col gap-3">
                            <h3
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    color: "rgba(240,237,232,0.7)",
                                }}
                                className="text-2xl italic leading-none transition-colors duration-300 group-hover:text-[#f0ede8]"
                            >
                                {project.name}
                            </h3>

                            <p
                                style={{ color: "rgba(240,237,232,0.35)" }}
                                className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-[rgba(240,237,232,0.55)]"
                            >
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-1">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            color: "rgba(240,237,232,0.35)",
                                            border: "1px solid rgba(240,237,232,0.1)",
                                        }}
                                        className="text-xs rounded-full px-3 py-1 transition-colors duration-300 group-hover:border-[rgba(240,237,232,0.2)] group-hover:text-[rgba(240,237,232,0.55)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Arrow */}
                        <span
                            style={{ color: "rgba(240,237,232,0.2)" }}
                            className="text-lg pt-1 transition-all duration-300 group-hover:text-[rgba(240,237,232,0.7)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                            ↗
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
