let input1;
let input2;
let operation;

const displayText = document.querySelector("#displayText");
const numBtns = document.querySelectorAll(".numBtn");

numBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if (displayText.textContent.length < 15){
            displayText.textContent += btn.textContent;
        } else {
            displayText.textContent = "Input too long!"
        }  
    })
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
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            console.log("Please enter a valid operation (+-*/)");
    }
}