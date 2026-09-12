import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initProjects() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const cards = gsap.utils.toArray('.project-card');
  if (!cards.length) return;

  const mm = ScrollTrigger.matchMedia({
    '(min-width: 769px)': () => {
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          {
            y: 80,
            scale: 0.92,
            opacity: 0.3,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 20%',
              scrub: 0.5,
            },
          }
        );

        if (i > 0) {
          gsap.to(card, {
            scale: 0.96,
            scrollTrigger: {
              trigger: card,
              start: 'top 10%',
              end: 'top -60%',
              scrub: 0.5,
            },
          });
        }
      });
    },
    '(max-width: 768px)': () => {
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    },
  });

  return mm;
}
