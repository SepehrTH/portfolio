const links = ["Home", "Work", "Resume", "Say hi"]

export default function Navbar() {
    return(
        <nav className="fixed top-6 rounded-full left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 py-2 px-2 bg-[rgba(10,10,16,0.55)] backdrop-blur-[20px] border border-solid border-[#F0EDE8]/[0.1]">
            <span style={{ fontFamily: "var(--font-playfair)" }} className="w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(240,237,232,0.15)]">S</span>

            {links.map((link) => (
                <a key={link} className="text-[rgba(240,237,232,0.55)] hover:text-white px-4 transition-colors duration-200" href="">
                    {link}
                </a>
            ))}

        </nav>
    )
}