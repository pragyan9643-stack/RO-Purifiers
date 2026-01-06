// ========================================
// AquaPure RO Website - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initFormValidation();
    initSmoothScroll();
    initAnimations();
    setMinDate();
});

// ========================================
// Mobile Navigation Menu
// ========================================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ========================================
// Form Validation
// ========================================
function initFormValidation() {
    // Booking Form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
        
        // Real-time validation
        const inputs = bookingForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
}

// Validate individual field
function validateField(field) {
    const fieldName = field.id;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Specific field validations
    switch(fieldName) {
        case 'name':
        case 'contactName':
            if (value && value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            if (value && !/^[a-zA-Z\s]+$/.test(value)) {
                isValid = false;
                errorMessage = 'Name should contain only letters';
            }
            break;
            
        case 'mobile':
        case 'contactPhone':
            if (value && !/^[0-9]{10}$/.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid 10-digit mobile number';
            }
            break;
            
        case 'email':
        case 'contactEmail':
            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
            
        case 'serviceDate':
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (value && selectedDate < today) {
                isValid = false;
                errorMessage = 'Please select a future date';
            }
            break;
    }
    
    // Display error or clear it
    if (!isValid) {
        showError(field, errorMessage);
    } else {
        clearError(field);
    }
    
    return isValid;
}

// Show error message
function showError(field, message) {
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        field.style.borderColor = '#FF6B6B';
    }
}

// Clear error message
function clearError(field) {
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        field.style.borderColor = '#e0e0e0';
    }
}

// Handle Booking Form Submission
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        // Scroll to first error
        const firstError = form.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.previousElementSibling.focus();
            firstError.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Simulate form submission
    console.log('Booking Form Data:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Show success message
    form.style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Handle Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        // Scroll to first error
        const firstError = form.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.previousElementSibling.focus();
            firstError.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Simulate form submission
    console.log('Contact Form Data:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Show success message
    form.style.display = 'none';
    document.getElementById('contactSuccessMessage').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('contactSuccessMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Reset Booking Form
function resetForm() {
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');
    
    if (form && successMessage) {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Clear all errors
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.textContent = '');
        
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => input.style.borderColor = '#e0e0e0');
        
        // Scroll to form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Reset Contact Form
function resetContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('contactSuccessMessage');
    
    if (form && successMessage) {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Clear all errors
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.textContent = '');
        
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.style.borderColor = '#e0e0e0');
        
        // Scroll to form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ========================================
// Set Minimum Date for Date Input
// ========================================
function setMinDate() {
    const dateInput = document.getElementById('serviceDate');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const year = tomorrow.getFullYear();
        const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const day = String(tomorrow.getDate()).padStart(2, '0');
        
        dateInput.min = `${year}-${month}-${day}`;
    }
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Scroll Animations
// ========================================
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.service-card, .product-card, .feature-item, .value-item, .process-step, .benefit-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Navbar Scroll Effect
// ========================================
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 102, 255, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 102, 255, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Utility Functions
// ========================================

// Format phone number as user types
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    input.value = value;
}

// Add phone formatting to mobile inputs
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
});

// Prevent form submission on Enter key (except in textarea)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
        const form = event.target.closest('form');
        if (form && event.target.type !== 'submit') {
            event.preventDefault();
        }
    }
});

// ========================================
// Loading Simulation
// ========================================
window.addEventListener('load', function() {
    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
    
    // Remove any loading overlays if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%cAquaPure RO Water Purifiers', 'font-size: 24px; color: #0066FF; font-weight: bold;');
console.log('%cWebsite by AquaPure Team', 'font-size: 14px; color: #00D4FF;');
console.log('💧 Pure Water, Healthy Life');

// ========================================
// Export functions for use in HTML onclick attributes
// ========================================
window.resetForm = resetForm;
window.resetContactForm = resetContactForm;
