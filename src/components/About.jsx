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

    gsap.from(sectionRef.current.querySelector('p'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
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
      icon: <Code className="w-7 h-7" />,
      title: 'Desarrollo Web',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'UI/UX Design',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Rendimiento',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Sobre{' '}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Mí
        </span>
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed text-sm sm:text-base ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30'
                : 'bg-white border border-gray-100 shadow-sm hover:border-emerald-400'
            }`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white mb-4 sm:mb-5">
              {feature.icon}
            </div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {feature.title}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
