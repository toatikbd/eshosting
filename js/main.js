/**
*
* -----------------------------------------------------------------------------
*
* Template : ESHosting | Domain Hosting Service in Bangladesh 
* Author : ESHosting
* Author URI : http://www.eshosting.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });
	
	/*-------------------------------------
    OwlCarousel
    -------------------------------------*/
	//slider
    var slidercarousel = $('.slider-carousel');
    if(slidercarousel.length){
    	$(".slider-carousel").owlCarousel({
            margin:0,
            nav:true,
            navText:[
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
          	],
            loop:true,
            dots: false,
            items:1,
            autoplay:true,
            animateOut: 'fadeOut',
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true
        });
    }
    
    /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
  $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false)
                },
                480: {
                    items: (smDevice2 ? smDevice : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false)
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false)
                },
                992: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false)
                }
            }
        });

    });


  // Counter Up  
  var rscounter = $('.rs-counter');
    if(rscounter.length){
    $('.rs-counter').counterUp({
      delay: 20,
      time: 1500
    });
  }

  //preloader
    $(window).on( 'load', function() {
        $("#loading").delay(1000).fadeOut(300);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(300);
        })

    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }

    })

  // wow init
  new WOW().init();

  // Google Map
  if ($('#googleMap').length) {
    var initialize = function() {
    var mapOptions = {
      zoom: 17,
      scrollwheel: false,
      center: new google.maps.LatLng(23.7952991,90.3537209),
      styles: [{
          stylers: [{
              saturation: -100
          }]
      }]
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),
        mapOptions);
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        animation: google.maps.Animation.BOUNCE,
        icon: 'images/map-mark.png',
        map: map
    });
  }
    // Add the map initialize function to the window load function
    google.maps.event.addDomListener(window, "load", initialize);
  }

  // scrollTop init
    var totop = $('#scrollUp'); 
    if(totop.length){   
        win.on('scroll', function() {
            if (win.scrollTop() > 150) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });
        totop.on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500)
        });
    }

  /*----------------------------
  single-productjs active
  ------------------------------ */
  $('.single-product-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-product-nav'
    });

  $('.single-product-nav').slick({
        slidesToShow: 4,
        asNavFor: '.single-product-image',
        dots: false,
        navText: false,
        focusOnSelect: true,
        centerMode:false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 2
                }
            }
        ] 
    });

  // image loaded portfolio init
    var grid = $('.grid'); 
        if(grid.length){ 
        $('.grid').imagesLoaded(function() {
            $('.portfolio-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }        
        
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
	
	
})(jQuery);