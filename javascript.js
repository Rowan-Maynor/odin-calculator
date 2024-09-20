let input1;
let input2;
let operation;

const displayText = document.querySelector("#displayText");
const numBtns = document.querySelectorAll(".numBtn");
const opBtns = document.querySelectorAll(".opBtn");

numBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(displayText.textContent.length > 11){
            displayText.textContent = "Input too long!";
        } else if(displayText.textContent == "0") {
            displayText.textContent = btn.textContent;
        }  else {
            displayText.textContent += btn.textContent;
        }
    });
});

opBtns.forEach(btn => {
    console.log(btn.id);
    switch(btn.id){
        case "btnAdd":
            btn.addEventListener("click", () => {
                input1 = displayText.textContent;
                operation = "add";
                displayText.textContent = "0";
            });
        case "btnSub":
            btn.addEventListener("click", () => {
                input1 = displayText.textContent;
                operation = "sub";
                displayText.textContent = "0";
            });
        case "btnMult":
            btn.addEventListener("click", () => {
                input1 = displayText.textContent;
                operation = "mult";
                displayText.textContent = "0";
            });
        case "btnDivide":
            btn.addEventListener("click", () => {
                input1 = displayText.textContent;
                operation = "divide";
                displayText.textContent = "0";
        });
    }
});

function add(num1, num2) {
    return num1 + num2;
};
  
function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
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
    }
}