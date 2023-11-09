// Only for home page because of animation
// Timeout set because of animation setup in webflow

export const set_size = () => {
  const url = window.location;
  if (url.pathname !== '/') {
    return false;
  }

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
