var item = document.querySelector('.square');
var topPos = item.offsetTop;
var fps = 24;
znak = 'plus';
function myFunc() {
    myVar = setInterval(function() {
        if (topPos<=0) {
            znak = 'plus';
        }
        if (topPos>=screen.availHeight) {
            znak = 'minus';
        }
        if (znak=='plus') {
            topPos = topPos+1;
        }
        if (znak=='minus') {
            topPos = topPos-1; 
        }
        item.style.top = topPos;
        console.log(topPos);
    }, 1000/fps);
}
myFunc();
item.addEventListener("click", function() {alert('Thanks!')});