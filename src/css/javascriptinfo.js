//https://javascript.info/function-basics
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge2(age) {

    return (age > 18) ? true : confirm('Did parents allow you?');

}


function checkAge3(age) {

    return (age > 18) || confirm('Did parents allow you?');

}

function min1(a, b) {

    return Math.min(a, b);
}

function min2(a, b) {

    return (a < b) ? a : b
}


console.log(pow(prompt("input x", ""), prompt("input n", "")));

function pow(a, b) {
    return a ** b
}


//https://javascript.info/arrow-functions-basics


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () =>  alert("You agreed."),
    () =>  alert("You canceled the execution.")s
);




console.log(typeof null);


//https://javascript.info/object-methods

let calculator = {
    read() {

        this.num1 = +prompt("Enter number1", 0);
        this.num2 = +prompt("Enter num2", 0)

    },
    sum() {

        return this.num1 + this.num2

    },
    mul() {

        return this.num1 * num2
    }

}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());



//https://javascript.info/constructor-new


function Calculator() {

    this.read = function () {
        this.num1 = +prompt("Enter num1", 0)
        this.num2 = +prompt("Enter num2", 0)
    }

    this.sum = function () {
        return this.num1 + this.num2
    }

    this.mul = function () {
        return this.num1 * this.num2
    }
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/

function Accumulator(startingValue) {

    this.value = startingValue

    this.read = function () {
        this.value += +prompt("Enter a number to add", 0)
    }
}


let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values