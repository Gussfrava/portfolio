import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initContact() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const curtain = document.querySelector('.contact__curtain');
  const heading = document.querySelector('.contact__heading');
  const label = document.querySelector('.contact__label');
  const links = gsap.utils.toArray('.contact__link');

  if (!curtain || !heading) return;

  if (prefersReducedMotion) {
    gsap.set(curtain, { display: 'none' });
    gsap.set([heading, label, ...links], { opacity: 1, y: 0 });
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 60%',
      end: 'top 10%',
      scrub: 0.5,
    },
  });

  tl.fromTo(curtain,
    { scaleY: 1 },
    { scaleY: 0, ease: 'none' }
  );

  gsap.fromTo(heading,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  gsap.fromTo(label,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  links.forEach((link, i) => {
    gsap.fromTo(link,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 30%',
          toggleActions: 'play none none reverse',
        },
        delay: i * 0.1,
      }
    );
  });
}
