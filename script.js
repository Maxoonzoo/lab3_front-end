console.log('1 task');

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(5));
console.log(fibonacci(10));


console.log('2 task')


function filter(array, handler) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (handler(array[i], i, array)) { 
            result.push(array[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = filter(numbers, (num) => num % 2 === 0);

console.log(filteredNumbers);


console.log('3 task');

function pow(number, power) {
    resultnumber = number
    for (i = 1; i < power; i++) {
        resultnumber = resultnumber*number
    }
    return resultnumber;
}

console.log(pow(3,3));
console.log(pow(10,3));


console.log('5 task');

const powerNumbers = [2, 3, 4, 5, 6]; 

function powArray(numarray, powah){
    return numarray.map((num) => pow(num,powah));
}

console.log(powArray(powerNumbers, 3));


console.log('6 task');


function powAndFilter(numbersArray, power, lowest){
    numbersArray = powArray(numbersArray, power);
    const filteredNumbers = filter(numbersArray, (num) => num > lowest);
    return filteredNumbers;
}

console.log(powAndFilter(powerNumbers, 3, 50));


console.log('7 task');

function sum(handler) {
    return function calc() {
        const numbers = handler();
        return numbers.reduce((acc, num) => acc + num, 0);
    };
}

function handler() {
    return [1, 2, 3];
}

let calc = sum(handler);
console.log(calc());
