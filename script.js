// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainMenu = document.getElementById('mainMenu');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    if (mainMenu) {
      const isOpen = mainMenu.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  });
}

if (mainMenu) {
  mainMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainMenu.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
      let zoom = 100;
      let targetZoom = 100;
      let animationFrameId = null;
      
      const animateZoom = () => {
        zoom += (targetZoom - zoom) * 0.08;
        card.style.backgroundSize = zoom + '%';
        
        if (Math.abs(targetZoom - zoom) > 0.5) {
          animationFrameId = requestAnimationFrame(animateZoom);
        } else {
          zoom = targetZoom;
          card.style.backgroundSize = zoom + '%';
          animationFrameId = null;
        }
      };
      
      card.addEventListener('mouseenter', () => {
        targetZoom = 110;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        animateZoom();
      });
      
      card.addEventListener('mouseleave', () => {
        targetZoom = 100;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        animateZoom();
      });
    });

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close all other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});