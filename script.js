

  const menuToggle = document.querySelector('#menu-toggle input');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
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

  // Create an Intersection Observer to trigger the animation when the section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start the animation when the section is in view
        animateCounter('years-experience', 0, 20, 2000);  // Example: 20+ years experience
        animateCounter('installations', 0, 1100, 2000); // Example: 1100+ installations
        animateCounter('years-experience-2', 0, 20, 2000); // Repeat animation for second set
        animateCounter('installations-2', 0, 1100, 2000); // Repeat animation for second set
        
        // Stop observing after the animation has started
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5  // Trigger when 50% of the section is visible in the viewport
  });

  // Start observing the section
  observer.observe(document.getElementById('achievements-section'));

  // Initialize AOS
AOS.init({
    duration: 1000, // Animation duration (ms)
    easing: 'ease-in-out', // Easing function
    once: true // Animation only triggers once
  });
  