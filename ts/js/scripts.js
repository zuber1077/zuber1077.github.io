( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/


	
	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).on('load', function(){



		/* Hide Loader  */



		// $('.loader').fadeOut(200);



		/* Wow Init */



		if ($('.wow').length > 0) {
			var wow = new WOW({
			    offset: 150,          
			    mobile: false
			  }
			);
			wow.init();
		}

	});



	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	/* Fixed Navbar On Scroll */



	$('.js-navbar').affix({
	  offset: {
	    top: 50
	  }
	});


	$('.js-navbar').on('affix.bs.affix', function() {
		if (!$('.js-navbar').hasClass('affix')){
			$('.js-navbar').addClass('animated slideInDown');
		}
	});

	$('.js-navbar').on('affixed-top.bs.affix', function() {
	  	$('.js-navbar').removeClass('animated slideInDown');
	  	
	});



	/* Smooth Scroll To Anchor */



	$('.navigation ul li a, .mobile-menu ul li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - $('.js-navbar').outerHeight() + 1) 
            }, 1000);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });



	/* Scrollspy - Active Anchor Class On Scroll */



	$('body').scrollspy({
		offset: $('.js-navbar').outerHeight()
	});



	/*-------------------------------------------------------------------------------
	  Sidebar Menu
	-------------------------------------------------------------------------------*/


	function hideMenu(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
	}

	function showMenu(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	}
	
	$('.navbar-toggle').on('click',function(){
		showMenu();
	});



    /* Close Menu */



	$('.close-menu, .click-capture').on('click', function(){
		hideMenu();
		$('.menu-list ul').slideUp(300);
	});



	/*-------------------------------------------------------------------------------
	  Owl Carousel Init
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){



		/* Project Carousel */



	   $('.project-carousel').owlCarousel({
				dots:true,
				autoplay: true,	    
				autoplayTimeout: 200,
				margin:30,
				loop: true,
				// nav: "true",
				// navText: "[`
				// <i class='glyphicon glyphicon-chevron-left'></i>`, 
				// `<i class='glyphicon glyphicon-chevron-right'></i>`
				// ]"
		    smartSpeed:250,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1200:{
		            items:3
		        },
		        1600:{
		            items:4
		        }
		    }
		});


	

    /*-------------------------------------------------------------------------------
	  Filter Project Carousel 
	-------------------------------------------------------------------------------*/



	$('.js-filter-carousel li a').on('click', function() {
		$('.js-filter-carousel .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.project-carousel').fadeOut(300);
		$('.project-carousel').fadeIn(300);
		setTimeout(function(){
			$('.project-carousel .owl-item').hide();
			$(selector).closest('.project-carousel .owl-item').show();
		}, 300);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Projects Modal
	-------------------------------------------------------------------------------*/



	$('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          fixedContentPos: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
        });



	/*-------------------------------------------------------------------------------
	  Page Piling - Full Screen Sections 
	-------------------------------------------------------------------------------*/



    if ($('.pagepiling').length > 0){



		/* Page Piling Init */



      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 280,
		    menu: '.menu-pagepiling',
		    anchors: ['main', 'about', 'projects', 'partners', 'testimonials', 'contacts'],
		    afterLoad: function(anchorLink, index){
		    	if ($('.pp-scrollable:nth-child(' + (index) + ')').hasClass(('section-white'))){ 
		            $('.navbar').removeClass('navbar-white');
		            $('#pp-nav').removeClass('white');
		            $('.copy-bottom').removeClass('white');
		            $('.lang-bottom').removeClass('white');
		    	}
		    	else{
	            	$('.navbar').addClass('navbar-white');
	            	$('#pp-nav').addClass('white');
	            	$('.copy-bottom').addClass('white');
		            $('.lang-bottom').addClass('white');
	            }
	            
  			}
		});


		/* Hide Mobile Menu On Anchor Click*/



		
			$('.menu-pagepiling ul li a').on('click', function() { 
		   	   hideMenu();
		    });	
		




		/* Scroll Navbar Into Sections  */



		$('.pp-scrollable').on('scroll', function () {
			var scrollTop =$(this).scrollTop();
			if (scrollTop > 0 ) {
				$('.navbar-2').removeClass('navbar-white');
			}
			else{
				$('.navbar-2').addClass('navbar-white');
			}
		});



		/* Add Arrows On Navigation  */



		$('#pp-nav').prepend('<div class="pp-nav-up icon-chevron-up"></div>').append('<div class="pp-nav-down icon-chevron-down"></div>').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
	} 



    /*-------------------------------------------------------------------------------
	  Change Bacgkround On Project Section
	-------------------------------------------------------------------------------*/



    $('.project-box').on('mouseover',function(){
    	var index = $('.project-box').index(this);
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });



}})(jQuery);
