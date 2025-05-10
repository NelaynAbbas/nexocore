import { useEffect, useState } from "react"

const stats = [
  { label: "Projects Deployed", value: 50, suffix: "+", desc: "Launched in market" },
  { label: "International Clients", value: 10, suffix: "+", desc: "Worldwide reach" },
  { label: "Retention Rate", value: 95, suffix: "%", desc: "Client satisfaction" },
  { label: "Team Members", value: 20, suffix: "+", desc: "Expert engineers" },
]

export default function About() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center py-24 px-4 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white drop-shadow-neon">Who We Are</h2>
      <p className="text-lg text-white/80 text-center mb-10 max-w-2xl">Nexocore is a <span className="text-purple-300 font-semibold">futuristic software company</span> delivering AI, cloud, and digital solutions for tomorrow's businesses.</p>
      <div className="w-full max-w-5xl overflow-x-auto pb-4">
        <div className="flex gap-8 min-w-[700px] sm:min-w-0 justify-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-white/10 rounded-2xl p-8 border border-blue-400/30 shadow-xl backdrop-blur-md min-w-[220px] hover:scale-105 hover:shadow-purple-400/40 transition-transform duration-200 cursor-pointer group"
            >
              <span className="text-4xl font-extrabold text-purple-300 drop-shadow-neon mb-2">{stat.value}{stat.suffix}</span>
              <span className="text-base text-white/80 font-semibold mb-1">{stat.label}</span>
              <span className="text-xs text-white/60 group-hover:text-purple-200 transition-colors">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 