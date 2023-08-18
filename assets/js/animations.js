AOS.init({
  duration: 700,
  easing: "ease-in-out",
});

const animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'),
  path: 'assets/animations/d8.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
});

$(function () {
  $(document).scroll(function () {
    $(".fixed-top").toggleClass('purple', $(this).scrollTop() > $("#landing").height() * .8);
  });
});

