import { useEffect, useState } from "react"

const taglines = [
  "Building the future with AI & Cloud.",
  "Empower. Innovate. Scale.",
  "Next-gen software for your business.",
]

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setTaglineIdx(i => (i + 1) % taglines.length), 2500)
    return () => clearInterval(interval)
  }, [])
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-12 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#1a1333] via-purple-900 to-[#3a206e] animate-gradient-move" />
        {/* SVG wave */}
        <svg className="absolute bottom-0 left-0 w-full" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#a78bfa33" d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`absolute rounded-full bg-purple-400/20 blur-2xl animate-float${i % 3 + 1}`} style={{
            width: `${32 + (i % 3) * 16}px`,
            height: `${32 + (i % 2) * 24}px`,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
          }} />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in">
        {/* Futuristic logo */}
        <div className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-neon tracking-widest mb-2">NC</div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-2 drop-shadow-neon">Nexocore</h1>
        <p className="text-2xl sm:text-3xl max-w-2xl text-center mb-6 text-white/80 min-h-[2.5em] transition-all duration-500">
          {taglines[taglineIdx]}
        </p>
        <a href="#services" className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-400/50 hover:scale-110 transition-all duration-200 border border-white/20 backdrop-blur-md text-xl tracking-wide animate-pulse">Explore Services</a>
      </div>
    </section>
  )
} 