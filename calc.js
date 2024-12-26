function add(a,b) {
    return a + b;
}

function subtract() {
    return a - b;
}

function divide() {
    return a / b;
}

function multiply() {
    return a * b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '/':
            return divide(a,b);
        case '*':
            return multiply(a,b);
        default:
            return 'invalid operator';
    };
};


const display = document.querySelector("#display");

let firstNumber = 0;
let secondNumber = 0;
let operator;


const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 7;
        operation = 7;
    }
    else {
        display.textContent += 7;
        operation += 7;
    }
});

const btn9 = document.querySelector("#nine");
const btnDivide = document.querySelector("#divide");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");

const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btnSubtract = document.querySelector("#subtract");
const btn0 = document.querySelector("#zero");



const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    secondNumber = parseInt(display.textContent);
    display.textContent = operate(firstNumber, secondNumber, operator);
});

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => {
    /*
    if ((display.textContent.includes('+')) || (display.textContent.includes('*'))) {
        display.textContent[-1] = '+'
    }
    else {
        display.textContent += '+';
        operator = add();
    }
    */
    firstNumber = parseInt(display.textContent);
    display.textContent = '';
    operator = '+';
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = 0;
});

