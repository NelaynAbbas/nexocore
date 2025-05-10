export default function Footer() {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-lg border-t border-purple-700/30 py-6 mt-8 flex flex-col items-center">
      <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-neon">Nexocore</span>
      <span className="text-sm text-white/60 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</span>
      <a href="https://instagram.com/nc.nexocore" target="_blank" rel="noopener noreferrer" className="mt-2 text-white/80 hover:text-purple-300 underline">@nc.nexocore</a>
    </footer>
  )
} 