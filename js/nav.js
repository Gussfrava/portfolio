import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BRAND_COLORS = {
  html5:      '#E34F26',
  css3:       '#1572B6',
  javascript: '#F7DF1E',
  react:      '#61DAFB',
  gsap:       '#0AE448',
  threejs:    '#FFFFFF',
  wordpress:  '#21759B',
  elementor:  '#92003B',
  figma:      '#F24E1E',
  php:        '#777BB4',
  bootstrap:  '#7952B3',
  sql:        '#CC292B',
  ga:         '#F9AB00',
  gtm:        '#4285F4',
  semrush:    '#FF642D',
  seo:        '#00DF81',
  wpo:        '#06B6D4',
  jquery:     '#0769AD',
  java:       '#ED8B00',
  python:     '#3776AB',
  cpp:        '#00599C',
};

export function initNav() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const nav = document.getElementById('nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  if (!toggle) return;

  // ── Theme Toggle ──
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark');
  html.setAttribute('data-theme', initialTheme);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ── Nav Scroll Expansion (Pill → Full Width) ──
  if (nav) {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '50px top',
      onLeave: () => nav.classList.add('nav--scrolled'),
      onEnterBack: () => nav.classList.remove('nav--scrolled'),
    });
  }

  // ── Active Section Indicator ──
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  // ── Brand Colors on Marquee (set --tech-color CSS variable) ──
  const marqueeItems = document.querySelectorAll('.marquee__item[data-brand]');
  marqueeItems.forEach((item) => {
    const brand = item.dataset.brand;
    const color = BRAND_COLORS[brand];
    if (!color) return;
    item.style.setProperty('--tech-color', color);
  });

  // ── Brand Colors on Timeline Tags (set --tech-color CSS variable) ──
  const timelineTags = document.querySelectorAll('.timeline__tags .tag[data-brand]');
  timelineTags.forEach((tag) => {
    const brand = tag.dataset.brand;
    const color = BRAND_COLORS[brand];
    if (!color) return;
    tag.style.setProperty('--tech-color', color);
  });

  // ── Pause marquee on hover ──
  const marqueeRows = document.querySelectorAll('.marquee__row');
  marqueeRows.forEach((row) => {
    const track = row.querySelector('.marquee__track');
    if (!track) return;

    row.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    row.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });

  // ── Ambient Blobs Animation ──
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const blobs = document.querySelectorAll('.ambient__blob');
  blobs.forEach((blob, i) => {
    const duration = 12 + i * 4;
    const xRange = 80 + i * 30;
    const yRange = 60 + i * 20;

    gsap.to(blob, {
      x: `random(-${xRange}, ${xRange})`,
      y: `random(-${yRange}, ${yRange})`,
      scale: `random(0.8, 1.3)`,
      duration: duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: i * 2,
    });
  });

  // ── Brand Colors on Project Tags ──
  const projectTags = document.querySelectorAll('.project-card__tags .tag[data-brand]');
  projectTags.forEach((tag) => {
    const brand = tag.dataset.brand;
    const color = BRAND_COLORS[brand];
    if (!color) return;

    tag.style.setProperty('--brand-color', color);

    tag.addEventListener('mouseenter', () => {
      gsap.to(tag, {
        borderColor: color,
        color: color,
        backgroundColor: `${color}15`,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    tag.addEventListener('mouseleave', () => {
      gsap.to(tag, {
        borderColor: 'var(--border)',
        color: 'var(--text-muted)',
        backgroundColor: 'transparent',
        duration: 0.25,
        ease: 'power2.out',
      });
    });
  });
}
