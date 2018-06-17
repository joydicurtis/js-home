var date = new Date(new Date().getTime() + 10 * 1000);
document.cookie = "name=myCookie; path=/; expires=" + date.toUTCString();
var banner = document.querySelector('.banner');
var timer = document.querySelector('.timer');
var timernum = 10;
var timerId = setInterval(function() {
	if ((getCookie('name') != undefined)) {
	   banner.style.display = 'block';
   }
   else {
   	banner.style.display = 'none';
   }
  }, 2000);
 var timerAnother = setInterval(function() {
 		if (timernum>0) {
			timernum = timernum-1;
			timer.innerHTML = 'Remain: ' + timernum;
    }
  }, 1000);
  function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
