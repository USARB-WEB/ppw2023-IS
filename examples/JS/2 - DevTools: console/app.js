console.log('Hello World');

const mark = 5;
console.log('Mark is ' + mark);
if(mark >= 5) {
    console.log('Passed!');
} else {
    console.log('Failed!');
}

const digit = 5;
console.log('====IF-ELSE====');
console.log('Digit is ' + digit);
if(digit === 0) {
    console.log('Zero');
} else if(digit === 1) {
    console.log('One');
} else if(digit === 2) {
    console.log('Two');
} else if(digit === 3) {
    console.log('Three');
} else if(digit === 4) {
    console.log('Four');
} else if(digit === 5) {
    console.log('Five');
} else if(digit === 6) {
    console.log('Six');
} else if(digit === 7) {
    console.log('Seven');
} else if(digit === 8) {
    console.log('Eight');
} else if(digit === 9) {
    console.log('Nine');
} else {
    console.log('Not a digit');
}


console.log('====SWITCH-CASE====');
switch(digit) {
    case 0:
        console.log('Zero');
        break;
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
    case 6:
        console.log('Six');
        break;
    case 7:
        console.log('Seven');
        break;
    case 8:
        console.log('Eight');
        break;
    case 9:
        console.log('Nine');
        break;
    default:
        console.log('Not a digit');
        break;
}

console.log('====FOR-LOOP====');
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('====WHILE-LOOP====');
let i = 1;
while( i <= 10) {
    console.log(i);
    i++
}

console.log('====DO-WHILE-LOOP====');
i = 100;
do {
    console.log(i);
    i++
} while( i <= 10);

const numbers = [1, 2, 3, 4, 5];
console.log('====FOR-OF====');
for(const number of numbers) {
    console.log(number);
}

console.log('====FOR-IN====');
for (const key in numbers) {
    if (Object.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];
        console.log(element);
    }
}
console.log('====FOR-EACH====');
numbers.forEach(number => {
    console.log(number);
});

const person = {
    name: 'John',
    age: 25,
    isMale: true
};

console.log(person.name);
console.log(person.age);
console.log(person.isMale);