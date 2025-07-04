import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    const ease = "power4.inOut";

    revealTransition().then(() => {
      gsap.set(".transition .block", { visibility: "hidden" });
    });

    function revealTransition() {
      return new Promise((resolve) => {
        gsap.set(".transition .block", { scaleY: 1 });
        gsap.to(".transition .block", {
          scaleY: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "start",
            grid: "auto",
            axis: "x",
          },
          ease: ease,
          onComplete: resolve,
        });
      });
    }

    document.querySelectorAll(".navigation").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");

        if (href && !href.startsWith("#") && href !== window.location.pathname) {
          animateTransition().then(() => {
            window.location.href = href;
          });
        }
      });
    });
    
    // Tarayıcı geri tuşu için event listener
    window.addEventListener('pageshow', function(event) {
      // Sayfa önbellekten yüklendiğinde (geri tuşu kullanıldığında)
      if (event.persisted) {
        // Blokları görünür hale getir ve animasyonu başlat
        gsap.set(".transition .block", { visibility: "visible", scaleY: 1 });
        gsap.to(".transition .block", {
          scaleY: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "end",
            grid: [2, 5],
            axis: "x"
          },
          ease: ease
        });
      }
    });

    function animateTransition() {
      return new Promise((resolve) => {
        gsap.set(".transition .block", { visibility: "visible", scaleY: 0 });
        gsap.to(".transition .block", {
          scaleY: 1,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "start",
            grid: [2, 5],
            axis: "x"
          },
          ease: ease,
          onComplete: resolve,
        });
      });
    }
});