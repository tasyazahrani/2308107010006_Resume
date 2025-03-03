// This file is currently empty as there was no JavaScript in the original HTML file
// You can add any JavaScript functionality here as needed

// Example: Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function
    const smoothScroll = function(target, duration) {
      const targetElement = document.querySelector(target);
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      // Easing function
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    };
  
    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target !== '#') {
          smoothScroll(target, 1000);
        }
      });
    });
  });
  
  // Hover effect for skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    bar.addEventListener('mouseenter', function() {
      this.style.width = '100%';
      this.style.transition = 'width 0.5s ease-in-out';
    });
  
    bar.addEventListener('mouseleave', function() {
      const originalWidth = this.style.width;
      this.style.width = originalWidth;
    });
  });