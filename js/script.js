$(function(){

	// tab home
	var tabHomeLi   = $('.calc-tab-left__list li');
	var tabHomeLine = $('.calc-tab-left__list .line');

	var circle1 	= $('.circle1');
	var circle2 	= $('.circle2');
	var circle3 	= $('.circle3');
	var circle4 	= $('.circle4');
	var circle5 	= $('.circle5');
	var allCircle5  = $('.circle');

	var tab1 		= $('.calc-tab-left__1');
	var tab2 		= $('.calc-tab-left__2');
	var tab3 		= $('.calc-tab-left__3');
	var tab4		= $('.calc-tab-left__4');
	var tab5 		= $('.calc-tab-left__5');

	tabHomeLi.on('click', function(e){
		e.preventDefault();
		tabHomeLine.hide();
		tabHomeLi.removeClass('active');
		$(this).addClass('active').children('.line').show();
	});

	tab1.on('click', function(e){
		e.preventDefault();
		allCircle5.css({
			'backgroundImage' : ' url("images/circle-noact.png") '
		});
		circle1.css({
			'backgroundImage' : ' url("images/circle1.png") '
		});
	});
	tab2.on('click', function(e){
		e.preventDefault();
		allCircle5.css({
			'backgroundImage' : ' url("images/circle-noact.png") '
		});
		circle2.css({
			'backgroundImage' : ' url("images/circle1.png") '
		});
	});
	tab3.on('click', function(e){
		e.preventDefault();
		allCircle5.css({
			'backgroundImage' : ' url("images/circle-noact.png") '
		});
		circle3.css({
			'backgroundImage' : ' url("images/circle1.png") '
		});
	});
	tab4.on('click', function(e){
		e.preventDefault();
		allCircle5.css({
			'backgroundImage' : ' url("images/circle-noact.png") '
		});
		circle4.css({
			'backgroundImage' : ' url("images/circle1.png") '
		});
	});
	tab5.on('click', function(e){
		e.preventDefault();
		allCircle5.css({
			'backgroundImage' : ' url("images/circle-noact.png") '
		});
		circle5.css({
			'backgroundImage' : ' url("images/circle1.png") '
		});
	});



	// tab home end



	var whiteShadow = $('.white-shadow');
	var modalCall = $('.modal-call');
	var callForm = $('.callform');

	callForm.click(function(e){
		e.preventDefault();
		console.log('aaa');
		whiteShadow.fadeIn();
		modalCall.fadeIn();
	});

	whiteShadow.click(function(e){
		e.preventDefault();
		whiteShadow.fadeOut();
		modalCall.fadeOut();
	});



	// product tabs
	$(".product-tabwr .tab_item").not(":first").hide();
	$(".product-tabwr .tab").click(function() {
		$(".product-tabwr .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".product-tabwr .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	// product tabs end

	// masked input
	$(".myphone").mask("+7 (999) 999-9999");
	// masked input end

	// owl
	$('.proizvod').owlCarousel({
		loop:true,
		items:5,
		margin:10,
		nav:true,
		navText: [],
		responsive:{
			0:{
				items: 1,
				margin:0
			},
			600:{
			},
			1000:{
			}
		}
	});

	var recentlySlider = $('.recently-slider').owlCarousel({
		loop:true,
		items:4,
		margin:13,
		nav:true,
		navText: [],
		responsive:{
			0:{
				items: 1,
				margin:0
			},
			768:{
				items: 3,
				margin:10
			},
			960:{
				items: 4,
				margin:10
			},
			1000:{
			}
		}
	});

	$('.product-recently__prev').click(function() {
		recentlySlider.trigger('next.owl.carousel');
	});
	$('.product-recently__next').click(function() {
		recentlySlider.trigger('prev.owl.carousel', [300]);
	});

	$('.sliditems').owlCarousel({
		loop:true,
		items:4,
		margin:13,
		nav:true,
		navText: [],
		responsive:{
			0:{
				items: 1,
				margin:0
			},
			768:{
				items: 3,
				margin:10
			},
			960:{
				items: 4,
				margin:10
			},
			1000:{
			}
		}
	});
	// owl end

	// unslider
	$('.home_slider').unslider({
		animation: 'fade',
		autoplay: false,
		arrows: true
	});
	// unslider end


	$(".mobile_menu").click(function(){
		$(".home_menu").addClass("activ");
		$("body").addClass("noscroll");
	});
	
	$(".closeback").click(function(){
		$(".home_menu").removeClass("activ");
		$("body").removeClass("noscroll");
	});
	
	$(".popular_punkt").click(function(){
		$(".cpunkt").removeClass("focus");
		$(this).addClass("focus");
		$(".citem").fadeOut(200);
		$(".popular_items").fadeIn(200);
	});
	$(".news_punkt").click(function(){
		$(".cpunkt").removeClass("focus");
		$(this).addClass("focus");
		$(".citem").fadeOut(200);
		$(".news_items").fadeIn(200);
	});
	$(".share_punkt").click(function(){
		$(".cpunkt").removeClass("focus");
		$(this).addClass("focus");
		$(".citem").fadeOut(200);
		$(".share_items").fadeIn(200);
	});
	

	
})