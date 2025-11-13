import { Menu, Plane, Search, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur bg-white/70 border border-white/60 shadow-lg shadow-blue-500/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <Plane size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800">SkyQuest</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <a href="#destinations" className="hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#packages" className="hover:text-blue-600 transition-colors">Packages</a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors">Stories</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
                <Search size={16} className="text-slate-500 group-hover:text-blue-600" />
                <span>Search</span>
              </button>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
              >
                <Phone size={16} />
                Get help
              </motion.a>
            </div>

            <button className="md:hidden rounded-xl border border-slate-200 p-2 text-slate-700">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
