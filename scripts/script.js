import { hasManySymbols, validate } from "./validation.js";
import { evaluate } from "./evaluate.js";

// Variables to store calculation values
let storedVal = 0;
let currentOp = "";
let startNextInput = false;
let memVal = 0;
let secondNum;

// Variables for target elements
const display = document.querySelector("#calc-display");
const allClearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
const numberBtns = document.querySelectorAll(".num");
const operationsBtns = document.querySelectorAll(".special");
const equalsBtn = document.querySelector("#equal");
const pctBtn = document.querySelector("#percent");
const pmBtn = document.querySelector("#pm");
const decimal = document.querySelector("#decimal");
const zero = document.querySelector("#zero");

// Changes text content of an element
const changeElementText = (text, element) => {
  element.innerText = text;
};

// UPDATE DISPLAY

// Resets text content
const resetDisplay = () => {
  display.innerText = "";
  storedVal = "";
};

const delEntry = () => {
  display.innerText = display.innerText.slice(0, -1);
};

// Changes display according to number passed
const numClick = (num) => {
  // We need to grab the value for a num button
  // we need to update the current number displayed

  display.innerText += num.innerText;
  console.log(num.innerText);
};

// Updates display when an operation is evaluated
const equals = () => {
  // Store currently displayed value
  const currentVal = display.innerText;

  // Evaluate the math operation using storedVal, currentVal, and current operator
  const result = evaluate(storedVal, currentVal, currentOp);
  console.log(currentVal);

  // Change the display to the new value
  changeElementText(result, display);

  // Store the new value and allow the next input
  storedVal = result;
  startNextInput = true;
  console.log("equals is called");
  console.log(result);
};

// CLEAR BUTTONS

// Event Listeners
// C - resets display and clears memory
allClearBtn.addEventListener("click", () => {
  resetDisplay();
});

// CE - clear last entry
delBtn.addEventListener("click", () => {
  delEntry();
});

// Number Buttons - takes value of button clicked and changes display
numberBtns.forEach((numBtn) => {
  // const event =
  numBtn.addEventListener("click", (event) => {
    numClick(event.target);
  });
  // return event;
});

// OPERATOR BUTTONS
// always evaluates previous calculation before storing operator clicked
// and allowing next number to be input.
operationsBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentOp) {
      secondNum = display.innerText.split(currentOp)[1];
      display.innerText = evaluate(storedVal, secondNum, currentOp);
    }

    storedVal = display.innerText;

    // Register the new operation
    currentOp = operator.innerText;
    // Adds the operator on the screen
    display.innerText += currentOp;
    console.log(display.innerText);
  });
});

zero.addEventListener("click", () => {
  if (display.innerText[0].includes("0")) {
  }
});

decimal.addEventListener("click", () => {
  if (display.innerText.includes(".")) {
  }

  display.innerText += ".";
});

equalsBtn.addEventListener("click", () => {
  secondNum = display.innerText.split(currentOp)[1];
  display.innerText = evaluate(storedVal, secondNum, currentOp);
  currentOp = "";
  // equals();
  // currentOp = "";
});

// SPECIAL BUTTONS
// % Divides displayed number by 100
pctBtn.addEventListener("click", () => {
  changeElementText(display.innerText / 100, display);
});

// +/- negates displayed number
pmBtn.addEventListener("click", () => {
  changeElementText(display.innerText * -1, display);
});

// MEMORY

// MS - Add displayed number to memory
