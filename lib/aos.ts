"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 100,
  });
};

export const refreshAOS = () => {
  AOS.refresh();
};