import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NovaPay',
    tag: 'Fintech Platform',
    image: 'https://images.unsplash.com/photo-1739104545868-e66836138d6e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhUGF5fGVufDB8MHx8fDE3NjM2NDE1Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Orbit UI',
    tag: 'Design System',
    image: 'https://images.unsplash.com/photo-1566479790936-ef1179f46ad5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmJpdCUyMFVJfGVufDB8MHx8fDE3NjM2NDE1Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Eclipse',
    tag: '3D Portfolio',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2069&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-slate-300/80">A selection of recent projects. Click to explore.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-fuchsia-500">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 mb-2">{p.tag}</div>
                <div className="text-lg font-semibold text-white">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
