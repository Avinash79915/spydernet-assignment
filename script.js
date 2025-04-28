


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
        animateCounter('years-experience', 0, 20, 2000); 
        animateCounter('installations', 0, 1100, 2000); 
        animateCounter('years-experience-2', 0, 20, 2000); 
        animateCounter('installations-2', 0, 1100, 2000); 
        
       
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });

  
  observer.observe(document.getElementById('achievements-section'));

  
AOS.init({
    duration: 1000, 
    easing: 'ease-in-out', 
    once: true 
  });
  
  