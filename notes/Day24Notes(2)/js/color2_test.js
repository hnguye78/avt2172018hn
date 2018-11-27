$(document).ready(function() {
    // run function on initial page load
	imgGuess();
});


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'imgs/baby_back.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'imgs/kobe.jpg';

/* ... more images ... */

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}