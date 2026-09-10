import { useState, useEffect, useRef } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const cursorTrailRef = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    const trailCount = 8

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 })
    }

    const handleMouseEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.3 })
    const handleMouseLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.3 })

    const handleLinkEnter = (e) => {
      gsap.to(cursor, { scale: 2, backgroundColor: 'rgba(16, 185, 129, 0.3)', duration: 0.3 })
      gsap.to(cursorDot, { scale: 0, duration: 0.2 })
    }

    const handleLinkLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', duration: 0.3 })
      gsap.to(cursorDot, { scale: 1, duration: 0.2 })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    const links = document.querySelectorAll('a, button, .project-card, .about__card')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    const animateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15
      gsap.set(cursor, { x: cursorPos.current.x, y: cursorPos.current.y })
      requestAnimationFrame(animateCursor)
    }
    animateCursor()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkEnter)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
    </>
  )
}

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
  const nameRef = useRef(null)

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    const targetText = 'Jhonatan Gustavo'
    let iteration = 0
    let interval = null

    const scrambleEffect = () => {
      interval = setInterval(() => {
        nameRef.current.innerText = targetText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')

        if (iteration >= targetText.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero__subtitle', { y: 30, opacity: 0, duration: 0.8 })
      .from('.hero__title-greeting', { y: 50, opacity: 0, duration: 1 }, '-=0.4')
      .from('.hero__title-name', { y: 50, opacity: 0, duration: 1 }, '-=0.6')
      .from('.hero__description', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.hero__cta', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero__scroll-indicator', { opacity: 0, duration: 0.6 }, '-=0.2')
      .call(scrambleEffect, null, '-=1.5')

    gsap.to('.hero__scroll-indicator', {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [])

  return (
    <section id="hero" className="section hero">
      <div className="hero__content">
        <p className="hero__subtitle">Ingeniero en Sistemas Computacionales</p>
        <h1 className="hero__title">
          <span className="hero__title-greeting">Hola, soy</span>
          <span className="hero__title-name" ref={nameRef}>Jhonatan Gustavo</span>
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
      size: 'large',
    },
    {
      icon: '📈',
      title: 'SEO & WPO',
      text: 'SEO on-page y técnico, keyword research con Semrush, optimización de Core Web Vitals. Velocidad de carga de 60% a 95% en PageSpeed.',
      size: 'small',
    },
    {
      icon: '🎨',
      title: 'Diseño Web',
      text: 'Diseño de interfaces y prototipos en Figma. Maquetación a partir de diseños UI/UX para sitios web y landing pages.',
      size: 'small',
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
        <div className="about__bento">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`about__card about__card--${feature.size}`}
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
      title: 'Seguauto',
      desc: 'Rediseño UI/UX y maquetación del portal principal. Landing pages optimizadas para SEO y estructura de blog con estrategia de posicionamiento orgánico.',
      tags: ['Figma', 'HTML5', 'CSS3', 'WordPress', 'SEO'],
      color: 'linear-gradient(135deg, #10b981, #06b6d4)',
      url: 'https://seguauto.com.mx/',
    },
    {
      title: 'Fundación Azteca',
      desc: 'Maquetación y prototipado en Figma. Sitio desde cero con HTML5 semántico, CSS3, JavaScript y jQuery con animaciones y transiciones fluidas.',
      tags: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      color: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      url: 'https://www.fundacionazteca.org/',
    },
    {
      title: 'Aprendamos Juntos',
      desc: 'Plataforma educativa de Fundación Azteca. Diseño y desarrollo de interfaz interactiva para contenido de aprendizaje.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      color: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      url: 'https://www.fundacionazteca.org/aprendamos-juntos/',
    },
    {
      title: 'Jamat',
      desc: 'Desarrollo web completo con diseño responsivo, optimizado para conversión y experiencia de usuario.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      color: 'linear-gradient(135deg, #10b981, #22c55e)',
      url: 'https://jamat.com.mx/',
    },
    {
      title: 'Jurídico Millán',
      desc: 'Sitio web corporativo para despacho jurídico. Diseño profesional y elegante con estructura optimizada para SEO.',
      tags: ['HTML5', 'CSS3', 'WordPress', 'SEO'],
      color: 'linear-gradient(135deg, #22c55e, #10b981)',
      url: 'https://juridicomillan.com/',
    },
    {
      title: 'Marketing Digital México',
      desc: 'Portal de marketing digital con diseño moderno, secciones de servicios y blog para estrategia de contenido.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
      color: 'linear-gradient(135deg, #06b6d4, #10b981)',
      url: 'https://marketingdigitalmexico.com/',
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
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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
                <span className="project-card__link">Ver sitio →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const sectionRef = useRef(null)
  const stackRef = useRef([])

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

    stackRef.current.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: { trigger: section, start: 'top 70%' },
        y: 100 + (i % 3) * 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
      })
    })

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const moveX = (clientX - centerX) / centerX
      const moveY = (clientY - centerY) / centerY

      stackRef.current.forEach((item, i) => {
        const depth = (i % 3) + 1
        gsap.to(item, {
          x: moveX * 10 * depth,
          y: moveY * 10 * depth,
          duration: 0.5,
          ease: 'power2.out',
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const techStack = [
    { name: 'HTML5', color: '#e34f26' },
    { name: 'CSS3', color: '#1572b6' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'React', color: '#61dafb' },
    { name: 'WordPress', color: '#21759b' },
    { name: 'Elementor', color: '#92003b' },
    { name: 'PHP', color: '#777bb4' },
    { name: 'jQuery', color: '#0769ad' },
    { name: 'Bootstrap', color: '#7952b3' },
    { name: 'Git', color: '#f05032' },
    { name: 'Figma', color: '#f24e1e' },
    { name: 'Semrush', color: '#ff642d' },
    { name: 'GA4', color: '#f9ab00' },
    { name: 'GTM', color: '#4285f4' },
    { name: 'Google Ads', color: '#4285f4' },
    { name: 'Search Console', color: '#4285f4' },
    { name: 'SQL', color: '#4479a1' },
    { name: 'Python', color: '#3776ab' },
    { name: 'Java', color: '#ed8b00' },
    { name: 'C++', color: '#00599c' },
  ]

  return (
    <section id="skills" ref={sectionRef} className="section skills">
      <div className="section__container">
        <h2 className="section__title skills-title">Mi <span className="section__title-highlight">Stack</span></h2>
        <p className="section__description skills-desc">
          Tecnologías y herramientas que domino
        </p>
        <div className="stack__grid">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              ref={el => stackRef.current[i] = el}
              className="stack__item"
              style={{ '--tech-color': tech.color }}
            >
              <div className="stack__item-glow"></div>
              <span className="stack__item-name">{tech.name}</span>
            </div>
          ))}
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
          <div className="contact__buttons">
            <a
              href="mailto:jhonatangustavo8a@gmail.com"
              className="contact__btn contact__btn--email"
            >
              <span className="contact__btn-icon">✉️</span>
              <span className="contact__btn-text">Enviar Email</span>
            </a>
            <a
              href="https://wa.me/52XXXXXXXXXX?text=Hola%20Jhonatan%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--whatsapp"
            >
              <span className="contact__btn-icon">💬</span>
              <span className="contact__btn-text">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <ThemeProvider>
      <div className="app">
        <div className="gradient-mesh">
          <div className="gradient-mesh__orb gradient-mesh__orb--1"></div>
          <div className="gradient-mesh__orb gradient-mesh__orb--2"></div>
          <div className="gradient-mesh__orb gradient-mesh__orb--3"></div>
        </div>
        <CustomCursor />
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
