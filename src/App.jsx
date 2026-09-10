import { useState, useEffect, useRef } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contacto' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="navbar">
        <a href="#hero" className="navbar__logo">MiPortfolio</a>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero__subtitle', { y: 30, opacity: 0, duration: 0.8 })
      .from('.hero__title-greeting', { y: 50, opacity: 0, duration: 1 }, '-=0.4')
      .from('.hero__title-name', { y: 50, opacity: 0, duration: 1 }, '-=0.6')
      .from('.hero__description', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.hero__cta', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero__scroll-indicator', { opacity: 0, duration: 0.6 }, '-=0.2')

    gsap.to('.hero__scroll-indicator', {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section id="hero" className="section hero">
      <div className="hero__content">
        <p className="hero__subtitle">Desarrollador Full Stack</p>
        <h1 className="hero__title">
          <span className="hero__title-greeting">Hola, soy</span>
          <span className="hero__title-name">Tu Nombre</span>
        </h1>
        <p className="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn--secondary">Contactame</a>
        </div>
      </div>
      <a href="#about" className="hero__scroll-indicator">↓</a>
    </section>
  )
}

function About() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current

    gsap.from(section.querySelector('.about-title'), {
      scrollTrigger: { trigger: section, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8,
    })

    gsap.from(section.querySelector('.about-desc'), {
      scrollTrigger: { trigger: section, start: 'top 75%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.2,
    })

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.6, delay: i * 0.15,
      })
    })
  }, [])

  const features = [
    { icon: '</>', title: 'Desarrollo Web', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: '🎨', title: 'UI/UX Design', text: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
    { icon: '⚡', title: 'Rendimiento', text: 'Duis aute irure dolor in reprehenderit in voluptate.' },
  ]

  return (
    <section id="about" ref={sectionRef} className="section about">
      <div className="section__container">
        <h2 className="section__title about-title">Sobre <span className="section__title-highlight">Mí</span></h2>
        <p className="section__description about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="about__cards">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="about__card"
            >
              <div className="about__card-icon">{feature.icon}</div>
              <h3 className="about__card-title">{feature.title}</h3>
              <p className="about__card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current

    gsap.from(section.querySelector('.projects-title'), {
      scrollTrigger: { trigger: section, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8,
    })

    gsap.from(section.querySelector('.projects-desc'), {
      scrollTrigger: { trigger: section, start: 'top 75%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.2,
    })

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 90%' },
        y: 60, opacity: 0, duration: 0.7, delay: (i % 3) * 0.15,
      })
    })
  }, [])

  const projects = [
    { title: 'E-Commerce Platform', desc: 'Plataforma de comercio electrónico con carrito de compras.', tags: ['React', 'Node.js', 'MongoDB'], color: 'linear-gradient(135deg, #10b981, #06b6d4)' },
    { title: 'Task Management App', desc: 'Aplicación de gestión de tareas con drag and drop.', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], color: 'linear-gradient(135deg, #06b6d4, #3b82f6)' },
    { title: 'AI Dashboard', desc: 'Dashboard con inteligencia artificial para análisis de datos.', tags: ['Python', 'TensorFlow', 'React'], color: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' },
    { title: 'Social Media App', desc: 'Red social con chat en tiempo real y feed personalizado.', tags: ['React', 'Firebase', 'Tailwind'], color: 'linear-gradient(135deg, #10b981, #22c55e)' },
    { title: 'Fitness Tracker', desc: 'Aplicación para seguimiento de ejercicios y nutrición.', tags: ['React Native', 'Node.js', 'Redis'], color: 'linear-gradient(135deg, #22c55e, #10b981)' },
    { title: 'Crypto Wallet', desc: 'Billetera de criptomonedas con gráficos en tiempo real.', tags: ['Vue.js', 'Web3.js', 'Solidity'], color: 'linear-gradient(135deg, #06b6d4, #10b981)' },
    { title: 'Booking System', desc: 'Sistema de reservas con calendario interactivo y pagos.', tags: ['Next.js', 'Prisma', 'Stripe'], color: 'linear-gradient(135deg, #10b981, #22c55e)' },
    { title: 'Music Streaming', desc: 'Plataforma de streaming de música con playlists compartidas.', tags: ['React', 'Node.js', 'AWS S3'], color: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
    { title: 'Real Estate Platform', desc: 'Portal inmobiliario con búsqueda avanzada y tours virtuales.', tags: ['Next.js', 'PostgreSQL', 'Mapbox'], color: 'linear-gradient(135deg, #22c55e, #10b981)' },
  ]

  return (
    <section id="projects" ref={sectionRef} className="section projects">
      <div className="section__container">
        <h2 className="section__title projects-title">Mis <span className="section__title-highlight">Proyectos</span></h2>
        <p className="section__description projects-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="project-card"
            >
              <div className="project-card__image" style={{ background: project.color }}></div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.desc}</p>
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current

    gsap.from(section.querySelector('.skills-title'), {
      scrollTrigger: { trigger: section, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8,
    })

    gsap.from(section.querySelector('.skills-desc'), {
      scrollTrigger: { trigger: section, start: 'top 75%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.2,
    })

    gsap.from(section.querySelectorAll('.skills__card'), {
      scrollTrigger: { trigger: section.querySelector('.skills__grid'), start: 'top 85%' },
      y: 50, opacity: 0, duration: 0.8, stagger: 0.2,
    })

    barsRef.current.forEach((bar, i) => {
      gsap.from(bar, {
        scrollTrigger: { trigger: bar, start: 'top 90%' },
        width: 0, opacity: 0, duration: 1, delay: i * 0.1, ease: 'power2.out',
      })
    })
  }, [])

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'Docker', level: 60 },
  ]

  return (
    <section id="skills" ref={sectionRef} className="section skills">
      <div className="section__container">
        <h2 className="section__title skills-title">Mis <span className="section__title-highlight">Skills</span></h2>
        <p className="section__description skills-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="skills__grid">
          <div className="skills__card">
            <h3 className="skills__card-title">Technical Skills</h3>
            <div className="skills__list">
              {skills.map((skill, i) => (
                <div key={skill.name} className="skill">
                  <div className="skill__header">
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__percent">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div
                      ref={el => barsRef.current[i] = el}
                      className="skill__bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills__card">
            <h3 className="skills__card-title">Herramientas & Tech</h3>
            <div className="tools__grid">
              {['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Linux', 'AWS', 'Vercel', 'Netlify', 'MongoDB', 'Redis', 'GraphQL'].map(tool => (
                <div key={tool} className="tool">{tool}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    gsap.from(section.querySelector('.contact-title'), {
      scrollTrigger: { trigger: section, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8,
    })

    gsap.from(section.querySelector('.contact-desc'), {
      scrollTrigger: { trigger: section, start: 'top 75%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.2,
    })

    gsap.from(section.querySelector('.contact__card'), {
      scrollTrigger: { trigger: section, start: 'top 85%' },
      y: 50, opacity: 0, duration: 0.8,
    })
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="section contact">
      <div className="section__container section__container--small">
        <h2 className="section__title contact-title">Contact <span className="section__title-highlight">Me</span></h2>
        <p className="section__description contact-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="contact__card">
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">hello@example.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <p className="contact__info-label">Ubicación</p>
                <p className="contact__info-value">Ciudad, País</p>
              </div>
            </div>
          </div>
          <form className="contact__form">
            <div className="contact__form-row">
              <input type="text" placeholder="Tu nombre" className="contact__input" />
              <input type="email" placeholder="Tu email" className="contact__input" />
            </div>
            <input type="text" placeholder="Asunto" className="contact__input" />
            <textarea rows="5" placeholder="Tu mensaje..." className="contact__textarea"></textarea>
            <button type="submit" className="btn btn--primary btn--full">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="footer">
          <div className="footer__container">
            <a href="#hero" className="footer__logo">MiPortfolio</a>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="GitHub">GH</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">IN</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">TW</a>
            </div>
            <p className="footer__copyright">© 2026 Portfolio</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
