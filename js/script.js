// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initContactForm();
    initScrollEffects();
    initFloatingParticles();
    initTimelineAnimations();
    initAIToolsAnimations();
    initFloatingCodeFragments();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Add scrolled class to navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Typing animation for hero section
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    const texts = [
        'AI-Powered Developer',
        'Creative Asset Creator',
        'GPT-Tool Builder',
        'Innovation Catalyst',
        'Future-Focused Maker'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start typing animation
    typeWriter();
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, 200);
                }
                
                // Special handling for AI tools
                if (entry.target.classList.contains('ai-tool')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 200;
                    setTimeout(() => {
                        entry.target.classList.add('bounce-in');
                    }, delay);
                }
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll(
        '.section-fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .bounce-on-scroll, .timeline-item, .ai-tool'
    );

    animateElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}


// Contact form validation and handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return; // Exit if form doesn't exist
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Real-time validation
    nameInput.addEventListener('blur', () => validateField(nameInput, 'name'));
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email'));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'message'));

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isValid = validateForm();
        
        if (isValid) {
            submitForm();
        }
    });

    function validateField(field, type) {
        const value = field.value.trim();
        const errorElement = document.getElementById(`${field.name}-error`);
        let isValid = true;
        let errorMessage = '';

        // Clear previous error state
        field.classList.remove('error');
        errorElement.classList.remove('show');

        switch (type) {
            case 'name':
                if (value.length < 2) {
                    errorMessage = 'Name muss mindestens 2 Zeichen lang sein.';
                    isValid = false;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
                    isValid = false;
                }
                break;
            case 'message':
                if (value.length < 10) {
                    errorMessage = 'Nachricht muss mindestens 10 Zeichen lang sein.';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }

        return isValid;
    }

    function validateForm() {
        const nameValid = validateField(nameInput, 'name');
        const emailValid = validateField(emailInput, 'email');
        const messageValid = validateField(messageInput, 'message');

        return nameValid && emailValid && messageValid;
    }

    function submitForm() {
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('i');

        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Wird gesendet...';
        btnIcon.className = 'fas fa-spinner fa-spin';

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Success state
            btnText.textContent = 'Gesendet!';
            btnIcon.className = 'fas fa-check';
            submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';

            // Show success message
            showNotification('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.', 'success');

            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                submitBtn.disabled = false;
                btnText.textContent = 'Nachricht senden';
                btnIcon.className = 'fas fa-paper-plane';
                submitBtn.style.background = '';
            }, 3000);
        }, 2000);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 212, 170, 0.95);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 10000;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-success {
                background: rgba(40, 167, 69, 0.95);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1rem;
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Auto remove after 5 seconds
    setTimeout(() => removeNotification(notification), 5000);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Additional scroll effects
function initScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Header shadow on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
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

// Performance optimization for scroll events
const optimizedScroll = debounce(function() {
    // Handle scroll events here if needed
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
});

// Skip link functionality for accessibility
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #00d4aa;
    color: #1a1a1a;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10001;
    transition: top 0.3s;
`;

skipLink.addEventListener('focus', function() {
    this.style.top = '6px';
});

skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// Preload important resources
function preloadResources() {
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Service Worker registration for PWA features (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you want to add PWA support
        /*
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
        */
    });
}

// Error handling for images and external resources
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Handle image loading errors
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Console welcome message
console.log('%cWillkommen auf meiner Website! 🚀', 'color: #00d4aa; font-size: 16px; font-weight: bold;');
console.log('%cInteressiert am Code? Schau dir das Repository auf GitHub an!', 'color: #00d4aa; font-size: 12px;');
console.log('https://github.com/Mrowinski-Thorge/Developer');

// Floating particles animation
function initFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(0, 212, 170, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            animation: float ${Math.random() * 20 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Timeline animations
function initTimelineAnimations() {
    const timelineLine = document.querySelector('.timeline-line');
    if (!timelineLine) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineLine.style.height = '100%';
                timelineLine.style.transition = 'height 2s ease-in-out';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('.timeline-content'));
}

// AI Tools animations
function initAIToolsAnimations() {
    const aiTools = document.querySelectorAll('.ai-tool');
    
    aiTools.forEach((tool, index) => {
        tool.addEventListener('mouseenter', () => {
            tool.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        tool.addEventListener('mouseleave', () => {
            tool.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Floating code fragments
function initFloatingCodeFragments() {
    const fragmentsContainer = document.querySelector('.floating-code-fragments');
    if (!fragmentsContainer) return;

    const codeSnippets = [
        'console.log("AI");',
        'import { GPT } from "openai";',
        'const idea = createWith(AI);',
        'function innovate() {}',
        'npm install creativity',
        'git commit -m "✨ magic"'
    ];

    codeSnippets.forEach((snippet, index) => {
        const fragment = document.createElement('div');
        fragment.className = 'code-fragment';
        fragment.textContent = snippet;
        fragment.style.cssText = `
            position: absolute;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: rgba(0, 212, 170, 0.3);
            animation: floatCode ${Math.random() * 15 + 10}s infinite ease-in-out;
            left: ${Math.random() * 80 + 10}%;
            top: ${Math.random() * 80 + 10}%;
            pointer-events: none;
        `;
        fragmentsContainer.appendChild(fragment);
    });
}