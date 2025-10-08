const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Error handling: Check if required elements exist
if (!hamburger || !navMenu || navLinks.length === 0) {
    console.error('Required navigation elements not found');
} else {
    // Proceed with menu functionality

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });

    // Close mobile menu when a link is clicked
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute('aria-expanded', 'false');
    }

    navLinks.forEach(n => n.addEventListener("click", closeMenu));

    // Optional: Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            closeMenu();
        }
    });
}

// Fade in animation on scroll
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    try {
        document.querySelectorAll('.fade-in').forEach(section => {
            observer.observe(section);
        });
    } catch (error) {
        console.error('Error setting up intersection observer:', error);
    }
} else {
    console.warn('IntersectionObserver not supported, fade-in animations disabled');
}

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
} else {
    console.error('Back to top button not found');
}

// Handle quote form submission to WhatsApp
const quoteForm = document.querySelector('.quote-form');
const formConfirmation = document.getElementById('form-confirmation');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Hello Coco, I am ${name}. Email: ${email}. Service: ${service}. Message: ${message}`;
        const whatsappUrl = `https://wa.me/254701644277?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        // Show confirmation message
        if (formConfirmation) {
            formConfirmation.style.display = 'block';
        }
        quoteForm.reset();
    });
} else {
    console.error('Quote form not found');
}

// Hero slideshow
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const playPauseBtn = document.getElementById('play-pause-slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
let isPlaying = true;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function playPauseSlideshow() {
    if (isPlaying) {
        clearInterval(slideInterval);
        playPauseBtn.innerHTML = '▶'; // Play icon
    } else {
        slideInterval = setInterval(nextSlide, 5000);
        playPauseBtn.innerHTML = '❚❚'; // Pause icon
    }
    isPlaying = !isPlaying;
}

if (slides.length > 0) {
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            if (isPlaying) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            if (isPlaying) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }
        });
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', playPauseSlideshow);
    }
}