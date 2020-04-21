let doc = jQuery(document);

window.onload = function () {
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    // generate the contact number value
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('contact_service', 'contact_form', this);

  });

  (function () {
    emailjs.init('user_J9egfXusvN6ki5jMYin0z');
  })()
}

doc.ready(function () {

  "use strict";

  let typed = new Typed('.mytext', {
    strings: ["I'm Alaa", "A Software Engineer", "Scroll Down For More About Me"],
    smartBackspace: true, // Default value
    loop:true,
    backDelay: 1000,
    typeSpeed: 15
  });

  if ($(window).scrollTop() < 200) {
    $('.navbar-nav').addClass('navbar-nav-bg');
  }

  $(window).scroll(function () {
    let top = $(window).scrollTop(); // number of pixes the user has scrolled from the top

    if (top >= 200) {
      $('header').addClass('overlay');
      $('.navbar-nav').removeClass('navbar-nav-bg');
    } else if ($('header').hasClass('overlay')) {
      $('header').removeClass('overlay');
    } else {
      $('.navbar-nav').addClass('navbar-nav-bg');
    }
  });
});