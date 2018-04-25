var activeThumbIndex = 0;

function slider_init() {

	$('.img-slide-thumb').on('click', function(){

		var thisThum = this;
		changeSlide(thisThum);

	});

	autoSlider();
}

// SLIDESHOW FUNCTIONS
// Used to manually change slides, by selecting a thumbnail. 
function changeSlide(currentThumb) {

	var targetSlide = $(currentThumb).attr('data-target');
	var slideImages = document.querySelectorAll('.img-slide');
	var imageThumbs = document.getElementsByClassName('img-slide-thumb');

	for(var j = 0; j < imageThumbs.length; j++ ) {

		imageThumbs[j].classList.remove('img-slide-thumb-active');

		if(imageThumbs[j] == currentThumb) {
			activeThumbIndex = j;
		}
	}


	
	$('.img-slide').removeClass('active');
	$('.img-slide').fadeOut(800, function() {	
	});




	$('#'+targetSlide).fadeIn(1200, function(){
		$(this).addClass('active');
	});

	currentThumb.classList.add('img-slide-thumb-active');

}

// Used to automatically change slides. 
function autoSlider() {

	var slideThumbs = document.querySelectorAll('.img-slide-thumb');
	changeSlide(slideThumbs[activeThumbIndex]);
	activeThumbIndex++;
	if(activeThumbIndex == slideThumbs.length) {activeThumbIndex = 0};

	setTimeout(autoSlider, 5000);
}