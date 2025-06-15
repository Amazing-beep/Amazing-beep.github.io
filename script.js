document.addEventListener('DOMContentLoaded', function() {
    // Navbar interactivity
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '') {
                alert('Please enter your name.');
                return;
            }

            if (email === '') {
                alert('Please enter your email address.');
                return;
            }

            // Basic email format validation
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (message === '') {
                alert('Please enter your message.');
                return;
            }

            // If all validations pass, you can proceed with form submission (e.g., via AJAX)
            alert('Form submitted successfully! (This is a demo, no actual submission)');
            contactForm.reset(); // Clear the form
        });
    }
});

