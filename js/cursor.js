import { gsap } from 'gsap';

export function initCursor() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  if (prefersReducedMotion || isCoarse) return;

  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');

  if (!cursor || !trail) return;

  const quickCursorX = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power2.out' });
  const quickCursorY = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power2.out' });
  const quickTrailX = gsap.quickTo(trail, 'x', { duration: 0.35, ease: 'power2.out' });
  const quickTrailY = gsap.quickTo(trail, 'y', { duration: 0.35, ease: 'power2.out' });

  document.addEventListener('mousemove', (e) => {
    quickCursorX(e.clientX);
    quickCursorY(e.clientY);
    quickTrailX(e.clientX);
    quickTrailY(e.clientY);
  });

  const magneticElements = document.querySelectorAll('[data-magnetic]');

  magneticElements.forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic) || 0.3;

    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover');
      gsap.to(trail, { scale: 1.8, duration: 0.3, ease: 'power2.out' });
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover');
      gsap.to(trail, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
    });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: 'power2.out' });
    });
  });
}
