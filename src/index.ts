import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// import { greetUser } from '$utils/greet';
import { set_size, title_header_animation } from '$utils/header_animation';
import { title_other_animation } from '$utils/other_animation';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Split text into spans
  new SplitType('[text-split]', {
    types: 'words,chars',
    tagName: 'span',
  });

  title_other_animation();
  title_header_animation();
  set_size();

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { opacity: 1 });

  // const name = 'John Doe';
  // greetUser(name);
});
