import { gsap } from 'gsap';

import { createScrollTrigger } from '$utils/scroll_trigger';

// For all other headings in other pages
export const title_other_animation = () => {
  const letters_fade_in = document.querySelectorAll('[letters-fade-in]');

  letters_fade_in.forEach((el: Element) => {
    const tl = gsap.timeline({ paused: true });
    const el_char = el.querySelectorAll('.char');
    tl.from(el_char, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      stagger: { amount: 1 },
    });
    createScrollTrigger(el, tl);
  });
};
