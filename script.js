        // selecting elements :
    let numberButtons = document.querySelectorAll(".number-buttons");
    let operatorButtons = document.querySelectorAll(".operator-buttons");
    let displayArea = document.querySelector(".display");
    let solutionArea = document.querySelector(".solution");
    let clearButton = document.querySelector(".clear-button");
    
        // funcs for basic math operators : 
    const add = (a,b) => a + b;
    const subtract = (a,b) => a - b;
    const multiply = (a,b) => a * b;
    const divide = (a,b) => a / b;
    
        // declaring variables :
    let displayValue = "";
    let storeFirstNumber = "";
    let storeOperator = "";
    let storeSecondNumber = "";
    let clickCount = 0;
    let result = "";
    
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
            };
    };

        // func to show nums : 
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
    
        // func to show operators and calls operate() : 
    function showOperators() { 
        operatorButtons.forEach(oprBtn => { 
            oprBtn.addEventListener("click", () => {

                    // fix the bug if "=" entered first : 
                if(clickCount === 0 && oprBtn.textContent === "=") {
                    solutionArea.textContent = "0";
                    return;
                };

                    // storing nums based on clickcount : 
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
            alert("her we go again :)))")
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
