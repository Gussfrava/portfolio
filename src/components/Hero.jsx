import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const { theme } = useTheme()
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-subtitle', { y: 50, opacity: 0, duration: 0.8 })
      .from('.hero-title', { y: 80, opacity: 0, duration: 1 }, '-=0.4')
      .from('.hero-desc', { y: 40, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-cta', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')

    gsap.to('.hero-arrow', {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ padding: '120px 24px 80px' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #10b981, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <p
          className={`hero-subtitle text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase mb-6 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
          }`}
        >
          Desarrollador Full Stack
        </p>

        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Hola, soy
          </span>
          <br />
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
            Tu Nombre
          </span>
        </h1>

        <p
          className={`hero-desc text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 text-base"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className={`w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 text-base ${
              theme === 'dark'
                ? 'text-gray-300 border-2 border-gray-700 hover:border-emerald-500 hover:text-emerald-400'
                : 'text-gray-700 border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600'
            }`}
          >
            Contactame
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="hero-arrow absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`} />
      </a>
    </section>
  )
}
