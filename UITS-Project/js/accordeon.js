(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
  	let accordeon = document.querySelectorAll('.accordeon-header																																			');
  	for (let i=0; i<accordeon.length; i++) {
  		accordeon[i].addEventListener('click', function(e) {
  			let item = accordeon[i].parentElement.querySelector('.accordeon-body');
  			let bodies = document.querySelectorAll('.accordeon-body');
  			for (let j=0; j<bodies.length; j++) {
	  			bodies[j].classList.remove('visible');
	  			console.log(bodies[j]);
	  		}
  			item.classList.add('visible');
  		})
  	}
  });
}());
