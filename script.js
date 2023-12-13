// Toggle Navigation Menu

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const cancelButton = document.querySelector('.cancel-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        menuIcon.style.display = 'none';
        cancelButton.style.display = 'block';
    });

    cancelButton.addEventListener('click', function () {
        navLinks.classList.remove('show');
        menuIcon.style.display = 'block';
        cancelButton.style.display = 'none';
    });
});

// Add fade-in effect to sections
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach((section) => {
        const position = section.getBoundingClientRect();

        if (position.top <= window.innerHeight * 0.75) {
            section.classList.add('show');
        }
    });
});



// Scrolling Effects
document.addEventListener('DOMContentLoaded', function () {
    const bottomText = document.getElementById('bottom-text');

    window.addEventListener('scroll', function () {
        if (isElementInViewport(bottomText)) {
            bottomText.classList.add('show');
        }
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (replace this with actual backend handling)
    console.log(`Form submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset the form
    document.getElementById('contactForm').reset();
}


// Add this to your existing JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };

    const sectionObserver = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }
});

