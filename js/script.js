// js/script.js — Premium Multi-Page Navigation & UX Engine
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const allNavAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta-mobile)');

    // Detect current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const isHome = currentPath === 'index.html' || currentPath === '' || currentPath === '/';

    // Page load transition
    document.body.classList.add('page-loaded');

    // Set active nav link based on current page
    function setPageActiveState() {
        allNavAnchors.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (!href) return;
            // Direct page match
            if (href === currentPath) {
                link.classList.add('active');
            }
            // Home page match
            if (isHome && (href === 'index.html' || href === '#hero')) {
                if (href === 'index.html' || href === '#hero') {
                    // Only mark Home active if it's the home link
                    const text = link.textContent.trim().toLowerCase();
                    if (text === 'home' && href === 'index.html') link.classList.add('active');
                }
            }
        });
    }

    setPageActiveState();

    // Scroll handler with RAF throttle
    let ticking = false;
    function onScroll() {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Section-based active state (home page only)
        if (isHome) {
            const sections = document.querySelectorAll('section[id]');
            let found = false;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const top = section.offsetTop - 120;
                if (scrollY >= top) {
                    const id = section.getAttribute('id');
                    allNavAnchors.forEach(item => {
                        item.classList.remove('active');
                        const href = item.getAttribute('href');
                        if (href === '#' + id) {
                            item.classList.add('active');
                            found = true;
                        }
                    });
                    break;
                }
            }
            if (!found && scrollY < 200) {
                allNavAnchors.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === 'index.html') {
                        const text = item.textContent.trim().toLowerCase();
                        if (text === 'home') item.classList.add('active');
                    }
                });
            }
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    // Initial scroll state
    onScroll();

    // Non-home pages: always show scrolled navbar
    if (!isHome) {
        navbar.classList.add('scrolled');
    }

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Smooth scroll for anchor links (home page)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                // Close mobile menu
                if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
                if (navLinks) navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');

                const navHeight = navbar.offsetHeight || 80;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    // Close mobile menu on any page link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuToggle && navLinks) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
});
