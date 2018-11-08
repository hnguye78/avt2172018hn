$(document).ready(function) {
	demofunction();
	vPostH1();
}





$(window).resize(function)(){
	vPostH1();
}




$(window).scroll(function)() {
	});

});




function demofunction() {
	$('.jqClick').click(function)
		$('.header').toggleclass('bigger');
})
	$$('.jqClick').click(function)
		$('.numberFive').toggleclass('redBG');
})
}

function vPostH1() {
	var h1H = $('.header').outerHeight();
	var wH = $(window).height()
	var tP = $(wH - h1H)/2;
	$('header').css('paddingtop'), tP;
	console.log(h1H);
	console.log(wH);
	console.log(tP);
}