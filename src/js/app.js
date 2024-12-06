// Import Bootstrap
import 'bootstrap';

// Import jQuery
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// Your custom JS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Initialize Typed.js
    new Typed('#typed', {
        strings: ['Backend Web Developer', 'FPT Polytechnic Student', 'Passionate Coder'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 