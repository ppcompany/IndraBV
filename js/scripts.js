$(function(){

	// SlideOut products

	$('#navProducten').click(function(){

		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('#prodMenu').animate({
				top:	'-140px'
			}, 250);			
		}else{
			$(this).addClass( 'active');
			$('#prodMenu').animate({
				top:	'0'
			}, 250);				
		}
		
	});
				
});

$(window).load(function(){
      $('#prodSlider').flexslider({
	        animation: "slide",
	        itemWidth: 160,
	        itemMargin: 0,
	        move: 1,
	        controlNav: false,
	        directionNav: true,
	        prevText: "",
	        nextText: "",
	        keyboard: false,
	        slideshowSpeed: 99999,
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
});