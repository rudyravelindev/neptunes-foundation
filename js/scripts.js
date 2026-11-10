// script.js
(function () {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        mainNav.classList.toggle('open');
        // Toggle icon between bars and times
        const icon = this.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });

      // Close menu when a link is clicked (on mobile)
      const navLinks = mainNav.querySelectorAll('a');
      navLinks.forEach((link) => {
        link.addEventListener('click', function () {
          mainNav.classList.remove('open');
          const icon = hamburger.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function (e) {
        if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
          mainNav.classList.remove('open');
          const icon = hamburger.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        }
      });
    }

    console.log("Neptune's Foundation — Homepage loaded successfully.");
  }
})();
