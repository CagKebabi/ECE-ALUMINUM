import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css"
import { Application } from '@splinetool/runtime';

// Initialize Swiper modules
Swiper.use([Navigation, Pagination, Autoplay]);

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/iecmiF-8dSJZ7uDN/scene.splinecode')
.then(() => {
  const mesh = app.findObjectByName("Group 2")
  //mesh.position.x = 0.5
})
gsap.registerPlugin(ScrollTrigger);


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

  //SECTION 2 HORIZONTAL ANIMATION
  const tl = gsap.timeline();
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1100px)", () => {
    ScrollTrigger.create({
      trigger:"#horizontalScrollSection",
      start:"top top",
      end:"center top",
      //markers:true,
      pin:true,
      //pinSpacing:false,
      scrub:1,
      animation:tl.to("#horizontalScrollSection ul .aElement", {
        width: "22vw",
        duration: 0.5,
        stagger:1,
        ease: "power3.out"
      })
    })
  })

 

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



