$(function(){
	$('.products__list').slick({
		slidesToShow: 3,
		prevArrow:'<button class="slider-btn slider-btn__left"><img src="images/arrow.svg" alt="prod-1"></button>',
		nextArrow:'<button class="slider-btn slider-btn__rigth"><img src="images/arrow.svg" alt="prod-1"></button>',
		responsive: [
		  {
			 breakpoint: 767,
			 settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			 }
		  },
		  {
			 breakpoint: 575,
			 settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }
		]
	});
	$('.insta__inner').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		responsive: [
		  {
			 breakpoint: 767,
			 settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			 }
		  },
		  {
			 breakpoint: 575,
			 settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			 }
		  }
		]
	});
	$('.offer__wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: false
	});
	$(window).scroll(function() {
		$('.meet__content').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("slideInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.shop__wrapper').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("slideInLeft");
			}
		});
	});
	$(".burger").click(function() {
		$('.burger__img').toggle(),
		$('.close').toggle('active'),
		$('.menu__mob').slideToggle(300, function(){
			if($(this).css('display') === "none"){
				$(this).removeAttr('style');
			}
		});
	});
});