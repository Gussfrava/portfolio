import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initSkills() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const marqueeRows = gsap.utils.toArray('.marquee__row');
  if (!marqueeRows.length) return;

  if (prefersReducedMotion) return;

  marqueeRows.forEach((row) => {
    const track = row.querySelector('.marquee__track');
    if (!track) return;

    ScrollTrigger.create({
      trigger: row,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const clampedVelocity = Math.max(-2000, Math.min(2000, velocity));
        const speedDelta = clampedVelocity * 0.003;
        const targetTimeScale = 1 + Math.abs(speedDelta);
        const clampedTimeScale = Math.max(0.5, Math.min(3, targetTimeScale));

        gsap.to(track, {
          timeScale: clampedTimeScale,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      },
    });
  });
}

export function initExperience() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const timelineLine = document.querySelector('.timeline__line');
  const timelineItems = gsap.utils.toArray('.timeline__item');

  if (!timelineLine || !timelineItems.length) return;

  if (prefersReducedMotion) {
    gsap.set(timelineLine, { scaleY: 1 });
    gsap.set(timelineItems, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(timelineLine,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: 0.5,
      },
    }
  );

  timelineItems.forEach((item, i) => {
    const card = item.querySelector('.timeline__card');
    const node = item.querySelector('.timeline__node-dot');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(node,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
    )
    .fromTo(card,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    );
  });
}
