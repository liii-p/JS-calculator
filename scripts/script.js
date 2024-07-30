import { hasManySymbols, validate } from "./validation.js";
import { evaluate } from "./evaluate.js";
import { changeElementText } from "./display-dom.js";

// Variables to store calculation values
let storedVal = 0;
let currentOp = "";
let secondNum;
let startNextInput = false;

// Memory values
let memRecall = 0;
let mrcCount = 0;

const memAddBtn = document.querySelector("#memAdd");
const memMinusBtn = document.querySelector("#memMinus");
const memRecallBtn = document.querySelector("#memRecall");
const memClearBtn = document.querySelector("#memClear");
const memStoreBtn = document.querySelector("#memStore");

// Variables for target elements
const display = document.querySelector("#calc-display");
const allClearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
const numberBtns = document.querySelectorAll(".num");
const operationsBtns = document.querySelectorAll(".special");
const equalsBtn = document.querySelector("#equal");
const pctBtn = document.querySelector("#percent");
const pmBtn = document.querySelector("#pm");
const decimalBtn = document.querySelector("#decimal");
const zeroBtn = document.querySelector("#zero");
const inverseBtn = document.querySelector("#inverse");

// UPDATE DISPLAY

export const delEntry = () => {
  display.innerText = display.innerText.slice(0, -1);
};

// Changes display according to number passed
export const numClick = (num) => {
  // We need to grab the value for a num button
  // we need to update the current number displayed

  display.innerText += num.innerText;
  console.log(num.innerText);
};

// Resets text content
export const resetDisplay = () => {
  display.innerText = "";
  storedVal = "";
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

zeroBtn.addEventListener("click", () => {
  if (!display.innerText[0].includes("0")) {
    display.innerText = "0";
  }
});

decimalBtn.addEventListener("click", () => {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});

equalsBtn.addEventListener("click", () => {
  secondNum = display.innerText.split(currentOp)[1];
  display.innerText = evaluate(storedVal, secondNum, currentOp);
  currentOp = "";
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

inverseBtn.addEventListener("click", () => {
  console.log(1 / display.innerText);
  changeElementText(1 / display.innerText, display);
});


// MEMORY

// M+ - Add displayed number to memory
memAddBtn.addEventListener("click", () => {
  memRecall += Number(display.innerText);

  console.log(
    `${display.innerText} added to memory. Current value in memory: ${memRecall}.`
  );
});

memMinusBtn.addEventListener("click", () => {
  memRecall -= Number(display.innerText);

  console.log(
    `${display.innerText} removed from memory. Current value in memory: ${memRecall}.`
  );
});

memStoreBtn.addEventListener("click", () => {
  if (window.confirm(
    "This action will override the current stored memory. Are you sure you wish to continue?"
  )) {
    memRecall = Number(display.innerText);
    console.log(
      `Current memory storage overrided. ${display.innerText} added to memory.`
    );
  }
});

memRecallBtn.addEventListener("click", () => {
  display.innerText += memRecall;

  console.log("Memory recalled.");
});

memClearBtn.addEventListener("click", () => {
  mrcCount = 0;

  console.log("Memory cleared.");
});
