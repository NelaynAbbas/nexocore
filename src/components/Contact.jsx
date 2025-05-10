export default function Contact() {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center py-32 px-4 animate-fade-in min-h-[60vh]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white drop-shadow-neon">Get in Touch</h2>
      <div className="relative flex justify-center w-full">
        <div className="max-w-md w-full bg-white/10 rounded-3xl shadow-2xl border border-purple-400/40 backdrop-blur-2xl p-10 flex flex-col items-center gap-6 floating-modal">
          <form className="flex flex-col gap-4 w-full">
            <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200" />
            <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200" />
            <textarea placeholder="Your Message" rows={4} className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200" />
            <button type="submit" className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/50 transition-transform duration-200 border border-white/20 focus:ring-2 focus:ring-purple-400">Send Message</button>
          </form>
          <div className="text-center text-white/70 mt-2">
            <div>Email: <a href="mailto:info@nexocore.com" className="underline hover:text-purple-300">info@nexocore.com</a></div>
            <div className="mt-1">We usually respond within 24 hours.</div>
          </div>
        </div>
      </div>
    </section>
  )
} 