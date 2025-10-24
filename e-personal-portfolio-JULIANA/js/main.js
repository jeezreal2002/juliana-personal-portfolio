// ===================================
// MAIN.JS - Core Functionality
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initMobileMenu();
    initBackToTop();
    initCTAButton();
});

// ===================================
// Preloader
// ===================================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Hide preloader after page loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
                // Remove from DOM after transition
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000); // Show preloader for at least 1 second
        });
    }
}

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle && navLinks) {
        // Toggle menu on button click
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===================================
// Back to Top Button
// ===================================
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top on click
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===================================
// CTA Button - Scroll to Certificates
// ===================================
function initCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    const certificatesSection = document.getElementById('certificates');
    
    if (ctaButton && certificatesSection) {
        ctaButton.addEventListener('click', function() {
            certificatesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// ===================================
// Utility Functions
// ===================================

// Smooth scroll to element
function scrollToElement(element) {
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
