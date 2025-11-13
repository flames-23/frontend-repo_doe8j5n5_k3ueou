import { motion } from 'framer-motion'
import { Map, Calendar, Compass, Star, Quote, Plane } from 'lucide-react'

const card = (delay) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.3 },
})

export default function Sections() {
  return (
    <main className="relative -mt-10 z-10">
      <section id="destinations" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trending destinations
          </motion.h2>
          <p className="mt-2 text-slate-600">Handpicked places with the best weather and vibes right now.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{ city: 'Bali', country: 'Indonesia' }, { city: 'Kyoto', country: 'Japan' }, { city: 'Santorini', country: 'Greece' }].map((d, i) => (
              <motion.div key={d.city} {...card(i * 0.1)} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{d.city}</h3>
                      <p className="text-slate-600">{d.country}</p>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Map size={20} />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-amber-500">
                    <Star size={18} />
                    <span className="text-sm font-medium">4.9 average rating</span>
                  </div>
                  <button className="mt-6 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800">View details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-gradient-to-b from-white to-blue-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-slate-900">
            Flexible packages
          </motion.h2>
          <p className="mt-2 text-slate-600">Mix flights, stays, and experiences the way you like.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Explorer', price: '$799', features: ['Round-trip flight', '3 nights stay', 'City tour'] },
              { name: 'Signature', price: '$1299', features: ['Flight + Premium hotel', '5 nights', 'Guided experiences'] },
              { name: 'Elite', price: '$1999', features: ['Business class', 'Luxury resort', 'Private guide'] },
            ].map((p, i) => (
              <motion.div key={p.name} {...card(i * 0.1)} className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
                <div className="absolute inset-x-0 -top-5 mx-auto h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg">
                  <Plane size={18} />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">{p.price}</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{f}</li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800">Choose plan</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-slate-900">
            Traveler stories
          </motion.h2>
          <p className="mt-2 text-slate-600">Real experiences from our community.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <motion.blockquote key={i} {...card(i * 0.1)} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
                <Quote className="text-blue-500" size={20} />
                <p className="mt-3 text-slate-700">“Everything was seamless — from flights to hotel check-in. The curated experiences made it unforgettable.”</p>
                <div className="mt-4 text-sm font-medium text-slate-900">Alex, United States</div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-t from-white to-blue-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Plan with an expert</h3>
                <p className="mt-2 text-slate-700">Tell us where you want to go and we’ll craft an itinerary just for you.</p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  <li className="flex items-center gap-2"><Calendar size={18} className="text-blue-600" /> Flexible dates</li>
                  <li className="flex items-center gap-2"><Compass size={18} className="text-blue-600" /> Local insights</li>
                  <li className="flex items-center gap-2"><Star size={18} className="text-blue-600" /> Best-value deals</li>
                </ul>
              </div>
              <form className="grid gap-4">
                <input type="text" placeholder="Your name" className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200" />
                <input type="email" placeholder="Email address" className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200" />
                <textarea placeholder="Where do you want to go?" rows="4" className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200" />
                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/25">Request a plan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
