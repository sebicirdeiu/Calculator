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
    else if (operator == "**") {
        return toPower(a,b)
    }

};

console.log(operate( 5, '*', 5))