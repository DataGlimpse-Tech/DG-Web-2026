import { useScrollProgress } from './hooks/useScrollProgress'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Research  from './components/Research'
import Projects  from './components/Projects'
import Products  from './components/Products'
import Workshops from './components/Workshops'
import Careers   from './components/Careers'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  const { progress } = useScrollProgress()

  return (
    <>
      {/* Top scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress * 100}%` }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Products />
        <Workshops />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
