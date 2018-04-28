var arr=[1,2,3,'строка',5,6];
function findElem() {
	for (var i=0; i<arr.length; i++) {
		if ((typeof arr[i])=='string') {
			console.log(arr[i]);
		}
	}
}
findElem();