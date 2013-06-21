$(function(){
	
});

$(window).load(function(){
      $('#prodSlider').flexslider({
	        animation: "slide",
	        itemWidth: 160,
	        itemMargin: 0,
	        move: 1,
	        controlNav: false,
	        directionNav: true,
	        slideshowSpeed: 99999,
	        start: function(slider){
			$('body').removeClass('loading');
	        }
	});
});