window.onload = init;

function init() {

	$('.ham').on('click', function(){
		$('.mobile-nav').slideToggle(500);
	});


	if($('.image-gallery').length>0){
		image_slider_init();
	}

	if($('.slideshow-container').length>0){
		quotes_slider_init();
	}

	if ($('#message-form').length>0) {
		validation_init();
	}

	$('.overlay-container').delay(1000).fadeOut(500);
}