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

    // Add your custom JS here
}); 