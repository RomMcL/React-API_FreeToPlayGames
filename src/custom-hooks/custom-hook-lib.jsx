import { useRef, useEffect, useState } from 'react';


// useEffect только при изменении состояния (не срабатывает при создании компонента)

export function  useUpdateEffect (effect, deps) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, deps);
};


// прослушивание ширины экрана

const breakpoints = {
  screen_desktop: 960,
  screen_tablet: 736,
  screen_mobile: 320,
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width >= breakpoints.screen_mobile,
    isScreenTablet: width >= breakpoints.screen_tablet,
    isScreenDesktop: width >= breakpoints.screen_desktop,
  };
};