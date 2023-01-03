let daysField = document.getElementById("days");
let hoursField = document.getElementById("hours");
let minutesField = document.getElementById("minutes");
let secondsField = document.getElementById("seconds");

var countDownDate = new Date("Nov 18, 2023 13:20:00").getTime();

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
    document.getElementById("expired").innerHTML = "LAUNCHED!";
  }
}, 1000);

let submitChanges = document.getElementById("submitChanges");
//submitChanges.addEventListener("submit", changeDate);

function changeDate() {
  let customDay = document.getElementById("changeDay");
  let customMonth = document.getElementById("changeMonth");
  let customYear = document.getElementById("changeYear");

  let dayStatus = false;
  let monthStatus = false;
  let yearStatus = false;
  let customMonthString = "";

  if (customDay.value == "" || customDay.value <= 0 || customDay.value >= 32) {
    dayStatus = false;
  } else if (customDay.value > 0 && customDay.value < 32) {
    dayStatus = true;
  }

  if (customMonth.value == 1) {
    customMonthString = "Jan";
    monthStatus = true;
  } else if (customMonth.value == 2) {
    customMonthString = "Feb";
    monthStatus = true;
  } else if (customMonth.value == 3) {
    customMonthString = "Mar";
    monthStatus = true;
  } else if (customMonth.value == 4) {
    customMonthString = "Apr";
    monthStatus = true;
  } else if (customMonth.value == 5) {
    customMonthString = "May";
    monthStatus = true;
  } else if (customMonth.value == 6) {
    customMonthString = "Jun";
    monthStatus = true;
  } else if (customMonth.value == 7) {
    customMonthString = "Jul";
    monthStatus = true;
  } else if (customMonth.value == 8) {
    customMonthString = "Aug";
    monthStatus = true;
  } else if (customMonth.value == 9) {
    customMonthString = "Set";
    monthStatus = true;
  } else if (customMonth.value == 10) {
    customMonthString = "Oct";
    monthStatus = true;
  } else if (customMonth.value == 11) {
    customMonthString = "Nov";
    monthStatus = true;
  } else if (customMonth.value == 12) {
    customMonthString = "Dec";
    monthStatus = true;
  } else if (customMonth.value >= 13 || customMonth.value <= 0 || customMonth.value == "") {
    monthStatus = false;
  }

  if (customYear.value == "" || customYear.value < 2023) {
    yearStatus = false;
  } else if (customYear.value > 2022) {
    yearStatus = true;
  }

  if (dayStatus == false) {
    alert("Invalid day");
  } else if (monthStatus == false) {
    alert("Invalid month");
  } else if (yearStatus == false) {
    alert("Invalid year");
  }

  if (dayStatus == true && monthStatus == true && yearStatus == true) {
    countDownDate = new Date(`${customMonthString} ${customDay.value}, ${customYear.value} 00:00:00`).getTime();
  }
}
