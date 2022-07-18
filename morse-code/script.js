// First need to establish morse code variables... i.e. a = *-

const morseCode = {
    A: "*-",
    B: "-***",
    C: "-*-*",
    D: "-**",
    E: "*",
    F: "**-*",
    G: "--*",
    H: "****",
    I: "**",
    J: "*---",
    K: "-*-",
    L: "*-**",
    M: "--",
    N: "-*",
    O: "---",
    P: "*--*",
    Q: "--*-",
    R: "*-*",
    S: "***",
    T: "-",
    U: "**-",
    V: "***-",
    W: "*--",
    X: "-**-",
    Y: "-*--",
    Z: "--**",
};
const morsePunctuation = {
    fullStop: ".-.-.-",
    apostrophe: ".—-.",
    space: "/",
    // exclamationMark: "-.-.–",
    // questionMark: "..–..",
};

const box = document.querySelectorAll(".box");
const english = document.getElementById("englishBox");
const morse = document.getElementById("morseBox");
const engInput = document.querySelector("#englishBox");
const translateBtn = document.getElementById("translate");

// to output english converted to morse...
// can use .map to iterate through all of the characters (including spaces)

// NOTE: Consider adding punctuation and numbers.

// console.log(engInput);

function getInput() {
    input = engInput.value;
    console.log(input);
    return input;
}

const convertToMorse = (str) => {
    return str
        .toUpperCase()
        .split("/")
        .map((word) => {
            return morseCode[word] ? morseCode[word] : word;
        })
        .join("");
};

console.log(engInput);
console.log(convertToMorse("Hello"));
console.log(convertToMorse("Hows it going"));

translateBtn.addEventListener("click", () => {
    input = getInput();
    console.log(input);
    morse.innerText === convertToMorse(input).toString();
});

console.log(morse.innerText);
