export default function Contact() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1333] to-[#3a206e] text-white py-12 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
      <div className="bg-white/10 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <button type="submit" className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200">Send Message</button>
        </form>
        <div className="text-center text-white/80 mt-4">
          <div>Email: <a href="mailto:info@nexocore.com" className="underline hover:text-purple-300">info@nexocore.com</a></div>
          <div className="mt-1">We usually respond within 24 hours.</div>
        </div>
      </div>
    </section>
  )
} 