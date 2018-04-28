var arr=[3, 6546, 45, 35, 244, 4, 66, 4];
var tempElem;
function shiftElem() {
	for (var j=0; i<arr.length; i++) {
		for (var i=0; i<arr.length; i++) {
			if (arr[i]>arr[i+1]) {
				tempElem = arr[i];
				arr[i] = arr[i+1];
				arr [i+1] = tempElem; 
			}
		}
		console.log(arr);
	}
}