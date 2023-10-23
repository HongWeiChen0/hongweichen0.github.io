const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const decimalBtn = document.querySelector(".decimal");
const clearBtn = document.querySelector(".clear");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const equalBtn = document.querySelector(".equal");
const screen = document.querySelector(".screen");

zeroBtn.addEventListener("click", () => {
    handleBtnClick("zero");
});
oneBtn.addEventListener("click", () => {
    handleBtnClick("one");
});
twoBtn.addEventListener("click", () => {
    handleBtnClick("two");
});
threeBtn.addEventListener("click", () => {
    handleBtnClick("three");
});
fourBtn.addEventListener("click", () => {
    handleBtnClick("four");
});
fiveBtn.addEventListener("click", () => {
    handleBtnClick("five");
});
sixBtn.addEventListener("click", () => {
    handleBtnClick("six");
});
sevenBtn.addEventListener("click", () => {
    handleBtnClick("seven");
});
eightBtn.addEventListener("click", () => {
    handleBtnClick("eight");
});
nineBtn.addEventListener("click", () => {
    handleBtnClick("nine");
});
decimalBtn.addEventListener("click", () => {
    handleBtnClick("decimal");
});
clearBtn.addEventListener("click", () => {
    handleBtnClick("clear");
});
divideBtn.addEventListener("click", () => {
    handleBtnClick("divide");
});
multiplyBtn.addEventListener("click", () => {
    handleBtnClick("multiply");
});
minusBtn.addEventListener("click", () => {
    handleBtnClick("minus");
});
plusBtn.addEventListener("click", () => {
    handleBtnClick("plus");
});
equalBtn.addEventListener("click", () => {
    handleBtnClick("equal");
});

let decimalPressed = false;
let operationPressed = false;
function handleBtnClick(key) {
    if (
        screen.innerText == "0" &&
        !(
            key == "equal" ||
            key == "plus" ||
            key == "minus" ||
            key == "multiply" ||
            key == "divide" ||
            key == "decimal"
        )
    ) {
        screen.innerText = "";
    }
    if (key == "clear") {
        screen.innerText = "0";
        decimalPressed = false;
        operationPressed = false;
    }
    if (key == "one") {
        screen.innerText = screen.innerText + "1";
    }
    if (key == "two") {
        screen.innerText = screen.innerText + "2";
    }
    if (key == "three") {
        screen.innerText = screen.innerText + "3";
    }
    if (key == "four") {
        screen.innerText = screen.innerText + "4";
    }
    if (key == "five") {
        screen.innerText = screen.innerText + "5";
    }
    if (key == "six") {
        screen.innerText = screen.innerText + "6";
    }
    if (key == "seven") {
        screen.innerText = screen.innerText + "7";
    }
    if (key == "eight") {
        screen.innerText = screen.innerText + "8";
    }
    if (key == "nine") {
        screen.innerText = screen.innerText + "9";
    }
    if (key == "zero") {
        screen.innerText = screen.innerText + "0";
    }
    if (key == "decimal" && !decimalPressed) {
        screen.innerText = screen.innerText + ".";
        decimalPressed = true;
    }
    if (key == "plus") {
        if (operationPressed == false) {
            screen.innerText = screen.innerText + "+";
            operationPressed = true;
            decimalPressed = false;
        } else {
            if (evaluate()) screen.innerText = screen.innerText + "+";
            decimalPressed = false;
        }
    }
    if (key == "minus") {
        if (operationPressed == false) {
            screen.innerText = screen.innerText + "-";
            operationPressed = true;
            decimalPressed = false;
        } else {
            if (evaluate()) screen.innerText = screen.innerText + "-";
            decimalPressed = false;
        }
    }
    if (key == "multiply") {
        if (operationPressed == false) {
            screen.innerText = screen.innerText + "*";
            operationPressed = true;
            decimalPressed = false;
        } else {
            if (evaluate()) screen.innerText = screen.innerText + "*";
            decimalPressed = false;
        }
    }
    if (key == "divide") {
        if (operationPressed == false) {
            screen.innerText = screen.innerText + "/";
            operationPressed = true;
            decimalPressed = false;
        } else {
            if (evaluate()) screen.innerText = screen.innerText + "/";
            decimalPressed = false;
        }
    }
    if (key == "equal") {
        evaluate();
        operationPressed = false;
    }
}

function evaluate() {
    decimalPressed = false;
    const input = screen.innerText;
    if (input.includes("+")) {
        const arr = input.split("+");
        const num1 = parseFloat(arr[0]);
        const num2 = parseFloat(arr[1]);
        if (isNaN(num1) || isNaN(num2)) {
            operationPressed = true;
            return false;
        }
        let res = num1 + num2;
        res = Math.round((res + Number.EPSILON) * 100) / 100;
        screen.innerText = res;
        if (!Number.isInteger(res)) {
            decimalPressed = true;
        }
        return true;
    }
    if (input.substring(1).includes("-")) {
        const position = input.indexOf("-", 1);
        const num1 = parseFloat(input.substring(0, position));
        const num2 = parseFloat(input.substring(position + 1));
        if (isNaN(num1) || isNaN(num2)) {
            operationPressed = true;
            return false;
        }
        let res = num1 - num2;
        res = Math.round((res + Number.EPSILON) * 100) / 100;
        screen.innerText = res;
        if (!Number.isInteger(res)) {
            decimalPressed = true;
        }
        return true;
    }
    if (input.includes("*")) {
        const arr = input.split("*");
        const num1 = parseFloat(arr[0]);
        const num2 = parseFloat(arr[1]);
        if (isNaN(num1) || isNaN(num2)) {
            operationPressed = true;
            return false;
        }
        let res = num1 * num2;
        res = Math.round((res + Number.EPSILON) * 100) / 100;
        screen.innerText = res;
        if (!Number.isInteger(res)) {
            decimalPressed = true;
        }
        return true;
    }
    if (input.includes("/")) {
        const arr = input.split("/");
        const num1 = parseFloat(arr[0]);
        const num2 = parseFloat(arr[1]);
        if (isNaN(num1) || isNaN(num2)) {
            operationPressed = true;
            return false;
        }
        let res = num1 / num2;
        res = Math.round((res + Number.EPSILON) * 100) / 100;
        screen.innerText = res;
        if (!Number.isInteger(res)) {
            decimalPressed = true;
        }
        return true;
    }
}

document.addEventListener("keydown", (e) => {
    const code = e.key;
    console.log(code);
    switch (code) {
        case "0":
            handleBtnClick("zero");
            break;
        case "1":
            handleBtnClick("one");
            break;
        case "2":
            handleBtnClick("two");
            break;
        case "3":
            handleBtnClick("three");
            break;
        case "4":
            handleBtnClick("four");
            break;
        case "5":
            handleBtnClick("five");
            break;
        case "6":
            handleBtnClick("six");
            break;
        case "7":
            handleBtnClick("seven");
            break;
        case "8":
            handleBtnClick("eight");
            break;
        case "9":
            handleBtnClick("nine");
            break;
        case "+":
            handleBtnClick("plus");
            break;
        case "-":
            handleBtnClick("minus");
            break;
        case "*":
            handleBtnClick("multiply");
            break;
        case "/":
            handleBtnClick("divide");
            break;
        case "Enter":
            handleBtnClick("equal");
            break;
        case "Backspace":
            handleBtnClick("clear");
            break;
        case ".":
            handleBtnClick("decimal");
            break;
        default:
            break;
    }
});
