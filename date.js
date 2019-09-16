var day;
var sam = new Date()
switch (sam.getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
//console.log("Today is " + sam);

export default day;