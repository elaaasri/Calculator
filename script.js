    // selecting elements :
let numberButtons = document.querySelectorAll(".number-buttons");
let operatorButtons = document.querySelectorAll(".operator-buttons");
let displayArea = document.querySelector(".display");
let solutionArea = document.querySelector(".solution");

    // funcs for basic math operators : 
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

    // declaring variables : 
let storeFirstNumber = "";
let storeOperator = "";
let storeSecondNumber = "";
let result = "";
let clickCount = 0;

    // func to calcule 2 numbers and shows the result : 
function operate() {

    let operator = storeOperator;
    a = Number(storeFirstNumber);
    b = Number(storeSecondNumber);

    switch (operator) {
        case "+":
            solutionArea.textContent = add(a,b)
            break;
        case "-":
            solutionArea.textContent = subtract(a,b)
            break;
        case "*":
            solutionArea.textContent = multiply(a, b);
            break;
        case "/":
            solutionArea.textContent = divide(a, b);
            break;
        default: 
            displayArea.textContent = "no operator found!";
        };
    };

    // func to show nums : 
function showNumbers() {
    
    numberButtons.forEach(numBtn => {
        numBtn.addEventListener("click",
        () => {
            displayArea.textContent += numBtn.textContent;
            storeSecondNumber = displayArea.textContent.slice(1);
        });
    });
};
showNumbers();

    // func to show operators and calls operate() : 
function showOperators() { 
    operatorButtons.forEach(oprBtn => { 
        oprBtn.addEventListener("click", 
        () => {
            
            if(clickCount === 0) {
                    clickCount++;
                } else if (clickCount === 1) {
                    operate();
                    clickCount++;
                } 
                else if (clickCount === 2) {
                    storeFirstNumber = solutionArea.textContent;
                    operate();
                };

            storeFirstNumber = parseInt(displayArea.textContent);
            displayArea.textContent = oprBtn.textContent;
            storeOperator = oprBtn.textContent;
        });
    });
};
showOperators();