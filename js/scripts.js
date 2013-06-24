$(function(){

	// SlideOut products

	$('#navProducten').click(function(){

		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('#prodMenu').animate({
				marginTop:	'-60px'
			}, 250);			
		}else{
			$(this).addClass( 'active');
			$('#prodMenu').animate({
				marginTop:	'90px'
			}, 250);				
		}
		
	});
				
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
	        keyboard: 			true,
	        slideshowSpeed: 	99999,
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
      		controlNav: 		false,
	        directionNav: 		false,
	        keyboard:			true,
	        slideshowSpeed:	3000
      });
});