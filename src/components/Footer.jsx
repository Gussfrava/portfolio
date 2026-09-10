import { useTheme } from '../context/ThemeContext'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const { theme } = useTheme()

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ]

  return (
    <footer
      className={`py-12 px-6 border-t ${
        theme === 'dark'
          ? 'border-slate-800 text-gray-500'
          : 'border-gray-200 text-gray-400'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        <div className="flex gap-4">
          {socials.map(social => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-indigo-500/20 text-gray-400 hover:text-indigo-400'
                  : 'bg-gray-100 hover:bg-indigo-100 text-gray-500 hover:text-indigo-600'
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Portfolio. Hecho con ❤️
        </p>
      </div>
    </footer>
  )
}
