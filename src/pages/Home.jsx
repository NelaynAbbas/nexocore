import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#1a1333] to-[#3a206e] text-white relative overflow-hidden">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">NC</div>
        <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-2">Nexocore</h1>
        <p className="text-lg sm:text-2xl max-w-xl text-center mb-6">Empowering your business with innovative software solutions and world-class services.</p>
        <Link to="/services" className="px-6 py-3 rounded-full bg-white text-[#3a206e] font-semibold shadow-lg hover:bg-purple-200 transition-all duration-200">Explore Our Services</Link>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  )
} 