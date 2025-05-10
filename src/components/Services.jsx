const services = [
  { name: "Mobile App Development", icon: "📱", desc: "iOS, Android, cross-platform apps with modern UI/UX." },
  { name: "Web Development", icon: "💻", desc: "Responsive, scalable web apps and portals." },
  { name: "Cloud Applications", icon: "☁️", desc: "Cloud-native, serverless, and scalable solutions." },
  { name: "Web & Graphic Design", icon: "🎨", desc: "Futuristic web and brand design." },
  { name: "SaaS Development", icon: "🛠️", desc: "Custom SaaS platforms for any industry." },
  { name: "AI/ML Solutions", icon: "🤖", desc: "AI, ML, and data-driven automation." },
  { name: "LLMs Integration", icon: "🔗", desc: "Integrate large language models into your products." },
  { name: "CI/CD Automation", icon: "⚡", desc: "Automated pipelines for rapid delivery." },
]

export default function Services() {
  return (
    <section id="services" className="relative flex flex-col items-center justify-center py-24 px-4 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white drop-shadow-neon">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {services.map(service => (
          <div
            key={service.name}
            className="group flex flex-col items-center gap-3 bg-white/10 rounded-2xl p-8 border border-blue-400/30 shadow-xl backdrop-blur-md hover:scale-105 hover:shadow-purple-400/40 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[180px]"
          >
            <span className="text-4xl mb-2 drop-shadow-neon group-hover:animate-bounce">{service.icon}</span>
            <span className="text-lg font-semibold text-white text-center group-hover:text-purple-300 transition-colors duration-200">{service.name}</span>
            <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 bg-gradient-to-t from-[#1a1333]/80 to-transparent p-4 text-white text-sm text-center min-h-[60px] flex items-center justify-center">
              {service.desc}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-center text-white/70">We deliver next-gen solutions for your business, from mobile apps to AI and cloud automation. Let's build the future together.</p>
    </section>
  )
} 