let somestring='434354';
function sum(somestring) {
  let result = 0;
  let result1 = 0;
  for (i=0; i<3; i++) {
  	result = result+Number(somestring[i]);
  }
  for (i=3; i<6; i++) {
  	result1 = result1+Number(somestring[i]);
  }
  if (result===result1) {
  	console.log('Yes');
  }
  else {
  	console.log('No');
  } 
}
sum(somestring);