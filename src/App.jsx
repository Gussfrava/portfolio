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
        <a href="#hero" className="navbar__logo">Jhonatan.dev</a>

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
        <p className="hero__subtitle">Ingeniero en Sistemas Computacionales</p>
        <h1 className="hero__title">
          <span className="hero__title-greeting">Hola, soy</span>
          <span className="hero__title-name">Jhonatan Gustavo</span>
        </h1>
        <p className="hero__description">
          +3 años de experiencia en desarrollo web, SEO on-page/técnico y
          optimización de rendimiento (WPO). Mejorando velocidad de carga,
          tráfico orgánico y conversiones.
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
    {
      icon: '</>',
      title: 'Desarrollo Web',
      text: 'HTML5, CSS3, JavaScript, jQuery, PHP, Bootstrap, WordPress, Elementor y React. Creación de sitios web responsivos y optimizados.',
    },
    {
      icon: '📈',
      title: 'SEO & WPO',
      text: 'SEO on-page y técnico, keyword research con Semrush, optimización de Core Web Vitals. Velocidad de carga de 60% a 95% en PageSpeed.',
    },
    {
      icon: '🎨',
      title: 'Diseño Web',
      text: 'Diseño de interfaces y prototipos en Figma. Maquetación a partir de diseños UI/UX para sitios web y landing pages.',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="section about">
      <div className="section__container">
        <h2 className="section__title about-title">Sobre <span className="section__title-highlight">Mí</span></h2>
        <p className="section__description about-desc">
          Ingeniero en Sistemas Computacionales con +3 años de experiencia en
          desarrollo web, SEO on-page/técnico y optimización de rendimiento (WPO).
          Historial comprobado de mejorar la velocidad de carga, el tráfico orgánico
          y las conversiones mediante diseño web, estrategia SEO y campañas en Google Ads.
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
    {
      title: 'Portales Web Corporativos',
      desc: 'Desarrollo y maquetación de portales web principales de la empresa con HTML, CSS, JavaScript y WordPress.',
      tags: ['HTML', 'CSS', 'WordPress', 'Elementor'],
      color: 'linear-gradient(135deg, #10b981, #06b6d4)',
    },
    {
      title: 'Optimización WPO',
      desc: 'Mejora de velocidad de carga de sitios web de 60% a 95% en PageSpeed/Lighthouse.',
      tags: ['WPO', 'PageSpeed', 'Lighthouse'],
      color: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    },
    {
      title: 'Estrategia SEO',
      desc: 'Implementación de SEO on-page y técnico con research de keywords en Semrush.',
      tags: ['SEO', 'Semrush', 'Search Console'],
      color: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    },
    {
      title: 'Analítica Web GA4',
      desc: 'Configuración de GA4, Google Tag Manager y Search Console para monitoreo de tráfico.',
      tags: ['GA4', 'GTM', 'Analytics'],
      color: 'linear-gradient(135deg, #10b981, #22c55e)',
    },
    {
      title: 'Diseño UI/UX Figma',
      desc: 'Diseño de interfaces y prototipos para sitios web de alianzas estratégicas.',
      tags: ['Figma', 'UI/UX', 'Prototipado'],
      color: 'linear-gradient(135deg, #22c55e, #10b981)',
    },
    {
      title: 'Campañas Google Ads',
      desc: 'Configuración de tracking de conversiones y monitoreo de campañas publicitarias.',
      tags: ['Google Ads', 'Conversiones', 'Tracking'],
      color: 'linear-gradient(135deg, #06b6d4, #10b981)',
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="section projects">
      <div className="section__container">
        <h2 className="section__title projects-title">Mis <span className="section__title-highlight">Proyectos</span></h2>
        <p className="section__description projects-desc">
          Experiencia real en desarrollo web, SEO y analítica digital
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
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'WordPress / Elementor', level: 90 },
    { name: 'SEO on-page / Técnico', level: 88 },
    { name: 'GA4 / GTM / Analytics', level: 80 },
    { name: 'Figma (UI/UX)', level: 75 },
    { name: 'React (en aprendizaje)', level: 50 },
    { name: 'Google Ads', level: 70 },
  ]

  return (
    <section id="skills" ref={sectionRef} className="section skills">
      <div className="section__container">
        <h2 className="section__title skills-title">Mis <span className="section__title-highlight">Skills</span></h2>
        <p className="section__description skills-desc">
          Tecnologías y herramientas que domino
        </p>
        <div className="skills__grid">
          <div className="skills__card">
            <h3 className="skills__card-title">Desarrollo & SEO</h3>
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
              {['Semrush', 'Google Ads', 'Figma', 'VS Code', 'Git', 'GitHub', 'PageSpeed', 'Lighthouse', 'Search Console', 'Bootstrap', 'PHP', 'SQL'].map(tool => (
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
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="contact__card">
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">jhonatangustavo8a@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">💼</span>
              <div>
                <p className="contact__info-label">LinkedIn</p>
                <p className="contact__info-value">linkedin.com/in/jhonatan-gustavo</p>
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
            <a href="#hero" className="footer__logo">Jhonatan.dev</a>
            <div className="footer__social">
              <a href="https://github.com/Gussfrava" className="footer__social-link" aria-label="GitHub">GH</a>
              <a href="https://linkedin.com/in/jhonatan-gustavo" className="footer__social-link" aria-label="LinkedIn">IN</a>
            </div>
            <p className="footer__copyright">© 2026 Jhonatan Gustavo</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
