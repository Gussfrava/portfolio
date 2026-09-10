import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ExternalLink, Code } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const { theme } = useTheme()
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll('.projects-animate'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: (i % 3) * 0.15,
        ease: 'power2.out',
      })

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
      tags: ['React', 'Node.js', 'MongoDB'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag and drop, colaboración en tiempo real y notificaciones.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'AI Dashboard',
      description: 'Dashboard con inteligencia artificial para análisis de datos y visualización de métricas.',
      tags: ['Python', 'TensorFlow', 'React'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Social Media App',
      description: 'Red social con chat en tiempo real, sistema de seguidores y feed personalizado.',
      tags: ['React', 'Firebase', 'Tailwind'],
      color: 'from-emerald-600 to-green-500',
    },
    {
      title: 'Fitness Tracker',
      description: 'Aplicación para seguimiento de ejercicios, nutrición y objetivos fitness personalizados.',
      tags: ['React Native', 'Node.js', 'Redis'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Crypto Wallet',
      description: 'Billetera de criptomonedas con gráficos en tiempo real y portfolio tracking.',
      tags: ['Vue.js', 'Web3.js', 'Solidity'],
      color: 'from-teal-600 to-emerald-500',
    },
    {
      title: 'Booking System',
      description: 'Sistema de reservas con calendario interactivo, pagos integrados y notificaciones.',
      tags: ['Next.js', 'Prisma', 'Stripe'],
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Music Streaming',
      description: 'Plataforma de streaming de música con reproducción en línea y playlists compartidas.',
      tags: ['React', 'Node.js', 'AWS S3'],
      color: 'from-cyan-600 to-teal-500',
    },
    {
      title: 'Real Estate Platform',
      description: 'Portal inmobiliario con búsqueda avanzada, tours virtuales y sistema de agentes.',
      tags: ['Next.js', 'PostgreSQL', 'Mapbox'],
      color: 'from-green-600 to-emerald-600',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-28 lg:py-32"
      style={{ padding: '100px 24px' }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className={`projects-animate text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Mis{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>

          <p
            className={`projects-animate max-w-2xl mx-auto leading-relaxed text-base sm:text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`group rounded-2xl overflow-hidden text-center transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30'
                  : 'bg-white border border-gray-100 shadow-sm hover:border-emerald-400'
              }`}
            >
              <div className={`h-48 sm:h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/90 text-5xl sm:text-6xl font-bold opacity-20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5 gap-4">
                  <a href="#" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <Code className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className={`text-lg sm:text-xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm sm:text-base mb-5 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        theme === 'dark'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
