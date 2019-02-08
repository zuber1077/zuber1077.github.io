/*--------------------------------------------------
-----------------------------------------------------

    JS INDEX
    ================================================
    1. Newsletter Popup
    2. Mobile Menu Activation
    3. Tooltip Activation
    6. Slider Activation
    7. Thumbnail Product activation
    8. Apple Watch Product activation
    9. Recent Post Activation
    10. Featured Product Activation
    11. Categorie Product Activation
    12. Deal Product Activation
    13. Onsale Product Activation
    15. ScrollUp Activation
    16. Sticky-Menu Activation
    17. Nice Select Activation
    18. Price Slider Activation
    19. Brand Logo  Activation
    

================================================*/

(function ($) {
    "use Strict";

    /*----------------------------
    2. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
    });

    /*----------------------------
    3. Tooltip Activation
    ------------------------------ */
    $('.pro-add-cart a,.pro-actions-link a').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });

  

    /*----------------------------
    6. Slider Activation
    -----------------------------*/
    $(".slider-activation").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        autoplayTimeout: 10000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: true,
        autoHeight: true,
        lazyLoad: true,
    });

    /*-------------------------------------
    7. Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 500,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
    $('.thumb-menu a').on('click', function () {
        $('.thumb-menu a').removeClass('active');
    })

    /*-------------------------------------
    8. Apple Watch Product activation
    --------------------------------------*/
    $('.large-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumb_active',
        infinite: true,
    });


    $('.thumb_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.large-active',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        infinite: true,
        vertical: true,
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(this).find('.slick-slide').removeClass('first-item last-item');
        $(this).find('.slick-slide[data-slick-index="' + nextSlide + '"]').prev().addClass('first-item');
        $(this).find('.slick-slide[data-slick-index="' + nextSlide + '"]').next().addClass('last-item');
    });

    $('.thumb_active').find('.slick-slide.slick-active').first().addClass('first-item');
    $('.thumb_active').find('.slick-slide.slick-active').last().addClass('last-item');


    /*-----------------------------
    9. Recent Post Activation
    -----------------------------*/
    $(".recent-post-active").owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 500,
        nav: false,
        autoplay: false,
        items: 1,
        dots: false,
    });

    /*----------------------------------------
    10. Featured Product Activation
    ----------------------------------------*/
    $('.feature-pro-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 1500,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                smartSpeed: 500
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    /*----------------------------------------
    11. Categorie Product Activation
    ----------------------------------------*/
    $('.categorie-pro-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 1500,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                smartSpeed: 500
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })

    /*----------------------------------------
    12. Deal Product Activation
    ----------------------------------------*/
    $('.deal-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 1
            }
        }
    })

    /*----------------------------------------
    13. Onsale Product Activation
    ----------------------------------------*/
    $('.onsale-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 1
            }
        }
    })

    /*----------------------------
    15. ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '550', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*----------------------------
    16. Sticky-Menu Activation
    ------------------------------ */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.header-sticky').addClass("sticky");
        } else {
            $('.header-sticky').removeClass("sticky");
        }
    });

    /*----------------------------
    17. Nice Select Activation
    ------------------------------ */
    $('select').niceSelect();

    /*----------------------------
    18. Price Slider Activation
    -----------------------------*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100,
        values: [0, 85],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + "  $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        "  $" + $("#slider-range").slider("values", 1));

    /*--------------------------------
    19. Brand Logo  Activation
    ---------------------------------*/
    $('.brand-logo-active').owlCarousel({
        loop: true,
        autoplay:true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 20,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                smartSpeed: 300
            },
            340: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

})(jQuery);