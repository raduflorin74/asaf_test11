(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});

	//   magnific popup video
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});


	$('.gallery-wrap').each(function () {
		$(this).find('.gallery-popup').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});


	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
		var oTop;
		if ($('.counter-stat').length !== 0) {
			oTop = $('.counter-stat').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.counter-stat').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});
	

  // article reading time
  $('article').each(function () {

    let _this = $(this);

    _this.readingTime({
      readingTimeTarget: _this.find('.eta'),
      remotePath: _this.attr('data-file'),
      remoteTarget: _this.attr('data-target')
    });
  });

	//  Search Form Open
	$('#searchOpen').on('click', function () {
	  $('.search-wrapper').addClass('open');
	  // $('#search-query').select();
	  // $('#search-query').focus();
   //    $('#search-query').setSelectionRange($('#search-query').value.length,$('#search-query').value.length,"forward");

	});
	$('#searchClose').on('click', function () {
	  $('.search-wrapper').removeClass('open');
	});

	// featured post slider
	$('.featured-post-slider').slick({
	  infinite: true,
	  vertical: true,
	  verticalSwiping: true,
	  arrows: false,
	  dots: true,
	  responsive: [{
	    breakpoint: 600,
	    settings: {
	      vertical: false,
	      verticalSwiping: false,
	    }
	  }]
	});



})(jQuery);