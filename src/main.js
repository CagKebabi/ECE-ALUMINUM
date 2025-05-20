import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper } from "swiper";
import "swiper/swiper-bundle.css"
import { Application } from '@splinetool/runtime';

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

  ScrollTrigger.create({
    trigger:"#horizontalScrollSection",
    start:"top top",
    end:"bottom+=50vh top",
    markers:true,
    pin:true,
    scrub:1,
    animation:tl.to("#horizontalScrollSection ul .aElement", {
      width: "22vw",
      duration: 0.5,
      stagger:1,
      ease: "power3.out"
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
});

