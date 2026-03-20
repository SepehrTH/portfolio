import Link from "next/link"

const links = [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/#skills" },
    { label: "Work", href: "/#work" },
    { label: "Resume", href: "/resume.pdf", external: true },
    { label: "About", href: "/about" },
    { label: "Say hi", href: "mailto:sepehrth85@gmail.com", external: true },
]

export default function Navbar() {
    return (
        <nav style={{ fontFamily: "var(--font-outfit)" }} className="fixed top-6 rounded-full left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 py-2 px-2 bg-[rgba(10,10,16,0.55)] backdrop-blur-[20px] border border-solid border-[#F0EDE8]/10">
            <Link href="#" style={{ fontFamily: "var(--font-playfair)" }} className="w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(240,237,232,0.15)] italic text-white hover:bg-[rgba(240,237,232,0.08)] transition-colors duration-200">
                ST
            </Link>

            {links.map(({ label, href, external }) => (
                <Link
                    key={label}
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-sm text-[rgba(240,237,232,0.55)] hover:text-white px-4 transition-colors duration-200"
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}
