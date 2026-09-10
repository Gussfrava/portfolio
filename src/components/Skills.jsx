import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const { theme } = useTheme()
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
        },
        width: 0,
        opacity: 0,
        duration: 1,
        delay: i * 0.08,
        ease: 'power2.out',
      })
    })
  }, [])

  const skills = [
    { name: 'React', level: 90, color: '#10b981' },
    { name: 'JavaScript', level: 85, color: '#34d399' },
    { name: 'TypeScript', level: 80, color: '#06b6d4' },
    { name: 'Node.js', level: 75, color: '#14b8a6' },
    { name: 'Python', level: 70, color: '#2dd4bf' },
    { name: 'Tailwind CSS', level: 95, color: '#10b981' },
    { name: 'PostgreSQL', level: 65, color: '#0d9488' },
    { name: 'Docker', level: 60, color: '#06b6d4' },
  ]

  const tools = [
    'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Linux',
    'AWS', 'Vercel', 'Netlify', 'MongoDB', 'Redis', 'GraphQL',
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Mis{' '}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed text-sm sm:text-base ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-5 sm:space-y-6">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {skill.name}
                </span>
                <span
                  className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className={`h-2 sm:h-2.5 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
                }`}
              >
                <div
                  ref={el => barsRef.current[i] = el}
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3
            className={`text-lg sm:text-xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Herramientas y Tech
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {tools.map(tool => (
              <div
                key={tool}
                className={`p-3 sm:p-4 rounded-xl text-center text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border border-slate-800 text-gray-300 hover:border-emerald-500/30'
                    : 'bg-white border border-gray-100 text-gray-700 hover:border-emerald-400 shadow-sm'
                }`}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
