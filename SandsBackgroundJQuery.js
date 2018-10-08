$(window).scroll(function () {
	if ($(window).scrollTop() > 100) {
		$('.elements-container').css('top', $(window).scrollTop());
	}
}
);