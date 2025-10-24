// ===================================
// ANIMATIONS.JS - Scroll-Triggered Animations
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initCertificateAnimations();
});

// ===================================
// Scroll-Triggered Animations with Intersection Observer
// ===================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate child elements with stagger effect
                const children = entry.target.querySelectorAll('.timeline-item, .skill-card, .reference-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100); // 100ms delay between each item
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// Certificate Cards Staggered Animation
// ===================================
function initCertificateAnimations() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.parentElement.querySelectorAll('.certificate-card');
                
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100); // Stagger animation
                });
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe certificates section
    const certificatesSection = document.querySelector('.certificates-section');
    if (certificatesSection) {
        observer.observe(certificatesSection);
        
        // Set initial state for cards
        certificateCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }
}

// ===================================
// Timeline Items Animation
// ===================================
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.3
    });
    
    timelineItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Alternate animation direction
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        
        timelineObserver.observe(item);
    });
}

// ===================================
// Skill Cards Hover Effect Enhancement
// ===================================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===================================
// Experience Card Animation
// ===================================
const experienceCard = document.querySelector('.experience-card');

if (experienceCard) {
    const expObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });
    
    experienceCard.style.opacity = '0';
    experienceCard.style.transform = 'translateY(30px)';
    experienceCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    expObserver.observe(experienceCard);
}
