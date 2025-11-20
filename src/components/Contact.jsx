import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We\'ll get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-24 snap-section md:min-h-screen md:flex md:items-center">
      <div className="mx-auto max-w-4xl px-6 w-full">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let\'s build something great</h2>
          <p className="mt-2 text-slate-300/80">Tell us a bit about your project and we\'ll reach out.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <input required type="email" placeholder="Email address" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          </div>
          <input placeholder="Company / Website" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea required placeholder="Project details" rows={5} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-400">We typically respond within 24 hours.</p>
            <button className="inline-flex items-center rounded-xl px-5 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20">Send message</button>
          </div>
          {status && <p className="text-sm text-cyan-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
