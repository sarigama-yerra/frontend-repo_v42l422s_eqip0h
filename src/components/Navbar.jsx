import { useState } from 'react'
import { Menu, X, Rocket, Palette, Briefcase, Mail, Sparkles } from 'lucide-react'

const links = [
  { href: '#work', label: 'Work', icon: <Briefcase className="w-4 h-4" /> },
  { href: '#services', label: 'Services', icon: <Rocket className="w-4 h-4" /> },
  { href: '#about', label: 'About', icon: <Palette className="w-4 h-4" /> },
  { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/60 border border-white/10 shadow-2xl shadow-cyan-500/5 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="relative">
                <span className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 blur-md opacity-0 group-hover:opacity-100 transition" />
                <Sparkles className="relative w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-sm uppercase tracking-widest text-cyan-300/80">the daltons</div>
                <div className="-mt-0.5 font-semibold text-white">Creative Studio</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40 transition">
                  <span className="text-cyan-300">{l.icon}</span>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:from-cyan-300 hover:to-fuchsia-400 transition shadow-lg shadow-cyan-500/20">
                Start a Project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-slate-200 hover:text-white">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40">
                  <span className="text-cyan-300">{l.icon}</span>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-xl text-slate-900 bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Start a Project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
