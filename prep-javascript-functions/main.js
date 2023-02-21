function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 12);
console.log('addTwoNumbersResult', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const mins = convertHoursToMinutes(5);
console.log('convertMinutesToSecondsResult', mins);

function getGreeting(name) {
  return 'Hello ' + name;
}

const greeting = getGreeting('Jimmy Boy');
console.log('getGreeting result', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiply = addAndMultiplyBy5(10, 5);
console.log('andAndMultiplyBy5 result', addAndMultiply);

function multiplyAndDivideby5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivide = multiplyAndDivideby5(10, 5);
console.log('multiplyAndDivideBy5 result', multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtracted = subtractTwoNumbers(25, 10);
console.log('subtractTwoNumbers Results', subtracted);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circumference = getCircleCircumference(5);
console.log('getCircleCircumference result', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName result', fullName);

function cube(number) {
  return Math.pow(number, 3);
}

const cubed = cube(5);
console.log('cube result', cubed);
