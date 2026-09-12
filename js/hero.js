import { gsap } from 'gsap';

export function initHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const typedEl = document.getElementById('hero-typed');
  const cursorEl = document.querySelector('.hero__cursor');

  if (!typedEl || !cursorEl) return;

  const fullText = 'Jhonatan Gustavo.';

  if (prefersReducedMotion) {
    typedEl.textContent = fullText;
    cursorEl.style.display = 'none';
    gsap.set('.hero__reveal, .hero__badge, .hero__cta', { opacity: 1, y: 0 });
    return;
  }

  gsap.set('.hero__reveal, .hero__cta .btn', { opacity: 0, y: 20 });
  gsap.set('.hero__badge', { opacity: 0, y: 15 });

  const tl = gsap.timeline({ delay: 0.5 });

  tl.to(cursorEl, {
    opacity: 1,
    duration: 0,
  });

  tl.to({}, {
    duration: fullText.length * 0.07,
    ease: 'none',
    onUpdate: function() {
      const progress = this.progress();
      const charIndex = Math.floor(progress * fullText.length);
      typedEl.textContent = fullText.substring(0, charIndex);
    },
  });

  tl.to(cursorEl, {
    opacity: 0,
    duration: 0.1,
    delay: 0.3,
  })
  .to(cursorEl, {
    opacity: 1,
    duration: 0.1,
    repeat: 5,
    yoyo: true,
    ease: 'none',
  })
  .to(cursorEl, {
    opacity: 0,
    duration: 0.2,
  });

  tl.fromTo('.hero__badge',
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.6'
  )
  .fromTo('.hero__reveal',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
    '-=0.3'
  )
  .fromTo('.hero__cta .btn',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
    '-=0.3'
  );

  return tl;
}
