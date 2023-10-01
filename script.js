let operand1;
let operand2;
let operator;
let result;

//basic functions
function add(operand1, operand2) {
    return result = operand1 + operand2;
}

function subtract(operand1, operand2) {
    return result = operand1 - operand2;
}

function multiply(operand1, operand2) {
    return result = operand1*operand2;
}

function divide(operand1, operand2) {
    return result = operand1/operand2;
}

function clear() {
    operand1 = undefined;
    operand2 = undefined;
}

function operate() {
    if (operator= "*") {
        multiply(operand1,operand2);
    }

    else if (operator= "+") {
        add(operand1, operand2);
    }

    else if (operator = "-") {
        subtract(operand1,operand2);
    }

    else if(operator = "/") {
        divide (operand1,operand2);
    }
    return operand1 = result
}

//
const nbuttons = document.querySelectorAll(".nbuttons");


nbuttons.forEach(function(nbutton) {
nbutton.addEventListener("click", function(x) {
    if (operand1===undefined) {
        return operand1 = x.target.textContent
}
    else if (operand1!==undefined) {
        return operand2 = x.target.textContent
    }
})
});

const addB = document.querySelector("#add");
const subtractB = document.querySelector("#subtract");
const divideB = document.querySelector("#divide");
const multiplyB = document.querySelector("#multiply");

addB.addEventListener("click", () => {
    operator = "+";
});
subtractB.addEventListener("click", () => {
    operator = "-";
});
divideB.addEventListener("click", () => {
    operator = "/";
});
multiplyB.addEventListener("click", () => {
    operator = "x";
});
