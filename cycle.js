var multipli5 = "";
var multipli7 = "";
var altro = "";
for (var num = 0; num < 100; num++) {

  if (num % 5 == 0) {
    multipli5+=num;
  }
  if (num % 7 == 0) {
    multipli7+= num;
  }
  if (num % 5 != 0 && num % 7 != 0) {
    altro+=num;
  }
}

  document.getElementById("multipli-5").innerHTML+=multipli5;
  document.getElementById("multipli-7").innerHTML+=multipli7;
  document.getElementById("altro").innerHTML+=altro;
