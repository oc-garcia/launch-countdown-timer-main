let daysField = document.getElementById("days");
let hoursField = document.getElementById("hours");
let minutesField = document.getElementById("minutes");
let secondsField = document.getElementById("seconds");

//var countDownDate = new Date("Nov 18, 2023 13:20:00").getTime();
var countDownDate = new Date("Nov 10, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  daysField.innerHTML = days;
  hoursField.innerHTML = hours;
  minutesField.innerHTML = minutes;
  secondsField.innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("expired").innerHTML = "HAPPY NEW YEAR!";
  }
}, 1000);

let customDate = document.getElementById("changeDate").value;

function changeDate(customDate) {
  console.log(customDate);
}
