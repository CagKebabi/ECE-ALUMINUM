import './style.css'
import { gsap } from "gsap";
import { Swiper } from "swiper";
import "swiper/swiper-bundle.css"
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/KaBq5E60dB22XNwJ/scene.splinecode');


document.addEventListener('DOMContentLoaded', () => {
  //ANIMATIONS
  //HEADER LINKS
  let headerLinks = gsap.utils.toArray('.header-link');
 
  headerLinks.forEach((link) => {
    const links = link.querySelectorAll('.link');

    link.addEventListener('mouseenter', () => {
      gsap.to(links, {
        duration: 0.5,
        y: "-100%",
        ease: 'power3.out'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(links, {
        duration: 0.5,
        y: "0%",
        ease: 'power3.out'
      });
    });
  });
  
  //SLIDERS
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

