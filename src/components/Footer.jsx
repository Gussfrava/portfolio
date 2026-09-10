import { useTheme } from '../context/ThemeContext'
import { Code, Globe, MessageCircle } from 'lucide-react'

export default function Footer() {
  const { theme } = useTheme()

  const socials = [
    { icon: <Code className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Globe className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <MessageCircle className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className={`w-full border-t ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-100'}`} style={{ padding: '48px 24px' }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
        <a href="#hero" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Portfolio
        </a>

        <div className="flex gap-4">
          {socials.map(social => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400'
                  : 'bg-gray-50 border border-gray-100 hover:border-emerald-400 text-gray-500 hover:text-emerald-600'
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className={`text-sm text-center ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
          &copy; {new Date().getFullYear()} Portfolio
        </p>
      </div>
    </footer>
  )
}
