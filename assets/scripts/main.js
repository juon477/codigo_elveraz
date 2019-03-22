$(document).ready(function() {
  $('.js_nav').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
  });

  $('.js_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  // document.querySelector('.js_btnSocial').addEventListener('click', function() {
  //   if (document.querySelector('body').classList.value === 'show-social') {
  //     document.querySelector('body').classList.remove('show-social');
  //   } else {
  //     document.querySelector('body').classList.add('show-social');
  //   }
  // });

  $('.js_btnSocial').on('click', function(e){
      // $('body').toggleClass('show-social')
      $('.header-social').slideToggle( "slow" );
  });


  $('.js_btnSearch').on('click', function() {
    console.log('click lupa')
  })

});
