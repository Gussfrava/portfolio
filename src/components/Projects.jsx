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
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 80,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.2,
      })
    })
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://placehold.co/600x400/6366f1/ffffff?text=Project+1',
    },
    {
      title: 'Task Management App',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      image: 'https://placehold.co/600x400/06b6d4/ffffff?text=Project+2',
    },
    {
      title: 'AI Dashboard',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
      tags: ['Python', 'TensorFlow', 'React'],
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Project+3',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2
        className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Mis{' '}
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Proyectos
        </span>
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mb-16 leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
              theme === 'dark'
                ? 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50'
                : 'bg-white/60 border border-gray-200 hover:border-indigo-400'
            }`}
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  <Code className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full ${
                      theme === 'dark'
                        ? 'bg-indigo-500/20 text-indigo-300'
                        : 'bg-indigo-100 text-indigo-600'
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
    </section>
  )
}
