import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// import { greetUser } from '$utils/greet';
import { set_size } from '$utils/home_page';
import { title_other_animation } from '$utils/other_pages';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Split text into spans
  new SplitType('[text-split]', {
    types: 'words,chars',
    tagName: 'span',
  });

  title_other_animation();
  set_size();

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { opacity: 1 });

  // const name = 'John Doe';
  // greetUser(name);
});
