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

function startTime() {
  var time = new Date();
  var clock = time.toLocaleTimeString("en-US", { hour12: true });

  var h = time.getHours();
  var m = time.getMinutes();

  document.getElementById("uspsclock").innerHTML = convertToPostalTime(h, m);
  document.getElementById("normalclock").innerHTML = clock;

  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();

function convertToPostalTime(hour, minute) {
  var h = formatNumber(hour);

  var m = Math.floor((minute / 60) * 100);
  m = formatNumber(m);

  return h + m;
}
function formatNumber(n) {
  if (n < 10) {
    return "0" + n;
  }
  return "" + n;
}

function convertToPostalButton() {
  var input = document.getElementById("timeInput");
  var output = convertToPostalTime(
    parseInt(input.value.slice(0, 2)),
    parseInt(input.value.slice(3, 5))
  );
  document.getElementById("convertToPostal").innerHTML = output;
}

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
