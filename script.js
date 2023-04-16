let numberButtons = document.querySelectorAll(".number-buttons");
let operatorButtons = document.querySelectorAll(".operator-buttons");
let displayArea = document.querySelector(".display");
let equalBtn = document.querySelector(".equal-button");
let solutionArea = document.querySelector(".solution");

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let displayValue = "";
let storeFirstNumber = "";
let storeOperator = "";
let storeSecondNumber = "";
let result = "";

function deleteData() {
    storeFirstNumber = "";
    storeOperator = "";
    storeSecondNumber = "";
};
function storeResult() {
    result = displayArea.textContent;
}
function operate() {
    
    let operator = storeOperator;
    a = Number(storeFirstNumber);
    b = Number(storeSecondNumber);
    
    console.log(storeFirstNumber);
    console.log(storeOperator);
    console.log(storeSecondNumber);
    
     // storeResult  = Number(displayArea.textContent);
    
    switch (operator) {
        case "+":
            displayArea.textContent = add(a, b);
            storeResult();
            deleteData();
            break;
        case "-":
            displayArea.textContent = subtract(a,b);
            storeResult();
            deleteData();
            break;
        case "*":
            displayArea.textContent = multiply(a, b);
            storeResult();
            deleteData();
            break;
        case "/":
            displayArea.textContent = divide(a, b);
            storeResult();
            deleteData();
            break;
        default: 
            displayArea.textContent = "no operator found!";
        };
        // displayrea.textContent = result;
    };

function showNumbers() {
    
    numberButtons.forEach(numBtn => {
        numBtn.addEventListener("click",
        () => {
            displayArea.textContent += numBtn.textContent;
            displayValue += numBtn.textContent;
            storeSecondNumber = displayArea.textContent.slice(1);
        });
    });
};
showNumbers();

// let clickCount = 0;

function showOperators() { 
    operatorButtons.forEach(oprBtn => {
        oprBtn.addEventListener("click", 
        () => {
            
            storeFirstNumber = parseInt(displayArea.textContent);
            displayArea.textContent = oprBtn.textContent;
            storeOperator = oprBtn.textContent;
            solutionArea.textContent = result;
            
        });
    });
};
showOperators();

equalBtn.addEventListener("click", operate);


 // if(clickCount === 0) {
            //     console.log("clickcount 0");
            //     clickCount++;
            // } else if (clickCount === 1) {
            //     storeFirstNumber = result
            //     console.log("clickcount 1")
            //     console.log(storeFirstNumber)
            //     console.log(storeOperator)
            //     console.log(storeSecondNumber)
            //     operate();
            //     // clickCount++;
            // } 
            // else if (clickCount === 2) {
            //     console.log(storeFirstNumber)
            //     console.log(storeOperator)
            //     console.log(storeSecondNumber)
            //     storeFirstNumber = result;
            //     operate()
            //     // clickCount = 0;
            // };

// let addBtn = document.querySelector(".add");
// let subtractBtn = document.querySelector(".subtract");
// let multiplyBtn = document.querySelector(".multiply");
// let divideBtn = document.querySelector(".divide");
// let operateBtn = document.querySelector(".operate");

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);
// operateBtn.addEventListener("click", operate)











// function calculates(str) {
//     let total = 0;
//     str = str.match(/[+\-\*\/]*(\.\d+|\d+(\.\d+)?)/g) || [];
    
//     while (str.length) {
//         let result = str.shift();
//         if (result.startsWith("/")) {
//             total /= parseInt(result.substring(1));
//         } else if (result.startsWith("*")) {
//             total *= parseInt(result.substring(1));
//         } else {
//             total += parseInt(result);
//         };
//     };
//     return total;
// };