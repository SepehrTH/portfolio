"use client"
import { motion } from "motion/react"

const skills = [
    {
        category: "Languages",
        items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Bash"],
    },
    {
        category: "Frameworks",
        items: ["React", "Next.js", "FastAPI", "NumPy", "Pandas", "Gradio", "Matplotlib"],
    },
    {
        category: "AI / ML",
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "RAG", "YOLO"],
    },
    {
        category: "Tools",
        items: ["Git", "Docker", "GitHub Copilot", "vim", "PyCharm", "Agentic Coding Tools"],
    },
]

export default function Skills() {
    return (
        <section
            id="skills"
            style={{ backgroundColor: "#050508", fontFamily: "var(--font-outfit)" }}
            className="w-full px-6 py-24 md:px-12"
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
                            Expertise
                        </p>
                        <div style={{ borderColor: "rgba(240,237,232,0.1)" }} className="flex-1 border-t" />
                    </div>
                    <h2
                        style={{ fontFamily: "var(--font-playfair)", color: "#f0ede8" }}
                        className="text-4xl italic"
                    >
                        Skills
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

                {/* Skill rows */}
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.category}
                        className="flex items-start gap-8 py-7"
                        style={{ borderBottom: "1px solid rgba(240,237,232,0.1)" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.09 }}
                        viewport={{ once: true }}
                    >
                        {/* Category label */}
                        <span
                            style={{
                                fontFamily: "var(--font-playfair)",
                                color: "rgba(240,237,232,0.35)",
                                minWidth: "8rem",
                            }}
                            className="text-sm italic pt-1 shrink-0"
                        >
                            {skill.category}
                        </span>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, j) => (
                                <motion.span
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.09 + j * 0.04 }}
                                    viewport={{ once: true }}
                                    style={{
                                        // color: j === 0
                                        //     ? "rgba(240,237,232,0.75)"
                                        //     : "rgba(240,237,232,0.45)",
                                        border: j === 0
                                            ? "1px solid rgba(240,237,232,0.2)"
                                            : "1px solid rgba(240,237,232,0.1)",
                                    }}
                                    className="text-sm rounded-full px-3 py-1 text-[rgba(240,237,232,0.55)] transition-colors duration-300 hover:text-[rgba(240,237,232,0.9)] hover:border-[rgba(240,237,232,0.3)]"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
