$(document).ready(function(){

  $('body').addClass('load');

   $( ".burger" ).click(function() {
      $('nav').stop().toggleClass('open-nav');
      $('.back-dark').css('display','block'); 
      $('body').css('overflow','hidden');
   });

   $( "nav > ul > li > a" ).click(function() {
      $('nav').stop().removeClass('open-nav');
      $('.back-dark').css('display','none'); 
      $('body').css('overflow','auto');
   });
   $( ".close-menu" ).click(function() {
      $('nav').stop().removeClass('open-nav');
      $('.back-dark').css('display','none'); 
      $('.popUp').css('display','none'); 
      $('body').css('overflow','auto'); 
   });

   $( ".open-call" ).click(function() {
    $('.back-dark').css('display','block'); 
    $('.call').addClass('open-pop'); 
    $('body').css('overflow','hidden'); 
 });

   $( ".send" ).click(function(e) {
     e.preventDefault();
     var a = $('#name').val();
     var b = $('#phone').val();
     var c = $('#check');
     console.log(c);
     if((a === "") || (b === "")){
      alert('Заполните форму')
     }
     else{
      $('.back-dark').css('display','block'); 
      $('.call').removeClass('open-pop'); 
      $('.thank').addClass('open-pop'); 
      $('body').css('overflow','hidden'); 
     }
 });


   $( ".close-pop" ).click(function() {
    $('.back-dark').css('display','none'); 
    $('.popUp').removeClass('open-pop'); 
    $('body').css('overflow','auto'); 
 });


   $( ".back-dark" ).click(function() {
      $('nav').stop().removeClass('open-nav');
      $('.back-dark').css('display','none'); 
      $('.popUp').removeClass('open-pop'); 
      $('body').css('overflow','auto'); 
   });

   $( ".closePop" ).click(function() {
      $('.back-dark').css('display','none'); 
      $('.popUp').removeClass('open-pop'); 
      $('body').css('overflow','auto'); 
   });

   if (screen.width < 1024){
      console.log('a')
      $('.some-slider').slick({
         dots: false,
         infinite: false,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow: $('.prev-arr'),
         nextArrow: $('.next-arr'),
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
             }
           },
           {
             breakpoint: 768,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1
             }
           },
           {
             breakpoint: 580,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
       });
       $('.slider-str').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-str'),
        nextArrow: $('.next-str'),
        fade: true,
        cssEase: 'linear',
      });

      $( ".circle" ).click(function() {
        $(this).toggleClass('red'); 
        $(this).parent().find('.open-info').toggleClass('op');
      });
   } 
   else{
    $( ".circle" ).click(function() {
      var dataId = $(this).attr('data-attr');
      if($(this).attr('class') === 'circle red'){
        $('.open-info').removeClass('op');
        $('.circle').removeClass('red'); 
      }
      else {
        $('.open-info').removeClass('op');
        $('.circle').removeClass('red'); 
        $('.main-image > img').removeClass('view');
        $(this).addClass('red'); 
        $(this).parent().find('.open-info').addClass('op');
        $('.main-image').find('#' + dataId).addClass('view');
      }
      var a = $(this).attr('data-attr');
    });
   }

      var lastScrollTop = 0;
      $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
          $('.some-slider').css('transform','translate(-5%, 0)');
            //вниз
        } 
        else{
          $('.some-slider').css('transform','translate(5%, 0)')
              // вверх 
        }
        lastScrollTop = st;
      });
  

   $(window).scroll(function() {

    var anchor      = $('.exersice-solution');
    // var main        = $('main');
    var scrollTop   = $(document).scrollTop();
    var positionTop = $(anchor).offset().top;
    var outerHeight = $(anchor).outerHeight();

    var a = positionTop + (outerHeight/2) + (outerHeight/4);
      
      if(scrollTop >= a) {
          $('main').removeClass('global-black-top');
      }

      else if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
          $('main').addClass('global-black-top');
      } 
    
      else {
          $('main').removeClass('global-black-top');
      }
    });

    $(window).scroll(function() {

      var anchor      = $('.unique');
      var scrollTop   = $(document).scrollTop();
      var positionTop = $(anchor).offset().top;
      var outerHeight = $(anchor).outerHeight();
  
      var a = positionTop + (outerHeight/2) + (outerHeight/4);
        
        if(scrollTop >= a) {
            $('main').removeClass('global-black');
        }
  
        else if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
            $('main').addClass('global-black');
        } 
      
        else {
            $('main').removeClass('global-black');
        }
      });

    $('.all-tasks').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-task'),
      nextArrow: $('.next-task'),
      fade: true,
      cssEase: 'linear',
    });

    new WOW().init();

    $('.all-phone').parallax();
});

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene, {
//   relativeInput: true
// });