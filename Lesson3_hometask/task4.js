let somestring='4bacde';
function yesOrNo(somestring) {
  var result = somestring.match( /[1-3]/ );
  if ((result!=null)&&(result.index == 0)) {
  	console.log('Yes');
  }
  else {
  	console.log('No');
  }
}
yesOrNo(somestring);