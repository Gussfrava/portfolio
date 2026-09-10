import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="header">
        <nav className="navbar">
          <a href="#hero" className="navbar__logo">Portfolio</a>
          <ul className="navbar__links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
          <button className="navbar__theme-toggle" aria-label="Toggle theme">☀️</button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
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

        {/* About Section */}
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

        {/* Projects Section */}
        <section id="projects" className="section projects">
          <div className="section__container">
            <h2 className="section__title">Mis <span className="section__title-highlight">Proyectos</span></h2>
            <p className="section__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="projects__grid">
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">E-Commerce Platform</h3>
                  <p className="project-card__description">Plataforma de comercio electrónico con carrito de compras.</p>
                  <div className="project-card__tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">MongoDB</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Task Management App</h3>
                  <p className="project-card__description">Aplicación de gestión de tareas con drag and drop.</p>
                  <div className="project-card__tags">
                    <span className="tag">Next.js</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">PostgreSQL</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">AI Dashboard</h3>
                  <p className="project-card__description">Dashboard con inteligencia artificial para análisis de datos.</p>
                  <div className="project-card__tags">
                    <span className="tag">Python</span>
                    <span className="tag">TensorFlow</span>
                    <span className="tag">React</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Social Media App</h3>
                  <p className="project-card__description">Red social con chat en tiempo real y feed personalizado.</p>
                  <div className="project-card__tags">
                    <span className="tag">React</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Tailwind</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Fitness Tracker</h3>
                  <p className="project-card__description">Aplicación para seguimiento de ejercicios y nutrición.</p>
                  <div className="project-card__tags">
                    <span className="tag">React Native</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Redis</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Crypto Wallet</h3>
                  <p className="project-card__description">Billetera de criptomonedas con gráficos en tiempo real.</p>
                  <div className="project-card__tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Web3.js</span>
                    <span className="tag">Solidity</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Booking System</h3>
                  <p className="project-card__description">Sistema de reservas con calendario interactivo y pagos.</p>
                  <div className="project-card__tags">
                    <span className="tag">Next.js</span>
                    <span className="tag">Prisma</span>
                    <span className="tag">Stripe</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Music Streaming</h3>
                  <p className="project-card__description">Plataforma de streaming de música con playlists compartidas.</p>
                  <div className="project-card__tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">AWS S3</span>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-card__image"></div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Real Estate Platform</h3>
                  <p className="project-card__description">Portal inmobiliario con búsqueda avanzada y tours virtuales.</p>
                  <div className="project-card__tags">
                    <span className="tag">Next.js</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">Mapbox</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Skills Section */}
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
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">React</span>
                      <span className="skill__percent">90%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">JavaScript</span>
                      <span className="skill__percent">85%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">TypeScript</span>
                      <span className="skill__percent">80%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">Node.js</span>
                      <span className="skill__percent">75%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">Python</span>
                      <span className="skill__percent">70%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">Tailwind CSS</span>
                      <span className="skill__percent">95%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">PostgreSQL</span>
                      <span className="skill__percent">65%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill__header">
                      <span className="skill__name">Docker</span>
                      <span className="skill__percent">60%</span>
                    </div>
                    <div className="skill__bar">
                      <div className="skill__bar-fill" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills__card">
                <h3 className="skills__card-title">Herramientas & Tech</h3>
                <div className="tools__grid">
                  <div className="tool">Git</div>
                  <div className="tool">GitHub</div>
                  <div className="tool">VS Code</div>
                  <div className="tool">Figma</div>
                  <div className="tool">Postman</div>
                  <div className="tool">Linux</div>
                  <div className="tool">AWS</div>
                  <div className="tool">Vercel</div>
                  <div className="tool">Netlify</div>
                  <div className="tool">MongoDB</div>
                  <div className="tool">Redis</div>
                  <div className="tool">GraphQL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <a href="#hero" className="footer__logo">Portfolio</a>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="GitHub">GH</a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">IN</a>
            <a href="#" className="footer__social-link" aria-label="Twitter">TW</a>
          </div>
          <p className="footer__copyright">© 2026 Portfolio</p>
        </div>
      </footer>
    </div>
  )
}

export default App
