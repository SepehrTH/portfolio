const links = [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills"},
    { label: "Resume", href: "/resume.pdf", external: true },
    { label: "Say hi", href: "" },
]

export default function Navbar() {
    return(
        <nav style={{ fontFamily: "var(--font-outfit)" }} className="fixed top-6 rounded-full left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 py-2 px-2 bg-[rgba(10,10,16,0.55)] backdrop-blur-[20px] border border-solid border-[#F0EDE8]/10">
            <span style={{ fontFamily: "var(--font-playfair)" }} className="w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(240,237,232,0.15)] italic">S</span>

            {links.map(({ label, href, external }) => (
                <a key={label} href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className="text-lg text-[rgba(240,237,232,0.55)] hover:text-white px-4 transition-colors duration-200">
                    {label}
                </a>
            ))}

        </nav>
    )
}