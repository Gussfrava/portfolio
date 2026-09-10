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
        delay: i * 0.1,
        ease: 'power2.out',
      })
    })
  }, [])

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
    { name: 'PostgreSQL', level: 65, color: '#4169E1' },
    { name: 'Docker', level: 60, color: '#2496ED' },
  ]

  const tools = [
    'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Linux',
    'AWS', 'Vercel', 'Netlify', 'MongoDB', 'Redis', 'GraphQL',
  ]

  return (
    <section
      id="skills"
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
          Skills
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

      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills bars */}
        <div className="space-y-5">
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
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className={`h-2.5 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                }`}
              >
                <div
                  ref={el => barsRef.current[i] = el}
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <div>
          <h3
            className={`text-xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Herramientas y Tech
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {tools.map(tool => (
              <div
                key={tool}
                className={`p-3 rounded-xl text-center text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:border-indigo-500/50'
                    : 'bg-white/60 border border-gray-200 text-gray-700 hover:border-indigo-400'
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
