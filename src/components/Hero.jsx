import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Interactive 3D experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Discover the world with effortless planning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-lg text-slate-700 max-w-xl"
          >
            Craft your perfect journey with curated destinations, flexible packages, and real-time support. Built for modern travelers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#packages" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/25">
              Explore Packages
            </a>
            <a href="#destinations" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 backdrop-blur px-6 py-3 text-slate-800 font-semibold hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
              Popular Destinations
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
