// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  const preloader = document.getElementById('preloader');
  const preloaderDuration = 1500;
  
  setTimeout(() => {
    preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
    
    // Mostrar navbar con animación
    setTimeout(() => {
      const navbar = document.getElementById('navbar');
      navbar.classList.remove('-translate-y-full');
      navbar.classList.add('visible');
    }, 300);
  }, preloaderDuration);
  
  // Scroll Progress
  const scrollProgress = document.getElementById('scrollProgress');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
    
    // Navbar background
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
      nav.classList.add('bg-dark/80', 'backdrop-blur-xl');
      nav.classList.remove('bg-dark/50');
    } else {
      nav.classList.remove('bg-dark/80', 'backdrop-blur-xl');
      nav.classList.add('bg-dark/50');
    }
    
    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
      backToTop.classList.remove('opacity-0');
      backToTop.classList.add('opacity-100');
    } else {
      backToTop.classList.remove('opacity-100');
      backToTop.classList.add('opacity-0');
    }
    
    // Animación al hacer scroll
    animateOnScroll();
  });
  
  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('translate-x-full');
    document.body.style.overflow = mobileMenu.classList.contains('translate-x-full') ? 'auto' : 'hidden';
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = 'auto';
    });
  });
  
  // Back to Top
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Animaciones al hacer scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll, .skill-card, .project-card, [data-delay], .contact-form-container, .contact-info-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100;
      
      if (elementTop < window.innerHeight - elementVisible) {
        const delay = element.getAttribute('data-delay') || 0;
        
        setTimeout(() => {
          element.classList.add('visible');
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, delay * 1000);
      }
    });
  }
  
  // Inicializar animaciones
  setTimeout(animateOnScroll, preloaderDuration + 500);
  
  // Formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envío
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      // Simular tiempo de envío
      setTimeout(() => {
        alert('¡Mensaje enviado! Te responderé lo antes posible.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efecto hover en project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});