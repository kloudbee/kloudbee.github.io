
!(function ($) {
  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

})(jQuery);

$(".imgClick").click(function (e) {
  e.preventDefault();
  $('#title').text($(this).children("p:first").next().text());

  $('#car1').attr("src", $(this).children("p:first").text() + ".jpg");
  $('#car2').attr("src", $(this).children("p:first").text() + ".1.jpg");
  $('#car3').attr("src", $(this).children("p:first").text() + ".2.jpg");
  $('.carousel').carousel()

  $('#description').text($(this).children("p:first").next().next().text());
  $('#clientComment').text($(this).children("p:first").next().next().next().text());
  $('#clientName').text($(this).children("p:first").next().next().next().next().text());


  $('#modalService').modal('show');


});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        // if(hash!=carouselExampleControls){

        //   window.location.hash = hash;
        // }

      });
    } // End if
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

let lang = 'eng';

$(function () {
  $('#translate').click(function (e) {
    //e.preventDefault();

    if (lang === 'eng') {

      $('#tI1').text('Home');
      $('#tI2').text('About');
      $('#tI3').text('Services');
      $('#tI4').text('Portfolio');
      $('#tI5').text('Team');
      $('#tI6').text('Contact');
      $('#tI7').text('Making your ideas come true');
      $('#tI8').text('From the best web page to boost your business, up to stricking mobile apps.');
      $('#tI9').text('We can make it happen');
      $('#tI10').text('about');
      $('#tI11').text("we're a development & design agency... ");
      $('#tI12').text('"Come on, let´s create tomorrow and stop worrying about yesterday"');
      $('#tI13').text('services');
      $('#tI14').text('we desing simple solutions to BIG problems.');
      $('#tI15').text('Software that suits you. POS, java platforms & more. Just what you need to boost your enterprise.');
      $('#tI16').text('Web Pages');
      $('#tI17').text('Websites ready to communicate the right message to your audience. Whatever you want to achieve we got your back.');
      $('#tI18').text('Mobile Apps');
      $('#tI19').text('Android or IOS? We do both.');
      $('#tI20').text('Online Shops');
      $('#tI21').text('We digitalize your business, from a simple catalog up to a complete online store. If your business is not online, you´re out of business.');
      $('#tI22').text('Design');
      $('#tI23').text('Logo design, great images for your business, ilustrations and whatever your can imagine.');
      $('#tI25').text('Our AWS infraestructure allows us to offer cloud solutions to any problem.');
      $('#tI26').text('QR Menus');
      $('#tI27').text('We offer the best digital menus for your food restaurants.');
      $('#tI28').text('See more...');
      $('#tI29').text('technologies');
      $('#tI30').text('updating ourselves day by day to always offer you the market´s best.');
      $('#tI31 ').text('Great looking websites made just for you.');
      $('#tI32 ').text('We deploy the best web, desktop or mobile apps with the latest technology.');
      $('#tI33 ').text('Super efficient Android apps and we even help you with Playstore upload.');
      $('#tI34 ').text('Nice looking IOS apps (we also help you with AppStore upload ;) ). ');
      $('#tI35 ').text('The technology behind Facebook and Instagram. We can develop your ReactNative app.');
      $('#tI36 ').text('Payment');
      $('#tI37 ').text('We integrate online payment processors to your apps.');
      $('#tI38 ').text('Nice AWS infraestructure ready to deploy clean solutions to your enterprise.');
      $('#tI39 ').text('Run-ready containers within minutes.');
      $('#tI40 ').text('Connecting visible with invisible.');
      $('#tI41 ').text('Data Base');
      $('#tI42 ').text('SQL & NoSQL, we choose the best alternative that suits you.');
      $('#tI43 ').text('Quality websites with passion and a little bit of bootstrap.');
      $('#tI44 ').text('Coffee');
      $('#tI45 ').text('We make some pretty good coffee, want a sip?');
      $('#tI46 ').text('portfolio');
      $('#tI47 ').text('Take a look to our work');
      $('#tI48 ').text('Mojitologo Logo');
      $('#tI49 ').text('We designed the brand of Mojitologo Cocktails. Managing to capture the essence the owner wanted to transmit to it´s customers all in all with a fresh look.');
      $('#tI50 ').text('"I loved Kloudbee´s work, they´re truly the best on the subject."');
      $('#tI51 ').text('Ricardo Ruiz, Mojitologo Cocktails´s Owner');
      $('#tI52 ').text('Mojitologo Logo');
      $('#tI53 ').text('Trading App');
      $('#tI54 ').text('We did a trading app design. Thought to offer cash or other products in exchange of the published article.');
      $('#tI55 ').text('"Their design delighted me."');
      $('#tI56 ').text('Guillermo Garcia, Kloudbee´s client');
      $('#tI57 ').text('Trading App');
      $('#tI58 ').text('Futbolandia Online Store');
      $('#tI59 ').text('We created the online store of Futbolandia, a local bussines of Sports Jersey.');
      $('#tI60 ').text('"With this store I am now in a new market at this difficult times"');
      $('#tI61 ').text('Carlos Magallanes, Owner of Futbolandia');
      $('#tI62 ').text('Futbolandia Online Store');
      $('#tI64 ').text('We developed a prototipe app that controls the power supply of plugs and filters all the electric information graphically.');
      $('#tI65 ').text('"It has some really functional design"');
      $('#tI67 ').text('Zumma Web Page');
      $('#tI68 ').text('We created the main page of Zumma, an office of counters with the option of watching FB lives');
      $('#tI69 ').text('"I loved the design of the web page, we now have even more presence in social media."');
      $('#tI70 ').text('Pedro Salinas, Co-founder of Zumma');
      $('#tI71 ').text('Zumma Web Page');
      $('#tI72 ').text('');
      $('#tI73 ').text('We´re currently developing iChamba an online platform that will change the way of hiring informal workers in Mexico');
      $('#tI74 ').text('Wait for it.');
      $('#tI75 ').text('The Kloudbee Team');
      $('#tI76 ').text('Skyfall Web');
      $('#tI77 ').text('We developed the Skyfall webpage, an online jewerly store.');
      $('#tI78 ').text('"With this new webpage I adapted to this covid crisis, and I´m closer than ever with my clients "');
      $('#tI79 ').text('Kimberly Rivas, Skyfall´s Owner');
      $('#tI80 ').text('Skyfall Web');
      $('#tI81 ').text('El Novillo Butchery logo');
      $('#tI82 ').text('We created the butchery logo.');
      $('#tI83 ').text('"They delivered in time, just as I asked. Highly recommended"');
      $('#tI84 ').text('Manel Saracho, El Novillo Butchery´s owner');
      $('#tI85 ').text('El Novillo Butchery logo');
      $('#tI86 ').text('Visit Durango App');
      $('#tI87 ').text('We developed the design for a touristic app for Durango, Mexico');
      $('#tI88 ').text('"It has a refined design and usability, it´s even better than the existing app."');
      $('#tI89 ').text('Visit Durango App');
      $('#tI90 ').text('Cheems App');
      $('#tI91 ').text('Cheems, the sympathic internet´s dog comes to life! Customize doge with your favourite clothes and accesories.');
      $('#tI92 ').text('"Great app, entretainment and design at it´s finest."');
      $('#tI93 ').text('Andres Floriano, Playstore User');
      $('#tI94 ').text('Cheems App');
      $('#tI95 ').text('Sr. Cubo Webpage');
      $('#tI96 ').text('We created Sr. Cubo´s website, a Mexican gift store and puzzle shop.');
      $('#tI97 ').text('"They have a great customer service."');
      $('#tI98 ').text('Agustin C. Sr. Cubo´s customer');
      $('#tI99 ').text('Sr. Cubo Webpage');
      $('#tI100 ').text('We designed the brand and renders of Kbshift a meechanical keyboards store');
      $('#tI101 ').text('"Those are some amazing renders, they look real!"');
      $('#tI102 ').text('Kbshift customer');
      $('#tI103 ').text('taskforce');
      $('#tI113 ').text('get to know us');
      $('#tI105 ').text('Backend Developer').trigger('change');
      $('#tI106 ').text('Frontend Developer');
      $('#tI107').text('Frontend Developer & Designer');
      $('#tI108').text('Designer');
      $('#tI109').text('Backend Developer');
      $('#tI110').text('contact us');
      $('#tI111').text('Copyright © 2020. All rights reserve.');
      $('#tI112').text('Maximizate Web Page');
      $('#tI113').text('We created the Maximizate main page an agency based in Canada commited to the personal and educational growth of people.');
      $('#tI114').text('"With our new webpage we can now offer our services to even more people"');
      $('#tI115').text('Keyla Gamboa, Co-founder of Maximizate');
      $('#tI116').text('Maximizate Web Page');
      lang = 'span';
      console.log(lang);
    } else {
      location.reload();
      lang = 'eng';
      console.log(lang);
    }

  });
});

