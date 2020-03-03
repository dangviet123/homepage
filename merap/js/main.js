(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	new WOW().init();

	$('.btn-showmenu').click(function () {
		$('.header-bottom').toggleClass('open');
		$('.overlay').fadeIn(300);
	});

	$('.btn-closemenu').click(function () {
		$('.header-bottom').toggleClass('open');
		$('.overlay').fadeOut(300);
	});
	$('.btn-showsub').click(function () {
		$(this).siblings('.sub').slideToggle(300);
		$(this).toggleClass('active');
	});
	$('.searchtoggle').click(function () {
		$('.searchwrap').slideToggle(300);
	});

	$('.overlay').click(function () {
		$('.header-bottom').removeClass('open');
		$('.overlay').fadeOut(300);
		$('.search').removeClass('open');
		$('.form-popup').fadeOut(300);
	});

	$('.btn-scrolltop').click(function () {
		$('html, body').animate({ scrollTop: 0 }, "fast");
	});

	$(window).scroll(function () {
		var width = $(document).width();
		var scroll = $(window).scrollTop();
		if (width >= 1200) {
			if (scroll > 200) {
				$('header').addClass('scroll-little');
			}
			if (scroll > 500) {
				$('header').addClass('scroll-alot');
			}
		}

		if (scroll > 500) {
			$('.btn-scrolltop').addClass('appear');
		} else {
			$('.btn-scrolltop').removeClass('appear');
		}
	});

	// Slide
	// $('.about-slide').slick({
	// 	asNavFor: '.about-nav',
	// 	arrows: false
	// })
	// $('.about-nav').slick({
	// 	asNavFor: '.about-slide',
	// 	slidesToShow: 8,
	// 	slidesToScroll: 1,
	// 	focusOnSelect: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 991,
	// 			settings: {
	// 				slidesToShow: 5
	// 		}
	// 		},
	// 		{
	// 			breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 4
	// 		}
	// 		},
	// 		{
	// 			breakpoint: 543,
	// 			settings: {
	// 				slidesToShow: 3
	// 		}
	// 		}
	// 	]
	// })

	$('.news-detail-slide').slick({
		asNavFor: '.news-detail-nav',
		infinite: false
	});
	$('.news-detail-nav').slick({
		asNavFor: '.news-detail-slide',
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		infinite: false,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 543,
			settings: {
				slidesToShow: 3
			}
		}]
	});

	$('.event-hot-slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 997,
			settings: {
				slidesToShow: 2

			}
		}, {
			breakpoint: 997,
			settings: {
				slidesToShow: 1
			}
		}]

	});

	$('.banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

	$('.breadcrumb-slide ').slick();
});

},{}]},{},[1])


//# sourceMappingURL=main.js.map
