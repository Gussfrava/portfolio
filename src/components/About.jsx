import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Code, Palette, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const { theme } = useTheme()
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.from(sectionRef.current.querySelector('h2'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
    })

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
      })
    })
  }, [])

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo Web',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rendimiento',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2
        className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Sobre{' '}
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Mí
        </span>
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mb-16 leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
              theme === 'dark'
                ? 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50'
                : 'bg-white/60 border border-gray-200 hover:border-indigo-400'
            }`}
            style={{
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white mb-5">
              {feature.icon}
            </div>
            <h3
              className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {feature.title}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
