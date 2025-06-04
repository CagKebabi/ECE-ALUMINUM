import './style.css'
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css"
import gsap from 'gsap';

// Initialize Swiper modules
Swiper.use([Navigation, Pagination, Autoplay]);

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

    // Blog Slider
    var blogSwiper = new Swiper(".blogSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
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
      // // Adding padding to the slider
      // centeredSlides: false,
      // // Use CSS mode for better performance on modern browsers
      // cssMode: true,
      // // Improve responsiveness
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
});