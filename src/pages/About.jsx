export default function About() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1333] to-[#3a206e] text-white py-12 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-300 mb-2">50+</span>
          <span className="text-lg font-medium">Realtime Projects Deployed in Market</span>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-300 mb-2">10+</span>
          <span className="text-lg font-medium">International Clients</span>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-300 mb-2">95%</span>
          <span className="text-lg font-medium">Retention Rate</span>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-300 mb-2">20+</span>
          <span className="text-lg font-medium">Team Members</span>
        </div>
      </div>
      <p className="mt-10 max-w-2xl text-center text-lg text-white/80">Nexocore is a leading software development company delivering innovative solutions and services to clients worldwide. We specialize in building scalable products and providing expert tech services tailored to your business needs.</p>
    </section>
  )
} 