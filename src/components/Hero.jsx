import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] grid place-items-center overflow-hidden snap-section md:min-h-screen">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-cyan-300">
            Futuristic design studio
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            The Daltons
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/85 max-w-2xl mx-auto">
            We craft interactive brands, cinematic websites and delightful product experiences with 3D, motion and code.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-xl px-5 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20">See our work</a>
            <a href="#contact" className="inline-flex items-center rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:border-cyan-400/40">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
