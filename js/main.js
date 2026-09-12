import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHero } from './hero.js';
import { initCursor } from './cursor.js';
import { initProjects } from './projects.js';
import { initSkills, initExperience } from './skills.js';
import { initContact } from './footer.js';
import { initNav } from './nav.js';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  document.body.style.overflow = 'auto';
} else {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  window.__lenis = lenis;
}

window.addEventListener('load', () => {
  initHero();
  initCursor();
  initProjects();
  initSkills();
  initExperience();
  initContact();
  initNav();
});
