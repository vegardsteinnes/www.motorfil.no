const navSlide = () => {
  var active = false;
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    console.log(active);
    if (active == false) {
      active = true;
      nav.classList.remove('nav-deactivate');
      nav.classList.add('nav-activate');
    } else {
      active = false;
      nav.classList.remove('nav-activate');
      nav.classList.add('nav-deactivate');
    };

    $(window).resize(function() {
      if ($(window).width() > 768) {
        nav.classList.remove('nav-deactivate');
      } else {

      }
    });
  });
}

$(document).ready(function() {
  navSlide();
});
