$(function(){

	slideOutProducts();
	uponResize();
	resizeOnLoad();

	function uponResize(){
		$(window).resize(function(){
			var windowWidth = $(window).width();

			if(windowWidth < 1080){
				$('.block img.stamp').stop().animate({
					width:	"70px"
				},100);
			} else {
				$('.block img.stamp').stop().animate({
					width:	"130px"
				},100);
			}
		});
	}

	function resizeOnLoad(){
		var windowWidth = $(window).width();

		if(windowWidth < 1080){
			$('.block img.stamp').stop().animate({
				width:	"70px"
			},100);
		} else {
			$('.block img.stamp').stop().animate({
				width:	"130px"
			},100);
		}
	}

	function slideOutProducts(){
		$('#navProducten').click(function(e){
			e.preventDefault();
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#prodMenu').delay(25).animate({
					marginTop:	'-60px'
				}, 250);
				$('#marginTop').animate({
					marginTop:	'0'
				}, 250);			
			}else{
				$(this).addClass( 'active');
				$('#prodMenu').animate({
					marginTop:	'150px'
				}, 250);
				$('#marginTop').delay(25).animate({
					marginTop:	'150px'
				}, 250);				
			}
			
		});
	}


				
});

$(window).load(function(){
      $('#prodSlider').flexslider({
	        animation:			"slide",
	        itemWidth: 			160,
	        itemMargin: 		0,
	        move: 				1,
	        controlNav: 		false,
	        directionNav: 		true,
	        prevText: 			"",
	        nextText:			"",
	        keyboard:			false,
	        multipleKeyboard: 	true, 
	        slideshowSpeed: 	3000,
	        start: function(slider){
			$('body').removeClass('loading');
			$('#prodSlider ul.slides li:first-child').addClass( 'border');
	        },
	        before: function(slider){
	        	$('#prodSlider ul.slides li').removeClass('border');
	        },
	        after: function(slider){
	        	var currentSlide = slider.currentSlide;
	        	$('#prodSlider ul.slides li:eq('+currentSlide+')').addClass('border');
	        }
	});
      $('#slider').flexslider({
      		animation:			"slide",
      		controlNav: 		true,
	        directionNav: 		false,
	        keyboard:			true,
	        multipleKeyboard: 	true, 
	        slideshowSpeed:	4500
      });
});