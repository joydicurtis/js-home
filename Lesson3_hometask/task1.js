let day;
function selfRandom(min, max) {
  day = Math.floor(Math.random() * (max - min + 1)) + min
  return day;
}
function getDecade(day) {
  if ((day>=1)&&(day<10)) {
  	console.log('Day '+day+' belongs to first decade');
  }
  if ((day>=10)&&(day<20)) {
  	console.log('Day '+day+' belongs to second decade');
  }
  if ((day>=20)&&(day<31)) {
  	console.log('Day '+day+' belongs to third decade');
  }
}
selfRandom(1, 31);
getDecade(day);