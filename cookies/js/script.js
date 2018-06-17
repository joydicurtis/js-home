(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
    var dropdownItem;
    dropdownItem = document.querySelector("#dropdown-list-weather");
    // console.log(dropdownItem);
    dropdownItem.addEventListener("click", function(event) {
    	var dropdownList = document.querySelector('#dropdown-list-weather');
    	// console.log(dropdownList)
    	// dropdownList.style.display = "block";
    })
    dropdownItem.addEventListener('click', function(event) {
    	// console.log(event.target);
    	if ((event.target.id)&&(event.target.id!='dropdown-list-weather')) {
	    	var dropdownList = document.querySelector('#dropdown-list-weather ul');
	    	// console.log(dropdownList)
    		// dropdownList.style.display = "none";
    	}
    })
  });
}());

