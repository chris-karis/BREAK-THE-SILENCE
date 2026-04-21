// Tailwind script initialization
function initializeTailwind() {
  tailwind.config = {
    content: [],
    theme: {
      extend: {
        colors: {
          primary: '#10b981'
        }
      }
    }
  }
}

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu')
  const icon = document.querySelector('#mobile-menu-btn i')

  menu.classList.toggle('hidden')

  if (menu.classList.contains('hidden')) {
    icon.classList.replace('fa-times', 'fa-bars')
  } else {
    icon.classList.replace('fa-bars', 'fa-times')
  }
})

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})

// Form submission alert (demo)
const form = document.querySelector('form')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('🎉 Thank you! Your message has been received. We will contact you via WhatsApp shortly.')
    form.reset()
  })
}

// Load resources fetcher and config if available
document.addEventListener('DOMContentLoaded', function() {
  // Check if the config script exists and load it
  if (typeof BreakTheSilenceConfig === 'undefined') {
    // Dynamically load the config script if not already loaded
    const configScript = document.createElement('script');
    configScript.src = 'js/config.js';
    document.head.appendChild(configScript);
    
    // Then load the resources fetcher script
    const resourcesScript = document.createElement('script');
    resourcesScript.src = 'js/resources-fetcher.js';
    document.head.appendChild(resourcesScript);
  }
});

// Initialize everything
window.onload = initializeTailwind