// EmailJS Configuration
const EMAILJS_USER_ID = 'XTCs9h0u4t0PT3CO9'; // Replace with your EmailJS user ID
const EMAILJS_SERVICE_ID = 'service_0zpkg6z'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_dzpjcmo'; // Replace with your EmailJS template ID

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Email Validation and Sending for Newsletter Subscription
document.querySelector('.newsletter form').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (validateEmail(email)) {
        sendEmail(email);
        emailInput.value = ''; // Clear input after successful submission
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to send email using EmailJS
function sendEmail(email) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { email: email }, EMAILJS_USER_ID)
        .then((response) => {
            alert('Thank you for subscribing!');
        }, (error) => {
            alert('Failed to send the email. Please try again later.');
        });
}

// Button Feedback Animation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 200); // Animation duration
    });
});

// Add class for clicked animation in CSS
const style = document.createElement('style');
style.innerHTML = `
    .btn.clicked {
        transform: scale(0.98);
        transition: transform 0.1s ease;
    }
`;
document.head.appendChild(style);
