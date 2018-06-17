(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
  	var i = 0;
  	var imgUrls = [
  		"images/slider/1.jpg",
  		"images/slider/2.jpg",
  		"images/slider/3.jpg",
  		"images/slider/4.jpg",
  	]
  	var sliderImage = document.querySelector('.slider img');
  	var prevBtn = document.querySelector('.slider-btn_prev');
  	var nextBtn = document.querySelector('.slider-btn_next');
  	sliderImage.src=imgUrls[0];
  	prevBtn.addEventListener('click', function(event) {
  		sliderImage.style.opacity = '0';
  		if (i===0) {
  			i = imgUrls.length - 1;
  		}
  		else {
  			i = i-1;
  		}
  		sliderImage.src=imgUrls[i];
  		sliderImage.style.opacity = '1';
  	});
  	nextBtn.addEventListener('click', function(event) {
  		sliderImage.style.opacity = '0';
  		if (i===(imgUrls.length - 1)) {
  			i = 0;
  		}
  		else {
  			i = i+1;
  		}
  		sliderImage.src=imgUrls[i];
  		sliderImage.style.opacity = '1';
  	});
  	var timerId = setInterval(function() {
  		sliderImage.style.opacity = '0';
		if (i===(imgUrls.length - 1)) {
  			i = 0;
  		}
  		else {
  			i = i+1;
  		}
  		sliderImage.src=imgUrls[i];
  		sliderImage.style.opacity = '1';
	}, 6000);
  	var dots = document.querySelectorAll('.dots a');
  	for (i=0; i<dots.length; i++) {
	  	dots[i].addEventListener('click', function(event) {
  			console.log(event);
  		});
  	}
  });
}());