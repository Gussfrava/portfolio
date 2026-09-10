import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import './App.css'

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

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />

        <main>
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

          <section id="about" className="section about">
            <div className="section__container">
              <h2 className="section__title">Sobre <span className="section__title-highlight">Mí</span></h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="about__cards">
                <div className="about__card">
                  <div className="about__card-icon">&lt;/&gt;</div>
                  <h3 className="about__card-title">Desarrollo Web</h3>
                  <p className="about__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="about__card">
                  <div className="about__card-icon">🎨</div>
                  <h3 className="about__card-title">UI/UX Design</h3>
                  <p className="about__card-text">Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className="about__card">
                  <div className="about__card-icon">⚡</div>
                  <h3 className="about__card-title">Rendimiento</h3>
                  <p className="about__card-text">Duis aute irure dolor in reprehenderit in voluptate.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="section projects">
            <div className="section__container">
              <h2 className="section__title">Mis <span className="section__title-highlight">Proyectos</span></h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="projects__grid">
                {[
                  { title: 'E-Commerce Platform', desc: 'Plataforma de comercio electrónico con carrito de compras.', tags: ['React', 'Node.js', 'MongoDB'] },
                  { title: 'Task Management App', desc: 'Aplicación de gestión de tareas con drag and drop.', tags: ['Next.js', 'TypeScript', 'PostgreSQL'] },
                  { title: 'AI Dashboard', desc: 'Dashboard con inteligencia artificial para análisis de datos.', tags: ['Python', 'TensorFlow', 'React'] },
                  { title: 'Social Media App', desc: 'Red social con chat en tiempo real y feed personalizado.', tags: ['React', 'Firebase', 'Tailwind'] },
                  { title: 'Fitness Tracker', desc: 'Aplicación para seguimiento de ejercicios y nutrición.', tags: ['React Native', 'Node.js', 'Redis'] },
                  { title: 'Crypto Wallet', desc: 'Billetera de criptomonedas con gráficos en tiempo real.', tags: ['Vue.js', 'Web3.js', 'Solidity'] },
                  { title: 'Booking System', desc: 'Sistema de reservas con calendario interactivo y pagos.', tags: ['Next.js', 'Prisma', 'Stripe'] },
                  { title: 'Music Streaming', desc: 'Plataforma de streaming de música con playlists compartidas.', tags: ['React', 'Node.js', 'AWS S3'] },
                  { title: 'Real Estate Platform', desc: 'Portal inmobiliario con búsqueda avanzada y tours virtuales.', tags: ['Next.js', 'PostgreSQL', 'Mapbox'] },
                ].map((project, i) => (
                  <article key={i} className="project-card">
                    <div className="project-card__image"></div>
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

          <section id="skills" className="section skills">
            <div className="section__container">
              <h2 className="section__title">Mis <span className="section__title-highlight">Skills</span></h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="skills__grid">
                <div className="skills__card">
                  <h3 className="skills__card-title">Technical Skills</h3>
                  <div className="skills__list">
                    {[
                      { name: 'React', level: 90 },
                      { name: 'JavaScript', level: 85 },
                      { name: 'TypeScript', level: 80 },
                      { name: 'Node.js', level: 75 },
                      { name: 'Python', level: 70 },
                      { name: 'Tailwind CSS', level: 95 },
                      { name: 'PostgreSQL', level: 65 },
                      { name: 'Docker', level: 60 },
                    ].map(skill => (
                      <div key={skill.name} className="skill">
                        <div className="skill__header">
                          <span className="skill__name">{skill.name}</span>
                          <span className="skill__percent">{skill.level}%</span>
                        </div>
                        <div className="skill__bar">
                          <div className="skill__bar-fill" style={{ width: `${skill.level}%` }}></div>
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

          <section id="contact" className="section contact">
            <div className="section__container section__container--small">
              <h2 className="section__title">Contact <span className="section__title-highlight">Me</span></h2>
              <p className="section__description">
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
