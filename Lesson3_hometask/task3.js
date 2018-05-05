let somestring='abacde';
function yesOrNo(somestring) {
  var result = somestring.match( /a/i );
  if (result.index == 0) {
	  console.log('Yes');
  }
  else {
  	console.log('No');
  }
}
yesOrNo(somestring);