(function ($) {
  'use strict';

  var $window = $(window);
  var $navigation = $('.navigation');

  function syncNavigationState() {
    if ($window.scrollTop() > 24) {
      $navigation.addClass('nav-scrolled');
    } else {
      $navigation.removeClass('nav-scrolled');
    }
  }

  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
    syncNavigationState();
  });

  $window.on('scroll', syncNavigationState);

  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-angle-right').removeClass('ti-angle-right').addClass('ti-angle-down');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-angle-down').removeClass('ti-angle-down').addClass('ti-angle-right');
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
    dots: true,
    arrows: false
  });

  $('.navbar-collapse a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
})(jQuery);
