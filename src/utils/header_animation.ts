import { gsap } from 'gsap';

import { createScrollTrigger } from '$utils/scroll_trigger';

// Only for home page because of animation
// Timeout set because of animation setup in webflow
const window_width = window.innerWidth;

export const title_header_animation = () => {
  if (window_width < 992) {
    return false;
  }

  const title_fade_in = document.querySelectorAll('[title-fade-in]');

  setTimeout(() => {
    title_fade_in.forEach((el: Element) => {
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
  }, 1500);
};

export const set_size = () => {
  const on_resize = (e: UIEvent) => {
    //note i need to pass the event as an argument to the function
    const window_param = e.target as Window;
    // console.log(window_param.innerHeight);
    const window_height = window_param.innerHeight;
    const el: HTMLElement = document.querySelector('[window-height]') as HTMLElement;
    el.style.height = window_height + 'px';
  };

  const window_height = window.innerHeight;
  const el: HTMLElement = document.querySelector('[window-height]') as HTMLElement;
  //   console.log(el);
  el.style.height = window_height + 'px';

  window.addEventListener('resize', on_resize);
};
