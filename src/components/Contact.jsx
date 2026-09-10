import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Mail, MapPin, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const { theme } = useTheme()
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2
        className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Contact{' '}
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mb-16 leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>

      <div
        ref={formRef}
        className={`max-w-2xl mx-auto p-8 rounded-3xl ${
          theme === 'dark'
            ? 'bg-slate-800/50 border border-slate-700/50'
            : 'bg-white/60 border border-gray-200'
        }`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p
                className={`text-sm ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                Email
              </p>
              <p
                className={`font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                hello@example.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p
                className={`text-sm ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                Ubicación
              </p>
              <p
                className={`font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ciudad, País
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Tu nombre"
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border border-slate-600 text-white placeholder-gray-500'
                  : 'bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400'
              }`}
            />
            <input
              type="email"
              placeholder="Tu email"
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border border-slate-600 text-white placeholder-gray-500'
                  : 'bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400'
              }`}
            />
          </div>
          <input
            type="text"
            placeholder="Asunto"
            className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500 ${
              theme === 'dark'
                ? 'bg-slate-900/50 border border-slate-600 text-white placeholder-gray-500'
                : 'bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
          <textarea
            rows="5"
            placeholder="Tu mensaje..."
            className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500 resize-none ${
              theme === 'dark'
                ? 'bg-slate-900/50 border border-slate-600 text-white placeholder-gray-500'
                : 'bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
