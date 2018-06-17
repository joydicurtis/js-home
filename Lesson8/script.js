var item = document.getElementById('item1');
var item1 = document.getElementById('item2');
var item2 = document.getElementById('item3');
var target = document.getElementById('target');
item.addEventListener("mousedown", function() {
    document.onmousemove = function() {
        moveItem(item);
    }
});
item1.addEventListener("mousedown", function() {
    document.onmousemove = function() {
        moveItem(item1);
    }
});
item2.addEventListener("mousedown", function() {
    document.onmousemove = function() {
        moveItem(item2);
    }
});
item.addEventListener("mouseup", function() {
    stopMove(item);
});
item1.addEventListener("mouseup", function() {
    stopMove(item1);
});
item2.addEventListener("mouseup", function() {
    stopMove(item2);
});
function moveItem(item) {
    x = event.pageX - item.offsetWidth/2;
    y = event.pageY - item.offsetHeight/2;
    item.style.top = y;
    item.style.left = x;
    posTargetY = target.offsetTop;
    posTargetX = target.offsetLeft;
}

function stopMove(item) {
    document.onmousemove = null;
    item.onmouseup = null;
    if ((y>=posTargetY)&&((y+item.offsetHeight)<=(posTargetY+target.offsetHeight))&&(x>=posTargetX)&&((x+item.offsetWidth)<=(posTargetX+target.offsetWidth))) {
        item.classList.add('insidehole');
        setTimeout(function() {
            item.remove();
        }, 200); 
    }
    if (!((y>=posTargetY)&&((y+item.offsetHeight)<=(posTargetY+target.offsetHeight))&&(x>=posTargetX)&&((x+item.offsetWidth)<=(posTargetX+target.offsetWidth)))) {
        item.style.top = 0;
        item.style.left = 0;
    }
}