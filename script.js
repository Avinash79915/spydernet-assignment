


const menuToggle = document.getElementById("menu-toggle");
const menuCheckbox = menuToggle.querySelector("input");
const mobileMenu = document.getElementById("mobile-menu");

menuCheckbox.addEventListener("change", () => {
  if (menuCheckbox.checked) {
    mobileMenu.style.transform = "translateX(0)";
  } else {
    mobileMenu.style.transform = "translateX(100%)";
  }
});

document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("menu-toggle");

  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.style.transform = "translateX(100%)";  
    menuCheckbox.checked = false;
  }
});

  function animateCounter(elementId, startValue, endValue, duration) {
    let startTime = null;
    
    function updateCounter(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const currentValue = Math.min(startValue + (endValue - startValue) * (progress / duration), endValue);
      document.getElementById(elementId).textContent = Math.ceil(currentValue);
      
      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter('years-experience', 0, 20, 2000);  // Example: 20+ years experience
        animateCounter('installations', 0, 1100, 2000); // Example: 1100+ installations
        animateCounter('years-experience-2', 0, 20, 2000); // Repeat animation for second set
        animateCounter('installations-2', 0, 1100, 2000); // Repeat animation for second set
        
        // Stop observing after the animation has started
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });

  // Start observing the section
  observer.observe(document.getElementById('achievements-section'));

  // Initialize AOS
AOS.init({
    duration: 1000, // Animation duration (ms)
    easing: 'ease-in-out', // Easing function
    once: true // Animation only triggers once
  });
  
  const lenis = new Lenis({
    duration: 0.5, // increase this value for even smoother scroll (1.5 seconds)
    easing: (t) => Math.min(1, 1.001 - Math.pow(10, -30 * t)), // very smooth easing
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)