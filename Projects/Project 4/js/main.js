$(document).ready(function() {
    // run function on initial page load
	demoFunction();
	// vPosH1();

	// run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });

    // run function on scroll
    $(window).scroll(function() {
    	$('.jqClick').addClass('redC');
    });
});

function demoFunction() {
    $('.jqClick').click(function() {
        $('.header').toggleClass('rotate');
       
    })
    $('.jqHover').hover(function() {
        $("header2").toggleClass('bigger');
    })
}
