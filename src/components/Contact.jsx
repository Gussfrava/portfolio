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
  }

  const inputClasses = `w-full px-4 py-3 sm:py-3.5 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base ${
    theme === 'dark'
      ? 'bg-slate-900/50 border border-slate-800 text-white placeholder-gray-500'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'
  }`

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Contact{' '}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed text-sm sm:text-base ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>

      <div
        ref={formRef}
        className={`max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl ${
          theme === 'dark'
            ? 'bg-slate-900/50 border border-slate-800'
            : 'bg-white border border-gray-100 shadow-sm'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                Email
              </p>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                hello@example.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                Ubicación
              </p>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Ciudad, País
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="text"
              placeholder="Tu nombre"
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Tu email"
              className={inputClasses}
            />
          </div>
          <input
            type="text"
            placeholder="Asunto"
            className={inputClasses}
          />
          <textarea
            rows="5"
            placeholder="Tu mensaje..."
            className={`${inputClasses} resize-none`}
          />
          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
