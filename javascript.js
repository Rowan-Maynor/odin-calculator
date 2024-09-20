let input1 = 0;
let input2 = 0;
let operation = "none";

const displayText = document.querySelector("#displayText");
const numBtns = document.querySelectorAll(".numBtn");
const opBtns = document.querySelectorAll(".opBtn");

numBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(displayText.textContent.length > 11){
            displayText.textContent = "Input too long!";
        } else if(displayText.textContent == "0") {
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
                    operation = "add";
                    displayText.textContent = "0";
                  } else {
                    input1 = displayText.textContent;
                    operation = "add";
                    displayText.textContent = "0";
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
                   operation = "sub";
                   displayText.textContent = "0";
                 } else {
                   input1 = displayText.textContent;
                   operation = "sub";
                   displayText.textContent = "0";
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
                   operation = "mult";
                   displayText.textContent = "0";
                 } else {
                   input1 = displayText.textContent;
                   operation = "mult";
                   displayText.textContent = "0";
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
                   operation = "divide";
                   displayText.textContent = "0";
                 } else {
                   input1 = displayText.textContent;
                   operation = "divide";
                   displayText.textContent = "0";
                 }
           });
           break;
        case "btnClear":
            btn.addEventListener("click", () => {
                displayText.textContent = "0";
                input1 = 0;
                input2 = 0;
                operation = "clear";
            });
            break;
        case "btnEql":
            btn.addEventListener("click", () => {
                if(input1 == undefined){
                    console.log("No input");
                } else if (operation == undefined) {
                    console.log("No Operation");
                } else {
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
    return +num1 / +num2;
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