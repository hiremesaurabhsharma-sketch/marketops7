document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initMobileDrawer();
  initScrollReveal();
  initInfiniteMarquees();
  initTestimonialSliders();
  initFaqAccordions();
  initStatCounters();
  initVideoMuteControls();
});

/* 1. STICKY NAVBAR BACKGROUND TRANSITIONS */
function initStickyNavbar() {
  const header = document.querySelector('.header-nav');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run initially
}

/* 2. MOBILE DRAWER TOGGLEdrawer MENU */
function initMobileDrawer() {
  const burgerBtn = document.querySelector('.burger-menu');
  const drawer = document.getElementById('mobileDrawer');
  if (!burgerBtn || !drawer) return;

  // Toggle drawer
  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    burgerBtn.innerHTML = isOpen 
      ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
      : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !burgerBtn.contains(e.target)) {
      drawer.classList.remove('open');
      burgerBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
    }
  });

  // Close when clicking links
  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      burgerBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
    });
  });
}

/* 3. INTERSECTION OBSERVER SCROLL REVEALS */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (elements.length === 0) return;

  if (!window.IntersectionObserver) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, we don't need to observe it again
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* 4. INFINITE MARQUEE CLONING LOGIC */
function initInfiniteMarquees() {
  const marquees = document.querySelectorAll('.marquee-container');
  marquees.forEach(container => {
    const content = container.querySelector('.marquee-content');
    if (!content) return;
    
    // Duplicate children to ensure seamless endless loops
    const children = Array.from(content.children);
    
    // We clone elements twice to be extremely safe against wide viewports
    for (let i = 0; i < 2; i++) {
      children.forEach(child => {
        const clone = child.cloneNode(true);
        content.appendChild(clone);
      });
    }
  });
}

/* 5. CUSTOM TESTIMONIAL CAROUSEL (WITH ARROWS & DOTS & TRANSITIONS) */
function initTestimonialSliders() {
  const sliders = document.querySelectorAll('.testimonial-slider-container');
  sliders.forEach(slider => {
    const track = slider.querySelector('.slider-track');
    if (!track) return;
    const slides = Array.from(track.children);
    const prevBtn = slider.querySelector('.slider-btn-prev');
    const nextBtn = slider.querySelector('.slider-btn-next');
    const dotContainer = slider.querySelector('.slider-dots-container');
    
    if (slides.length === 0) return;
    
    let currentIndex = 0;
    const dots = [];
    
    // Create dots dynamically
    if (dotContainer) {
      dotContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
        dotContainer.appendChild(dot);
        dots.push(dot);
        
        dot.addEventListener('click', () => {
          goToSlide(idx);
        });
      });
    }
    
    function updateSlider() {
      // Shift track layout
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update active dot classes
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    
    function goToSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      updateSlider();
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }
    
    // Support autoplay
    let autoplayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);
    
    slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    slider.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 6000);
    });
  });
}

/* 6. FAQ ACCORDION EXPANSION / COLLAPSE ACCORDIONS */
function initFaqAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    if (!header || !content) return;
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Collapse all other siblings for premium neat layout
      const parent = item.parentElement;
      parent.querySelectorAll('.accordion-item').forEach(sibling => {
        if (sibling !== item) {
          sibling.classList.remove('active');
          sibling.querySelector('.accordion-content').style.maxHeight = null;
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* 7. STATISTICS INCREMENT COUNTER ON SCROLL */
function initStatCounters() {
  const counters = document.querySelectorAll('.counter-number');
  if (counters.length === 0) return;
  
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const duration = 2000; // 2 seconds animate duration
    const isFloat = el.getAttribute('data-float') === 'true';
    const isFormattedVal = el.getAttribute('data-format') === 'true';
    const rawPrefix = el.getAttribute('data-prefix') || '';
    const rawSuffix = el.getAttribute('data-suffix') || '';
    
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentVal = easedProgress * target;
      
      if (isFormattedVal) {
        // Formats as money, e.g. 100,351,886
        el.textContent = rawPrefix + Math.floor(currentVal).toLocaleString('en-US') + rawSuffix;
      } else if (isFloat) {
        el.textContent = rawPrefix + currentVal.toFixed(1) + rawSuffix;
      } else {
        el.textContent = rawPrefix + Math.floor(currentVal) + rawSuffix;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Complete value
        if (isFormattedVal) {
          el.textContent = rawPrefix + target.toLocaleString('en-US') + rawSuffix;
        } else if (isFloat) {
          el.textContent = rawPrefix + target.toFixed(1) + rawSuffix;
        } else {
          el.textContent = rawPrefix + target + rawSuffix;
        }
      }
    };
    
    window.requestAnimationFrame(step);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

/* 8. VIDEO PLAYBACK CONTROL & MUTE OVERLAYS */
function initVideoMuteControls() {
  const muteButtons = document.querySelectorAll('.mute-btn-overlay');
  muteButtons.forEach(btn => {
    const video = btn.previousElementSibling;
    if (!video || video.tagName !== 'VIDEO') return;
    
    // Add accessibility text
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Toggle audio playback');
    
    const updateIcon = () => {
      if (video.muted) {
        btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg> Muted';
      } else {
        btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg> Unmuted';
      }
    };
    
    btn.addEventListener('click', () => {
      video.muted = !video.muted;
      updateIcon();
    });
    
    // Initialize properly
    updateIcon();
  });
}
