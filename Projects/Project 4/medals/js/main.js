$(document).ready(function() {
    // run function on initial page load
	menu();
});

function menu() {
	$('.mobile-nav').hover(function(){
		
		$('.menu-list').toggleClass('hide-nav');
	
	});

}