$(document).ready(function() {
    // run function on initial page load
	cartoonGuess();
});

function cartoonGuess() {
	var cartoonArray = ["Nemo", "Dory", "Buzz Lightyear", "Woody", "Wall-e", "eva", "mike", "sullivan", "doris", "dash", "elastic girl",];
	var imageArray = ["imgs/nemo.jpg", "imgs/dory.jpg", "imgs/buzzlight.jpeg", "imgs/woody.jpeg","imgs/wall_e.jpg","imgs/eva.png","imgs/mike_w.jpg","imgs/Sulley-right.png","imgs/doris.jpg","imgs/dash.jpg","imgs/elastigirl.jpg",];
	var cartoon = Math.floor(Math.random() * cartoonArray.length);
	var answerlower = cartoonArray[cartoon].toLowerCase();
	var answerlower = cartoonArray[cartoon].toUpperCase();
	var answer = cartoonArray[cartoon];
	console.log(answer);
	console.log(answerlower);
	console.log(answerupper);
	$('img').attr('src', imageArray[index]);
	$('#submit').click(function() {
		var guess = $('input').val();
		console.log(guess);
		if (guess == answer || guess == answerlower  || guess == answerupper) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}