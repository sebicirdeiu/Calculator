
sumAll = (a,b) => {
    let total = a + b;
    return total;
};


substract = (a,b) => {
    let total = a - b;
    return total;
};

multiply = (a,b) => {
    let total = a * b;
    return total;
};

devide = (a,b) => {
    let result =a / b;
    return result;
};


toPower = (a,b) => {
    let result = a ** b;
    return result
};


function operate (a, operator, b) {
    if (operator == '+') {
        return sumAll(a,b)
    }
    else if (operator == "-") {
        return substract(a,b);
    }
    else if (operator == "*") {
        return multiply(a,b)
    }
    else if (operator == "/") {
        return devide(a,b)
    }
    else if (operator == '**') {
        return toPower(a,b)
    }

};


const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.querySelector(".zero");
const dot = document.getElementById("dot");
const division = document.getElementById("devide");
const multiplication = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const ac = document.getElementById("ac");
const pow = document.getElementById("pow");
const sqr = document.getElementById("sqr");
const equal = document.getElementById("equal");


const display = document.querySelector(".display");
display.textContent = ""


one.addEventListener("click", function() {
    display.textContent += "1"}); 

two.addEventListener("click", function()
   {display.textContent += "2"});

three.addEventListener("click", function()
   {display.textContent += "3"});

four.addEventListener("click", function()
   {display.textContent += "4"});

five.addEventListener("click", function()
   {display.textContent += "5"});

six.addEventListener("click", function()
   {display.textContent += "6"});

seven.addEventListener("click", function()
   {display.textContent += "7"});

eight.addEventListener("click", function()
   {display.textContent += "8"});

nine.addEventListener("click", function()
   {display.textContent += "9"});

zero.addEventListener("click", () => {display.textContent += "0"});

dot.addEventListener("click", () => {display.textContent += "."});

division.addEventListener("click", () => {
    display.textContent += "/"});

multiplication.addEventListener("click", () => {
        display.textContent += "*"});

minus.addEventListener("click", () => {
            display.textContent += "-"});

plus.addEventListener("click", () =>
{display.textContent += "+"} );

ac.addEventListener("click", () => {
display.textContent = "" } );

equal.addEventListener("click", () => {

    const displayText = display.textContent;
    const plusIndex = displayText.indexOf('+');
    const minusIndex = displayText.indexOf('-');
    const multiplyIndex = displayText.indexOf('*');
    const divideIndex = displayText.indexOf('/');
    let operatorIndex;
    let operator;
    if (plusIndex !== -1) {
      operatorIndex = plusIndex;
      operator = '+';
    } else if (minusIndex !== -1) {
      operatorIndex = minusIndex;
      operator = '-';
    } else if (multiplyIndex !== -1) {
      operatorIndex = multiplyIndex;
      operator = '*';
    } else if (divideIndex !== -1) {
      operatorIndex = divideIndex;
      operator = '/';
    }
    const firstNum = parseFloat(displayText.substring(0, operatorIndex));
    const secondNum = parseFloat(displayText.substring(operatorIndex + 1));
  
    const result = parseFloat(operate(firstNum, operator, secondNum).toFixed(2));
  
    
    display.textContent = result;
  });