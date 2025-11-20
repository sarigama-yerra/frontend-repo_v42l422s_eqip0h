import { motion } from 'framer-motion'
import { Rocket, PenTool, Code2, Share2 } from 'lucide-react'

const services = [
  { icon: Rocket, title: 'Brand Strategy', desc: 'Positioning, naming and identity systems built to last.' },
  { icon: PenTool, title: 'Visual Design', desc: 'Art direction, design systems and polished interfaces.' },
  { icon: Code2, title: 'Web & Product', desc: 'High-performance websites and full-stack product development.' },
  { icon: Share2, title: 'Motion & 3D', desc: 'Expressive animations, Spline scenes and realtime experiences.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 snap-section md:min-h-screen md:flex md:items-center">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-2 text-slate-300/80">A nimble team that blends design and engineering.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                <s.icon className="w-6 h-6" />
              </div>
              <div className="text-white font-semibold">{s.title}</div>
              <div className="mt-1 text-slate-300/80 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
