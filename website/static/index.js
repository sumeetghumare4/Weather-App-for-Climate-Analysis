// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add input focus animations
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add button hover animations
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add weather icon animation
const weatherIcon = document.querySelector('.weather-icon');
if (weatherIcon) {
    weatherIcon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    weatherIcon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Add form submission animation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        this.classList.add('submitting');
        
        // Simulate form submission
        setTimeout(() => {
            this.classList.remove('submitting');
            // Handle actual form submission logic here
            this.submit();
        }, 1000);
    });
});

// Add smooth transitions to all elements
document.querySelectorAll('*').forEach(element => {
    element.style.transition = 'all 0.3s ease';
});

// Add window scroll effects
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card, .form-container, .weather-display');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Add fade-in effect when element enters viewport
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});