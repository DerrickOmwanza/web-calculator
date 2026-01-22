// Calculator State
let display = document.getElementById('display');
let expressionDisplay = document.getElementById('expression');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// Initialize display
function initDisplay() {
    display.value = '0';
    expressionDisplay.textContent = '';
}

// Append number to display
function appendNumber(num) {
    // Prevent multiple leading zeros
    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else if (num === '.' && currentInput.includes('.')) {
        // Prevent multiple decimal points
        return;
    } else {
        currentInput += num;
    }

    // Prevent extremely long numbers
    if (currentInput.length > 15) {
        currentInput = currentInput.slice(0, 15);
    }

    if (shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    }

    updateDisplay();
}

// Append operator
function appendOperator(op) {
    // Validate input
    if (currentInput === '' || currentInput === '.') {
        return;
    }

    // If there's already an operator, calculate first
    if (operator !== null && previousInput !== '') {
        calculateResult();
    } else {
        previousInput = currentInput;
    }

    operator = op;
    shouldResetDisplay = true;
    updateExpressionDisplay();
}

// Toggle positive/negative
function toggleSign() {
    if (currentInput === '0' || currentInput === '') {
        return;
    }

    if (currentInput.charAt(0) === '-') {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }

    updateDisplay();
}

// Delete last character
function deleteLast() {
    if (shouldResetDisplay) {
        return;
    }

    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }

    updateDisplay();
}

// Clear everything
function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
    updateExpressionDisplay();
}

// Calculate result
function calculateResult() {
    // Validate inputs
    if (previousInput === '' || operator === null || currentInput === '') {
        return;
    }

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // Input validation
    if (isNaN(prev) || isNaN(current)) {
        display.value = 'Error';
        return;
    }

    // Perform calculation based on operator
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            // Division by zero validation
            if (current === 0) {
                display.value = 'Cannot divide by 0';
                currentInput = '0';
                previousInput = '';
                operator = null;
                expressionDisplay.textContent = '';
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    // Round to 10 decimal places to avoid floating point errors
    result = Math.round(result * 10000000000) / 10000000000;

    // Handle very large or very small numbers
    if (result.toString().length > 15) {
        result = result.toExponential(8);
    }

    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
    updateExpressionDisplay();
}

// Update main display
function updateDisplay() {
    // Handle very long numbers
    if (currentInput.length > 20) {
        display.value = parseFloat(currentInput).toExponential(8);
    } else {
        display.value = currentInput;
    }
}

// Update expression display (shows calculation in progress)
function updateExpressionDisplay() {
    if (operator === null) {
        expressionDisplay.textContent = '';
    } else {
        // Convert operator to display symbol
        let operatorSymbol = operator;
        if (operator === '*') operatorSymbol = '×';
        if (operator === '/') operatorSymbol = '÷';
        if (operator === '-') operatorSymbol = '−';

        expressionDisplay.textContent = `${previousInput} ${operatorSymbol}`;
    }
}

// Keyboard support
document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendNumber('.');
    } else if (event.key === '+' || event.key === '-') {
        appendOperator(event.key);
    } else if (event.key === '*') {
        event.preventDefault();
        appendOperator('*');
    } else if (event.key === '/') {
        event.preventDefault();
        appendOperator('/');
    } else if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

// Initialize on page load
window.addEventListener('load', initDisplay);
