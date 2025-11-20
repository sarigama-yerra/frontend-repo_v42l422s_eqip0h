import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import TerminalScroll from './components/TerminalScroll'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <ScrollProgress />
      <TerminalScroll />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(40rem_40rem_at_120%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(35rem_35rem_at_-20%_10%,rgba(34,211,238,0.12),transparent_40%)]" />

      <Navbar />
      <Hero />

      <main className="relative z-10 md:snap-y md:snap-mandatory">
        <Showcase />
        <Services />
        <Contact />

        <footer className="py-12 text-center text-slate-400">
          © {new Date().getFullYear()} The Daltons — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
