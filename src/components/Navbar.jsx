import { useEffect, useState } from "react"

const navLinks = [
  { name: "Home", href: "#hero", icon: "🏠" },
  { name: "About", href: "#about", icon: "🧬" },
  { name: "Services", href: "#services", icon: "🚀" },
  { name: "Contact", href: "#contact", icon: "✉️" },
]

export default function Navbar() {
  const [active, setActive] = useState("#hero")

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href)
        return el ? el.getBoundingClientRect().top : Infinity
      })
      const idx = offsets.findIndex((top, i) => top > 0 && (i === 0 || offsets[i - 1] <= 0))
      setActive(navLinks[Math.max(0, idx - 1)].href)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg shadow-xl border border-purple-400/30">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-white transition-all duration-200 hover:bg-purple-400/30 hover:text-purple-200 ${active === link.href ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105' : ''}`}
          >
            <span className="text-lg">{link.icon}</span>
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
      </div>
    </nav>
  )
} 