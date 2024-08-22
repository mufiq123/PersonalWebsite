document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Initialize EmailJS
emailjs.init({publicKey: 'a8dwoUZe0S0DyRe2'}); // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key

    // Form submission handling
    const form = document.getElementById("contact-form");
    const formMessages = document.getElementById("form-messages");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate form fields
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessages.textContent = "Please fill in all fields.";
            return;
        }

        if (!validateEmail(email)) {
            formMessages.textContent = "Please enter a valid email address.";
            return;
        }

        // Send the form data using EmailJS
        emailjs.sendForm('service_jklc9tj', 'template_6khsqsq', form)
            .then(function(response) {
                formMessages.textContent = "Your message has been sent!";
                formMessages.style.color = "#00ff00";
                form.reset();
            }, function(error) {
                formMessages.textContent = "An error occurred while sending your message. Please try again.";
                formMessages.style.color = "#ff0000";
            });
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
