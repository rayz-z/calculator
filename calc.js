function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
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
    }
    else {
        display.textContent += 7;
    }
});

const btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 8;
    }
    else {
        display.textContent += 8;
    }
});

const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 9;
    }
    else {
        display.textContent += 9;
    }
});

const btnDivide = document.querySelector("#divide");
const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 4;
    }
    else {
        display.textContent += 4;
    }
});

const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 5;
    }
    else {
        display.textContent += 5;
    }
});

const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 6;
    }
    else {
        display.textContent += 6;
    }
});

const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 1;
    }
    else {
        display.textContent += 1;
    }
});

const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 2;
    }
    else {
        display.textContent += 2;
    }
});

const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 3;
    }
    else {
        display.textContent += 3;
    }
});

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => {
    if (display.textContent == 0) {
        display.textContent = 0;
    }
    else {
        display.textContent += 0;
    }
});
// zero will keep getting added to 0 



const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    secondNumber = parseInt(display.textContent);
    display.textContent = operate(firstNumber, secondNumber, operator);
});

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => {
    firstNumber = parseInt(display.textContent);
    display.textContent = '+';
    operator = '+';
});

const btnSubtract = document.querySelector("#subtract");
btnSubtract.addEventListener("click", () => {
    firstNumber = parseInt(display.textContent);
    display.textContent = '-';
    operator = '-';
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = 0;
});

// when an operator is already pressed, pressing another should change it

// operating multiple times should process the first operation and use it
// --in the second operation
