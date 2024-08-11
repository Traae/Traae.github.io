/* USPS Time Tool

I'm still new to javascript and how it interacts with html.
This code has been copied and adapted from:
https://github.com/jamezmca/calc

*/

// UI Code

// Clock
// const timeDisplay = document.getElementById("clockValue");

// function updateClockUI() {
//   const timeDisplay = ;
//   displayInput.innerText = timeDisplay.trim() ? timeDisplay : "error";
// }
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var time = new Date();
  var clock = time.toLocaleTimeString("en-US", { hour12: true });

  var h = time.getHours();
  if (h < 10) {
    h = "0" + h;
  }
  var m = Math.floor((time.getMinutes() / 60) * 100);

  // add a zero in front of numbers<10

  document.getElementById("uspsclock").innerHTML = h + "" + m;
  document.getElementById("normalclock").innerHTML = clock;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();

function convertToPostalTime() {}

/*
// Date code
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);

const time = new Date();
var hour = time.getHours();
var minute = time.getMinutes();


// timed refresh code
function timedRefresh(timeoutPeriod) {
  var timer = setInterval(function () {
    if (timeoutPeriod > 0) {
      timeoutPeriod -= 1;
      document.body.innerHTML = timeoutPeriod + ".." + "<br />";
      // or
      document.getElementById("countdown").innerHTML =
        timeoutPeriod + ".." + "<br />";
    } else {
      clearInterval(timer);
      window.location.href = window.location.href;
    }
  }, 1000);
}
timedRefresh(10);

*/

/*
const displayInput = document.getElementById("inputValue");

//Variables
const operators = ["-", "+", "%", "*", "/"];
let operations = [];
let currValue = "";

//Functions & Operations
function handleInteraction(value) {
  if (operators.includes(value)) {
    console.log("Clicked an operator: ", value);
    handleOperatorInput(value);
  } else {
    console.log("Clicked a numeric value: ", value);
    handleNumericInput(value);
  }
  updateUI();
}

function handleNumericInput(value) {
  if (value === "." && currValue.includes(".")) {
    return;
  }
  currValue += value;
}

function handleOperatorInput(value) {
  if (!currValue) {
    return;
  }
  if (value === "%") {
  }
  operations.push(currValue);
  operations.push(value);
  currValue = "";
}

function handleEvaluate() {
  if (operations.length === 0) {
    return;
  }
  let finalAmount = operations[0];
  let prevOperator = null;
  if (!currValue) {
    operations.pop();
  } else {
    operations.push(currValue);
    currValue = "";
  }
  for (let i = 1; i < operations.length; i++) {
    if (i % 2 === 0) {
      //Numeric value
      finalAmount = eval(`${finalAmount} ${prevOperator} ${operations[i]}`);
    } else {
      //Operator value
      prevOperator = operations[i];
    }
  }
  operations = [];
  currValue = finalAmount.toFixed(2);
  updateUI();
}

function handleReset() {
  currValue = "";
  operations = [];
  updateUI();
}

function updateUI() {
  const displayString = operations.join(" ") + " " + currValue;
  displayInput.innerText = displayString.trim() ? displayString : "0";
}

*/
