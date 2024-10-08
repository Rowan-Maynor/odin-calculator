let input1 = 0;
let input2 = 0;
let operation = "none";
let prevOperation = "none";

const displayText = document.querySelector("#displayText");
const numBtns = document.querySelectorAll(".numBtn");
const opBtns = document.querySelectorAll(".opBtn");

numBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(displayText.textContent.length > 11){
            displayText.textContent = "Input too long!";
        } else if(displayText.textContent == input1) {
            displayText.textContent = btn.textContent;
        } else if(operation == "eqls"){
            displayText.textContent = btn.textContent;
            operation = "none";
        } else {
            displayText.textContent += btn.textContent;
        }
    });
});

opBtns.forEach(btn => {
    let id = btn.id;
    switch(id){
        case "btnAdd":
            btn.addEventListener("click", () => {
                if(operation == "add" ||
                    operation == "sub" ||
                    operation == "mult" ||
                    operation == "divide"
                ){
                    input2 = displayText.textContent;
                    input1 = operate(input1, input2, operation);
                    displayText.textContent = input1;
                    operation = "add";
                    prevOperation = "add";
                } else {
                    input1 = displayText.textContent;
                    operation = "add";
                    prevOperation = "add";
                }
            });
            break;
        case "btnSub":
            btn.addEventListener("click", () => {
                if(operation == "add" ||
                    operation == "sub" ||
                    operation == "mult" ||
                    operation == "divide"
                 ){
                    input2 = displayText.textContent;
                    input1 = operate(input1, input2, operation);
                    displayText.textContent = input1;
                    operation = "sub";
                    prevOperation = "sub";
                } else {
                    input1 = displayText.textContent;
                    operation = "sub";
                    prevOperation = "sub";
                }
           });
           break;
        case "btnMult":
            btn.addEventListener("click", () => {
                if(operation == "add" ||
                    operation == "sub" ||
                    operation == "mult" ||
                    operation == "divide"
                 ){
                    input2 = displayText.textContent;
                    input1 = operate(input1, input2, operation);
                    displayText.textContent = input1;
                    operation = "mult";
                    prevOperation = "mult";
                } else {
                    input1 = displayText.textContent;
                    operation = "mult";
                    prevOperation = "mult";
                }
           });
           break;
        case "btnDivide":
            btn.addEventListener("click", () => {
                if(operation == "add" ||
                    operation == "sub" ||
                    operation == "mult" ||
                    operation == "divide"
                 ){
                    input2 = displayText.textContent;
                    input1 = operate(input1, input2, operation);
                    displayText.textContent = input1;
                    operation = "divide";
                    prevOperation = "divide";
                } else {
                   input1 = displayText.textContent;
                   operation = "divide";
                   prevOperation = "divide";
                }
           });
           break;
        case "btnClear":
            btn.addEventListener("click", () => {
                displayText.textContent = "0";
                input1 = 0;
                input2 = 0;
                operation = "clear";
                prevOperation = "clear";
            });
            break;
        case "btnEql":
            btn.addEventListener("click", () => {
                if(input1 == undefined){
                    console.log("No input");
                } else if (operation == undefined) {
                    console.log("No Operation");
                } else if (operation == "eqls"){
                    displayText.textContent = operate(input1, input2, prevOperation);
                    input1 = displayText.textContent;
                } 
                else {
                    input2 = displayText.textContent;
                    displayText.textContent = operate(input1, input2, operation);
                    input1 = displayText.textContent;
                    operation = "eqls";
                }
            });
            break;
        default:
            console.log("Button id not found");
            break;
    }
});

function add(num1, num2) {
    return +num1 + +num2;
};
  
function subtract(num1, num2) {
    return +num1 - +num2;
};

function multiply(num1, num2) {
    return +num1 * +num2;
};

function divide(num1, num2) {
    if(num1 == "0" || num2 == "0"){
        return "ERROR";
    } else if (+num1 % num2 > 0){
        return (+num1 / +num2).toFixed(3);
    } else {
        return +num1 / +num2;
    }
};

function operate(num1, num2, operation){
    switch (operation){
        case "add":
            return add(num1, num2);
        case "sub":
            return subtract(num1, num2);
        case "mult":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            console.log("Please enter a valid operation (+-*/)");
            break;
    }
}