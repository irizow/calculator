let operand1;
let operand2;
let operator;
let result;

letdisplayBf = document.getElementById("displaybf");
let display = document.getElementById("display");

//basic functions

function add(operand1, operand2) {
    result = parseFloat(operand1)+parseFloat(operand2);
    if (!Number.isInteger(result)) {
        result = result.toFixed(2);
    };

    return result;
}

function subtract(operand1, operand2) {
    result = (operand1-operand2);
    if (!Number.isInteger(result)) {
        result = result.toFixed(2);
    };

    return result;

}

function multiply(operand1, operand2) {
    result = (operand1*operand2);
    if (!Number.isInteger(result)) {
        result = result.toFixed(2);
    };

    return result;
}

function divide(operand1, operand2) {
    result = (operand1/operand2);
    if (!Number.isInteger(result)) {
        result = result.toFixed(2);
    };

    return result;
}

//clear and delete functions

function deleteOperator() {
    if (result) {
        result = undefined;
        operand1= undefined;
        displaybf.style.fontSize = "30px"
        displaybf.textContent = "0"
        return display.textContent = ""
    }

    else if (operand1 && !operator && !operand2) {
        operand1 = undefined;
        return displaybf.textContent = ""
    }

    else if(operand1 && operator && !operand2) {
        operator = undefined;
        return displaybf.textContent = operand1;
    
    }

    else if (operand2 && operator) {
        operand2 = undefined;
        return displaybf.textContent = operand1 + operator;

    }

    else if (operand2 && !operator) {
        operand2 = undefined;
        displaybf.textContent = operand1;
    }

}


function clear() {
    result = 0;
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    display.textContent = "";
    displaybf.textContent = "";
}
 //operate

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
    operator = undefined;
    operand2 = undefined;
    operand1 = result;
    displaybf.style.fontSize = "16px";
    display.textContent = result;
    
    
}


// buttons listeners

const nbuttons = document.querySelectorAll(".nbuttons");
const decimal = document.getElementById("kdecimal")



nbuttons.forEach(function(nbutton) {
nbutton.addEventListener("click", function(x) {
    if(result && !operator) {
        clear()
        operand1 = x.target.textContent.toString();
         displaybf.style.fontSize = "30px"
         x.target.style.boxShadow = "0px 2px 1px 1px pink;"
         return displaybf.textContent = operand1;
    }

    if (!operand1) {
         operand1 = x.target.textContent.toString();
         displaybf.style.fontSize = "30px"
         x.target.style.boxShadow = "0px 2px 1px 1px pink;"
         return displaybf.textContent = operand1;
}


    else if (!operator && operand1) {
        operand1 = operand1 + x.target.textContent.toString();
        displaybf.style.fontSize = "30px"
        x.target.style.boxShadow = "0px 2px 1px 1px pink;"
        return displaybf.textContent = operand1;
    }

    else if (operator && !operand2) {
        operand2 = x.target.textContent.toString();
        return displaybf.textContent = operand1 + operator + operand2;
    }
    else if (operator && operand2) {
        operand2 = operand2 + x.target.textContent.toString();
        
        return displaybf.textContent = operand1 + operator + operand2;
    }
    
    
})});

decimal.addEventListener ("click", () => {
    if (!operand2 && !operand1.includes(".")) {
        operand1 += ".";
        return displaybf.textContent = operand1;
    }

    else if (operand2 && !operand2.includes(".")) {
        operand2 += ".";
        return displaybf.textContent = operand1 + operator + operand2;
    }
   
})

// operator buttons 

const addB = document.getElementById("o+");
const subtractB = document.getElementById("o-");
const divideB = document.getElementById("o/");
const multiplyB = document.getElementById("o*");
const equal = document.getElementById("n=");
const clearB = document.getElementById("clear");
const deleteB = document.getElementById("delete")

addB.addEventListener("click", () => {
    if (!operator) {
        operator = "+";
        displaybf.textContent = operand1 + operator;
        return operand2 = undefined;
        
    } 
 

    else if (operator && operand2) {
        operate();
        operator = "+";
        display.textContent = "";
        display.textContent = result;
        return displaybf.textContent = operand1 + operator;
       }

    else {
        operand2 = operand1;
        operate();
    }

});

subtractB.addEventListener("click", () => {
    if (!operator) {
    operator = "-";
    displaybf.textContent = operand1 + operator;
    return operand2 = undefined;
}


   else if (operator) {
    operate();
    operator = "-";
    display.textContent = "";
    display.textContent = result;
    return displaybf.textContent = operand1 + operator;
   }

   else {
    operand2 = operand1;
    operate();
}

});

divideB.addEventListener("click", () => {
    if (!operator) {
        operator = "/";
        displaybf.textContent = operand1 + operator;
        return operand2 = undefined;
    }

  

    else if (operator) {
        operate();
        operator = "/";
        display.textContent = "";
        display.textContent = result;
        return displaybf.textContent = operand1 + operator;
        
       }

       else {
        operand2 = operand1;
        operate();
    }

});

multiplyB.addEventListener("click", () => {
    if (!operator) {
        operator = "x";
        displaybf.textContent = operand1 + operator;
        return operand2 = undefined;
    }
 

    else if (operator) {
        operate();
        operator = "x";
        display.textContent = "";
        display.textContent = result;
        return displaybf.textContent = operand1 + operator;
       }

       else {
        operand2 = operand1;
        operate();
    }
});

//equal button

equal.addEventListener("click", () => {
    operate();
    
 
})

//clear and delete buttons;

clearB.addEventListener("click", clear)

deleteB.addEventListener ("click", deleteOperator)


// make number keys trigger number buttons

document.addEventListener('keydown', (event) => {
    if(event.key === "Backspace") {
        document.getElementById("delete").click();
        }
    else if (event.key === "=" || event.key === "Enter") {
            document.getElementById("n=").click();
            }
    else if (['+', '-', '*', '/'].includes(event.key)) {
        document.getElementById(`o${event.key}`).click();
    }
    else if (event.key === ".") {
        document.getElementById(`kdecimal`).click();
    }
    else if (!event.key.isNaN) {
    document.getElementById(`n${event.key}`).click();
    }
    

})

   
