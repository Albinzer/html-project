// form-handler.js
// Requires EmailJS (https://www.emailjs.com/)
// Replace placeholders with your EmailJS credentials

document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("YOUR_USER_ID"); // <-- Replace with your EmailJS user ID

  // --- Contact Form ---
  const contactForm = document.querySelector('.contact-modal-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: this.elements[0].value,
        from_email: this.elements[1].value,
        message: this.elements[2].value,
        to_email: "absalbinzer@gmail.com"
      })
      .then(function () {
        alert('✅ Your message was sent successfully! We appreciate your interest and will respond soon.');
        document.getElementById('contact-modal').classList.remove('active');
        contactForm.reset();
      }, function () {
        alert('❌ Sorry, your message could not be sent. Please try again later.');
      });
    });
  }

  // --- Registration Form ---
  const regForm = document.querySelector('.registration-form');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = regForm.querySelector('input[name="name"]').value;
      const email = regForm.querySelector('input[name="email"]').value;
      const phone = regForm.querySelector('input[name="phone"]').value;

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        phone: phone,
        to_email: "absalbinzer@gmail.com"
      })
      .then(function () {
        alert('✅ Registration successful! Welcome to Abs-LearnKit. We will contact you soon.');
        regForm.reset();
      }, function () {
        alert('❌ Registration failed. Please try again later.');
      });
    });
  }

  // --- Contact Modal Toggle ---
  $('#contact-btn').click(function (e) {
    e.preventDefault();
    $('#contact-modal').addClass('active');
  });
  $('#close-contact-modal').click(function () {
    $('#contact-modal').removeClass('active');
  });
  $('#contact-modal').on('click', function (e) {
    if (e.target === this) {
      $(this).removeClass('active');
    }
  });
});
