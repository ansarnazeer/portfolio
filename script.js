// =========================
// Dark Mode Toggle
// =========================
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const root = document.documentElement;
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// =========================
// Mobile Hamburger Menu
// =========================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Close the mobile menu after tapping a link
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });
}

// =========================
// Contact Form (demo mode - no backend connected)
// =========================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // stops reload
        alert('Message not sent (demo mode)'); // optional feedback
    });
}

// =========================
// Project Slider / Carousel
// =========================
const slides = document.querySelectorAll('.project-slide');
const dots = document.querySelectorAll('#projectDots .dot');
const prevBtn = document.getElementById('prevProject');
const nextBtn = document.getElementById('nextProject');
let currentSlide = 0;

function goToSlide(index) {
    if (!slides.length) return;
    const total = slides.length;
    currentSlide = (index + total) % total;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
}

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.getAttribute('data-index'), 10));
    });
});

