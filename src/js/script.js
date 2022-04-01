$(document).ready(function(){
	$('.carousel__inner').slick({
		infinite: true,
		speed: 1000,
		autoplay: true,
  		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				 dots: true,
				 arrows: false
			  }
			}
		 ]
	});
 });