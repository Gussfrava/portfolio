import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const { theme } = useTheme()
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const floatingRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4')

    gsap.to(floatingRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p
          ref={subtitleRef}
          className={`text-sm md:text-base font-medium tracking-widest uppercase mb-4 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
          }`}
        >
          Desarrollador Full Stack
        </p>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Hola, soy
          </span>
          <br />
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
            Tu Nombre
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className={`px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              theme === 'dark'
                ? 'text-gray-300 border border-gray-600 hover:border-indigo-500 hover:text-indigo-400'
                : 'text-gray-700 border border-gray-300 hover:border-indigo-500 hover:text-indigo-600'
            }`}
          >
            Contactame
          </a>
        </div>
      </div>

      <a
        href="#about"
        ref={floatingRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`} />
      </a>
    </section>
  )
}
