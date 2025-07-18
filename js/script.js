// ==========================================
// Portfolio Website JavaScript
// Modern, Professional Developer Portfolio
// ==========================================

class PortfolioApp {
    constructor() {
        this.initializeApp();
        this.bindEvents();
        this.startAnimations();
    }

    // Initialize the application
    initializeApp() {
        this.hideLoading();
        this.initTheme();
        this.initSkillBars();
        this.initProjectFilters();
        this.initContactForm();
        this.initScrollToTop();
    }

    // Hide loading screen
    hideLoading() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            // Immediate fallback in case of any errors
            const hideLoadingScreen = () => {
                loadingOverlay.classList.add('hidden');
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            };

            // Hide after 2.5 seconds with error handling
            setTimeout(hideLoadingScreen, 2500);
            
            // Also ensure it hides on page load complete
            if (document.readyState === 'complete') {
                setTimeout(hideLoadingScreen, 1000);
            } else {
                window.addEventListener('load', () => {
                    setTimeout(hideLoadingScreen, 1000);
                });
            }
        }
    }

    // Theme Management
    initTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Theme toggle buttons
        const themeToggles = document.querySelectorAll('.theme-toggle, .theme-toggle-small');
        themeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => this.toggleTheme());
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        // Update theme toggle icons
        const themeToggles = document.querySelectorAll('.theme-toggle i, .theme-toggle-small i');
        themeToggles.forEach(icon => {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Mobile Navigation
    initMobileNav() {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');

        if (mobileMenu && navMenu) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            // Close mobile menu when clicking on nav links
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // Navbar scroll effects
    initNavbarScroll() {
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Skills section animations
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        };

        // Intersection Observer for better performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillsSection = entry.target;
                    const skillBars = skillsSection.querySelectorAll('.skill-progress');
                    
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = width + '%';
                        }, index * 200); // Stagger animations
                    });
                    
                    observer.unobserve(skillsSection);
                }
            });
        }, { threshold: 0.3 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    // Project filtering
    initProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(button => button.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        // Add entrance animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.classList.add('hidden');
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                    }
                });
            });
        });
    }

    // Contact form validation and handling
    initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitBtn = form.querySelector('button[type="submit"]');

        // Real-time validation
        nameInput.addEventListener('blur', () => this.validateName(nameInput));
        emailInput.addEventListener('blur', () => this.validateEmail(emailInput));
        messageInput.addEventListener('blur', () => this.validateMessage(messageInput));

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const isNameValid = this.validateName(nameInput);
            const isEmailValid = this.validateEmail(emailInput);
            const isMessageValid = this.validateMessage(messageInput);

            if (isNameValid && isEmailValid && isMessageValid) {
                this.submitForm(form, submitBtn);
            }
        });
    }

    validateName(input) {
        const value = input.value.trim();
        const errorElement = document.getElementById('name-error');
        
        if (value.length < 2) {
            this.showError(input, errorElement, 'Name muss mindestens 2 Zeichen haben');
            return false;
        }
        
        this.clearError(input, errorElement);
        return true;
    }

    validateEmail(input) {
        const value = input.value.trim();
        const errorElement = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(value)) {
            this.showError(input, errorElement, 'Bitte gib eine gültige E-Mail-Adresse ein');
            return false;
        }
        
        this.clearError(input, errorElement);
        return true;
    }

    validateMessage(input) {
        const value = input.value.trim();
        const errorElement = document.getElementById('message-error');
        
        if (value.length < 10) {
            this.showError(input, errorElement, 'Nachricht muss mindestens 10 Zeichen haben');
            return false;
        }
        
        this.clearError(input, errorElement);
        return true;
    }

    showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    async submitForm(form, submitBtn) {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-loading');
        
        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success state
            this.showFormSuccess();
            form.reset();
            
        } catch (error) {
            this.showFormError();
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-loading');
        }
    }

    showFormSuccess() {
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--success-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 600;
        `;
        successMsg.textContent = 'Nachricht erfolgreich gesendet!';
        
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    }

    showFormError() {
        // Create error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'form-error';
        errorMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--danger-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 600;
        `;
        errorMsg.textContent = 'Fehler beim Senden. Bitte versuche es später erneut.';
        
        document.body.appendChild(errorMsg);
        
        setTimeout(() => {
            errorMsg.remove();
        }, 3000);
    }

    // Scroll to top functionality
    initScrollToTop() {
        const scrollBtn = document.getElementById('scroll-to-top');
        if (!scrollBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Parallax effects
    initParallax() {
        const parallaxElements = document.querySelectorAll('.hero, .about, .skills, .projects');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // Intersection Observer for animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.about-content, .skills-category, .project-card, .contact-content');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Typing animation for hero text
    initTypingAnimation() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';

        let index = 0;
        const typeSpeed = 100;

        const typeText = () => {
            if (index < text.length) {
                subtitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, typeSpeed);
            }
        };

        // Start typing animation after hero loads
        setTimeout(typeText, 1000);
    }

    // Performance optimizations
    initPerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Debounce scroll events
        let scrollTimeout;
        const originalScrollHandler = window.onscroll;
        
        window.onscroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (originalScrollHandler) originalScrollHandler();
            }, 16); // ~60fps
        };
    }

    // Keyboard navigation
    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC key closes mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.getElementById('mobile-menu');
                const navMenu = document.getElementById('nav-menu');
                
                if (navMenu && navMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }

            // Ctrl/Cmd + D toggles theme
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    // Touch gestures for mobile
    initTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                const navMenu = document.getElementById('nav-menu');
                const mobileMenu = document.getElementById('mobile-menu');

                if (diff > 0 && navMenu.classList.contains('active')) {
                    // Swipe left - close menu
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        };
    }

    // Start all animations
    startAnimations() {
        // Add CSS animations class to body
        document.body.classList.add('animations-enabled');
        
        // Initialize scroll-based animations
        this.initScrollAnimations();
        
        // Initialize typing animation
        // this.initTypingAnimation(); // Commented out to avoid overriding existing text
    }

    // Bind all event listeners
    bindEvents() {
        // Core functionality
        this.initMobileNav();
        this.initNavbarScroll();
        this.initSmoothScroll();
        
        // Enhanced features
        this.initKeyboardNavigation();
        this.initTouchGestures();
        this.initPerformanceOptimizations();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Close mobile menu on desktop
            if (window.innerWidth > 768) {
                const mobileMenu = document.getElementById('mobile-menu');
                const navMenu = document.getElementById('nav-menu');
                
                if (navMenu && navMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
}

// Utility functions
class Utils {
    static debounce(func, wait) {
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

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        const range = end - start;

        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (range * progress));
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };

        requestAnimationFrame(updateNumber);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.classList.add('page-hidden');
    } else {
        // Resume animations when tab becomes visible
        document.body.classList.remove('page-hidden');
    }
});

// Service Worker registration for PWA functionality (optional)
// Disabled to prevent 404 errors - can be enabled when sw.js is created
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
*/