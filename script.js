let operand1;
let operand2;
let operator;
let result;

let display = document.getElementById("display");

//basic functions
function add(operand1, operand2) {
    return result = parseInt(operand1)+parseInt(operand2);
}

function subtract(operand1, operand2) {
    return result = operand1-operand2;
}

function multiply(operand1, operand2) {
    return result = operand1*operand2;
}

function divide(operand1, operand2) {
    return result = operand1/operand2;
}

function clear() {
    result = 0;
    operand1 = undefined;
    operand2 = undefined;
    display.textContent = result;
}

function operate() {
    if (operator=== "x") {
        multiply(operand1,operand2);
    }

    else if (operator=== "+") {
        add(operand1,operand2);
    }

    else if (operator === "-") {
        subtract(operand1,operand2);
    }

    else if(operator === "/") {
        divide (operand1,operand2);
    }
  
    return operand1 = result
}

//
const nbuttons = document.querySelectorAll(".nbuttons");



nbuttons.forEach(function(nbutton) {
nbutton.addEventListener("click", function(x) {
    if (!operand1) {
         operand1 = x.target.textContent.toString();
         return display.textContent = operand1;
}


    else if (!operator && operand1) {
        operand1 = operand1 + x.target.textContent.toString();
        return display.textContent = operand1;
    }

    else if (operator && !operand2) {
        operand2 = x.target.textContent.toString();
        return display.textContent = operand2;
    }
    else if (operator && operand2) {
        operand2 = operand2 + x.target.textContent.toString();
        return display.textContent = operand2;
    }
    
})

});



const addB = document.querySelector("#add");
const subtractB = document.querySelector("#subtract");
const divideB = document.querySelector("#divide");
const multiplyB = document.querySelector("#multiply");
const equal = document.getElementById("equal");
const clearB = document.getElementById("clear");

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

equal.addEventListener("click", () => {
    operate();
    if (result.toString().length > 16)
    display.textContent = result.toString().slice(0,6);
    else {
        display.textContent = result;
    }
    operator = undefined;
})

clearB.addEventListener("click", clear)
