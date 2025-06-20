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

    // Project Slider
    // // Инициализация превью слайдера
    // const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
    //   // задаем параметры
    //   direction: 'vertical', // вертикальная прокрутка
    //   slidesPerView: 3, // показывать по 3 превью
    //   spaceBetween: 24, // расстояние между слайдами
    //   navigation: { // задаем кнопки навигации
    //     nextEl: '.slider__next', // кнопка Next
    //     prevEl: '.slider__prev' // кнопка Prev
    //   },
    //   freeMode: true, // при перетаскивании превью ведет себя как при скролле
    //   breakpoints: { // условия для разных размеров окна браузера
    //     0: { // при 0px и выше
    //       direction: 'horizontal', // горизонтальная прокрутка
    //     },
    //     768: { // при 768px и выше
    //       direction: 'vertical', // вертикальная прокрутка
    //     }
    //   }
    // });
    // // Инициализация слайдера изображений
    // const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
    //   // задаем параметры
    //   direction: 'vertical', // вертикальная прокрутка
    //   slidesPerView: 1, // показывать по 1 изображению
    //   spaceBetween: 32, // расстояние между слайдами
    //   mousewheel: true, // можно прокручивать изображения колёсиком мыши
    //   navigation: { // задаем кнопки навигации
    //     nextEl: '.slider__next', // кнопка Next
    //     prevEl: '.slider__prev' // кнопка Prev
    //   },
    //   grabCursor: true, // менять иконку курсора
    //   thumbs: { // указываем на превью слайдер
    //     swiper: sliderThumbs // указываем имя превью слайдера
    //   },
    //   breakpoints: { // условия для разных размеров окна браузера
    //     0: { // при 0px и выше
    //       direction: 'horizontal', // горизонтальная прокрутка
    //     },
    //     768: { // при 768px и выше
    //       direction: 'vertical', // вертикальная прокрутка
    //     }
    //   }
    // });

});