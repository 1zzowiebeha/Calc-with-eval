
var displayElement = document.querySelector("#display > p")
var math_expression = "";

function updateDisplay(text) {
    displayElement.textContent = text;
}

function enterInput(input) {
    math_expression += input;
    updateDisplay(math_expression);
}

function clearButton() {
    math_expression = "";
    updateDisplay(math_expression);
}

function evaluateExpression() {
    var result = eval(math_expression);
    
    // If the user wants to use the result for a new calculation
    math_expression = result;
    
    updateDisplay(result);
}