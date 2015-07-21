$(document).ready(function ($) {
	var $header = $('header');
	var $button = $header.find('.mobile_menu_icon');

	$button.click(function(){
		$header.toggleClass('open');
	});
});

$(window).scroll(function() {
	var value = $(this).scrollTop();
	if ( value > 80 )
		$("header").addClass("scroll");
	else
		$("header").removeClass("scroll");
});
