var arr=[3, 6546, 45, 35, 244, 4, 66, 4];
var item=244;
var result;
function findItem(item) {
	for (i=0; i<arr.length; i++) {
		if (arr[i]===item) {
			result=i;
			return result;
		}
		else {
			result = 'item not found';
		}
	}
	console.log(result);
}
findItem(244);