        // selecting elements :
    let numberButtons = document.querySelectorAll(".number-buttons");
    let operatorButtons = document.querySelectorAll(".operator-buttons");
    let displayArea = document.querySelector(".display");
    let solutionArea = document.querySelector(".solution");
    let clearButton = document.querySelector(".clear-button");
    let backSpace = document.querySelector(".back-space");

        // funcs for basic math operators : 
    const add = (a,b) => a + b;
    const subtract = (a,b) => a - b;
    const multiply = (a,b) => a * b;
    const divide = (a,b) => a / b;
    const mod = (a,b) => a - Math.trunc(a / b) * b;

        // declaring variables :
    let displayValue = "";
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
                solutionArea.textContent = add(a,b);
            break;
            case "-":
                solutionArea.textContent = subtract(a,b);
            break;
            case "*":
                solutionArea.textContent = multiply(a, b);
            break;
            case "/":
                solutionArea.textContent = divide(a, b);
            break;
            case "%":
                solutionArea.textContent = mod(a, b);
            break;
            };
        };

            // func to show nums : 
        function showNumbers() {
            
            numberButtons.forEach(numBtn => {
                numBtn.addEventListener("click",
                () => {
                        // adds "." to displaylValue (using class) and print it just once : 
                    if (numBtn.textContent === "." && displayArea.textContent.includes(".")) {
                        return; 
                    };

                        // display nums : 
                    displayArea.textContent += numBtn.textContent;
                    displayValue += numBtn.textContent;
                    storeSecondNumber = displayArea.textContent.slice(1);
                    // storeSecondNumber =  parseFloat(displayArea.textContent.replace(/[^\d.-]/g, '')); // fix mod operator : 
                    
                });
            });
        };
        showNumbers();
        
            // func to show operators and calls operate() : 
        function showOperators() { 
            operatorButtons.forEach(oprBtn => { 
                oprBtn.addEventListener("click", () => {

                        // fix the bug if "=" entered first : 
                    if(clickCount === 0 && oprBtn.textContent === "=") {    
                        solutionArea.textContent = "0";
                        return;
                    };

                        // storing nums based on click counts : 
                    if(clickCount === 0) {
                        storeFirstNumber = displayValue;
                        clickCount++;
                    } else if (clickCount === 1) {
                        operate();
                        clickCount++;
                    } else if (clickCount === 2) {
                        storeFirstNumber = solutionArea.textContent;
                        operate();
                    };

                        // display operators :
                    displayArea.textContent = oprBtn.textContent;
                    storeOperator = oprBtn.textContent;

                        // calls show snarky message func :
                    showSnarkyMessage();

                });
            });
        };
        showOperators();
    
        // func to show a snarky message if the user divide by 0! :
    function showSnarkyMessage() {
        result = solutionArea.textContent;
        if (result === "Infinity") {
            alert("Are u Sure About That?");
            deleteData();
        };
    };
    
        // func to delete all data : 
    function deleteData() {
        displayValue = "";  
        storeFirstNumber = "";
        storeOperator = "";
        storeSecondNumber = "";
        displayArea.textContent = "";
        solutionArea.textContent = "";
        clickCount = 0;
    };
    
    clearButton.addEventListener("click", deleteData);

        // func to undo nums : 
    function undoNums() {
        let arrFromDisplay = displayArea.textContent.split("");
        displayArea.textContent = arrFromDisplay.slice(0, -1).join("");
        displayValue = arrFromDisplay.slice(0, -1).join("");
        storeSecondNumber = displayArea.textContent.slice(1);
    };

    backSpace.addEventListener("click", undoNums);