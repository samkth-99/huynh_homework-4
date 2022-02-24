
const input1 = prompt("Enter the first number: ");
a = Number(input1);
const input2 = prompt("Enter the second number: ");
b = Number(input2); 
let op = prompt("Select an operator: +, -, *, / ");

if (op === '+','-','*','/','%') {
let result; 
if ((op) === '+') {
  result = a + b;
} else if ((op) === '-') {
  result = a - b;
} else if ((op) === '*') {
  result = a * b;
} else if ((op) === '/') {
  result = a / b;
} else if ((op) === '%') {
  result = a % b;
} 
else { 
  console.log("Operator is invalid");
}
console.log(`${a} ${op} ${b} = ${result}`);
};