import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Link timelines to scroll position
export const createScrollTrigger = (triggerElement: Element, timeline: GSAPTimeline) => {
  // Reset tl when scroll out of view past bottom of screen
  ScrollTrigger.create({
    trigger: triggerElement,
    start: 'top bottom',
    // Turn on if you want to start it over when you scroll back to TOP
    // onLeaveBack: () => {
    //   timeline.progress(0);
    //   timeline.pause();
    // },
  });
  // Play tl when scrolled into view (100% from bottom of screen)
  ScrollTrigger.create({
    trigger: triggerElement,
    start: 'bottom 100%',
    onEnter: () => timeline.play(),
  });
};
