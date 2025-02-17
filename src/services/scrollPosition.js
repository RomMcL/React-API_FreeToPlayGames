import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ScrollPosition = () => {

  const { pathname } = useLocation();
  const scroll = useSelector(state => state.scrollSlice.scroll);

  const scrollPositionY = () => {
    return pathname === "/main" ? scroll : 0;
  }

  useLayoutEffect(() => {
    window.scrollTo({
      top: scrollPositionY(),
      left: 0,
      behavior: 'instant'     // 'smooth' - плавная прокрутка, 'instant' - мгновенная
    });
  }, [pathname]);

  return null;
};

export default ScrollPosition;