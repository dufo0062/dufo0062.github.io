var slideIndex = 1;
showSlides(slideIndex);

function quotes_slider_init() {
	// When the arrows are clicked, the quotes will rotate
	$('.arrow').on('click', function(){
		var arrowId = this.id; 
		if (arrowId == 'prev-arrow') {
			n = -1
		} else {
			n = 1
		};
	
		plusSlides(n);
	});

	// When the dots beneath the slideshow are clicked, the
	// associated quote will be displayed.
	$('#dot-1').on('click', function(){
		currentSlide(1);
	});

	$('#dot-2').on('click', function(){
		currentSlide(2);
	});

	$('#dot-3').on('click', function(){
		currentSlide(3);
	});

}

// QUOTES SLIDESHOW FUNCTIONS
// Used to make the arrows respond to being clicked. 
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Used to make the arrows respond to being clicked. 
function currentSlide(n) {
	showSlides(slideIndex = n);
}

// Used to loop through the quotes and the dots, and make
// the appropriate dots and quotes "active", to enable display.
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";
	};
