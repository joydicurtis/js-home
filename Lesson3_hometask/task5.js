let somestring='43434bacde';
function sum(somestring) {
  let result = 0;
  for (i=0; i<3; i++) {
  	result = result+Number(somestring[i]);
  }
  console.log(result);
}
sum(somestring);