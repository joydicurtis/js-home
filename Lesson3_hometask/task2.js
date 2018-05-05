let month;
function selfRandom(min, max) {
  month = Math.floor(Math.random() * (max - min + 1)) + min
  return month;
}
function getSeason(month) {
  if (((month>=1)&&(month<=2))||(month==12)) {
  	console.log('There is winter!');
  }
  if ((month>=3)&&(month<=5)) {
  	console.log('There is spring!');
  }
  if ((month>=6)&&(month<=8)) {
  	console.log('There is summer!');
  }
  if ((month>=9)&&(month<=11)) {
  	console.log('There is fall!');
  }
}
selfRandom(1, 12);
getSeason(month);