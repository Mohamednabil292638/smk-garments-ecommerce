// js/animations.js — Enhanced Scroll Reveal Engine
document.addEventListener('DOMContentLoaded', () => {
    // Main IntersectionObserver with better thresholds
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after reveal for performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    });

    // Auto-tag common elements for animation
    document.querySelectorAll('.feature-card, .step, .trust-feature-card, .wh-card, .contact-card').forEach(el => {
        if (!el.classList.contains('fade-in') && !el.classList.contains('fade-in-up')) {
            el.classList.add('fade-in-up');
        }
    });

    // Observe all animatable elements
    function observeAll() {
        document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .stagger-children').forEach(el => {
            if (!el.classList.contains('visible')) {
                revealObserver.observe(el);
            }
        });
    }

    observeAll();

    // Expose for dynamic content (products loaded via JS)
    window.refreshAnimations = observeAll;
});

// Callable from products.js after rendering
function refreshAnimationObserver() {
    if (window.refreshAnimations) window.refreshAnimations();
}
