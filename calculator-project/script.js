console.log("Hello World");

// Changes text content of an element
const changeElementText = (text, element) => {
    element.textContent = text;
};

// Evaluate function
const evaluate = (stored, current, operator) => {
    let result;

    switch (operator) {
        case "+":
            result = Number(stored) + Number(current);
            break;
        case "-":
            result = Number(stored) - Number(current);
            break;
        case "/":
            result = Number(stored) / Number(current);
            break;
        case "%":
            result = Number(stored) % Number(current);
            break;
        case "*":
            result = Number(stored) * Number(current);
            break;
        default:
            result = current;
    }
    return result;
};

// Variables to store calculation values
let storedVal = 0;
let currentOp = "=";
let startNextInput = false;

// Variables for target elements
const display = document.querySelector("#calc-display");
const allClearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
const numberBtns = document.querySelectorAll(".calc__button");
const operationsBtns = document.querySelectorAll(".special");
const equalsBtn = document.querySelector("#equal");
const pctBtn = document.getElementById("percent");
const pmBtn = document.getElementById("pm");

// Resets text content of element to 0
const resetDisplay = () => {
    changeElementText(0, display);
    storedVal = 0;
};

// Changes display according to number passed
const numClick = (num) => {
    if (startNextInput === true || display.textContent === "3RR0R") {
        // If a new number should be started
        if (num === ".") {
            // Change to 0. if . is clicked
            changeElementText("0.", display);
        } else {
            // Else change to the new number
            changeElementText(num, display);
        }
        startNextInput = false; // Reset startNextInput to false
    } else if (display.textContent === "0") {
        // If current display is zero
        if (num === ".") {
            // Change to 0. if . is clicked
            changeElementText("0.", display);
        } else {
            // Else change to new number
            changeElementText(num, display);
        }
    } else if (num === ".") {
        // If . is clicked and display is not 0 and not starting new number
        // Concatenate '.' to displayed only if there is no . already
        if (!display.textContent.includes(".")) {
            changeElementText(display.textContent + num, display);
        } // Else ignore
    } else if (display.textContent.length > 9) {
        // If displayed number is 10+ characters
        changeElementText("3RR0R", display);
    } else {
        // All other cases - concatenate new number to displayed
        changeElementText(display.textContent + num, display);
    }
};

// Updates display when an operation is evaluated
const equals = () => {
    // Store currently displayed value
    const currentVal = display.textContent;

    // Evaluate the math operation using storedVal, currentVal, and current operator
    const result = evaluate(storedVal, currentVal, currentOp);

    // Change the display to the new value
    changeElementText(result, display);

    // Store the new value and allow the next input
    storedVal = result;
    startNextInput = true;
};

// Event Listeners
// AC Button - resets display and clears memory
allClearBtn.addEventListener("click", () => {
    resetDisplay();
});

// for CE, clear last entry
delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(-1, 0);
});

// Number Buttons - takes value of button clicked and changes display
numberBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        const num = numBtn.textContent.trim();
        numClick(num);
    });
});

// Operator Buttons -
// always evaluates previous calculation before storing operator clicked
// and allowing next number to be input.
operationsBtns.forEach((operator) => {
    operator.addEventListener("click", () => {
        // Evaluate the previous operation first
        equals();

        // Register the new operation
        currentOp = operator.textContent;
    });
});

// equalsBtn.addEventListener("click", (operator) => {
//     changeElementText(display.textContent, equals());
// });

// Special Buttons
// % Divides displayed number by 100
pctBtn.addEventListener("click", () => {
    changeElementText(display.textContent / 100, display);
});

// +/- negates displayed number
pmBtn.addEventListener("click", () => {
    changeElementText(display.textContent * -1, display);
});
