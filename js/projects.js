import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initProjects() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cards = gsap.utils.toArray('.project-card');
  if (!cards.length) return;

  const mm = ScrollTrigger.matchMedia({
    '(min-width: 769px)': () => {
      if (prefersReducedMotion) return;

      cards.forEach((card, i) => {
        if (i === 0) return;

        gsap.fromTo(card,
          {
            y: 100,
            scale: 0.9,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'top center',
              scrub: true,
            },
          }
        );

        gsap.to(card.previousElementSibling, {
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        });
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
