const services = [
  "Mobile App Development",
  "Web Development",
  "Cloud Applications",
  "Web & Graphic Design",
  "SaaS Development",
  "AI/ML Solutions",
  "LLMs Integration",
  "CI/CD Automation",
]

export default function Services() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1333] to-[#3a206e] text-white py-12 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {services.map(service => (
          <div
            key={service}
            className="flex items-center gap-4 bg-white/10 rounded-xl p-5 shadow-md hover:scale-105 hover:bg-purple-700/30 transition-transform duration-200 cursor-pointer"
          >
            <span className="w-4 h-4 bg-blue-400 rounded-full inline-block" />
            <span className="text-lg font-medium">{service}</span>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-center text-white/80">We offer a wide range of software development and tech services, and can also work with you on any specific product or custom solution.</p>
    </section>
  )
} 