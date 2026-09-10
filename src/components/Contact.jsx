import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Mail, MapPin, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const { theme } = useTheme()
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll('.contact-animate'), {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      y: 50, opacity: 0, duration: 0.8, stagger: 0.15,
    })
  }, [])

  const handleSubmit = (e) => { e.preventDefault() }

  const inputClasses = `w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500 text-base ${
    theme === 'dark'
      ? 'bg-slate-900/50 border border-slate-800 text-white placeholder-gray-500'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'
  }`

  const glassStyle = theme === 'dark'
    ? 'bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl'
    : 'bg-white/60 border border-gray-200/50 backdrop-blur-xl shadow-lg'

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '120px 24px' }}>
      <div className="w-full max-w-2xl mx-auto text-center">
        <h2 className={`contact-animate text-3xl sm:text-4xl md:text-5xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Contact{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <p className={`contact-animate text-center mb-16 leading-relaxed text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>

        <div className={`contact-animate p-8 sm:p-10 rounded-3xl ${glassStyle}`}>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                <p className={`text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>hello@example.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Ubicación</p>
                <p className={`text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ciudad, País</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Tu nombre" className={inputClasses} />
              <input type="email" placeholder="Tu email" className={inputClasses} />
            </div>
            <input type="text" placeholder="Asunto" className={inputClasses} />
            <textarea rows="5" placeholder="Tu mensaje..." className={`${inputClasses} resize-none`} />
            <button
              type="submit"
              className="w-full py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-3 text-base"
            >
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
