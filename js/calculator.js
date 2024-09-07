
var displayElement = document.querySelector("#display > p")
var math_expression = "";

function updateDisplay(text) {
    // Bug: if display is cleared, the <p> element
    // isn't rendered and so the numpad shifts up because there
    // is space available. Maybe make the display a fixed height.
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
    // TODO: Error handling
    var result = eval(math_expression);
    
    // If the user wants to use the result for a new calculation
    math_expression = result;
    
    updateDisplay(result);
}