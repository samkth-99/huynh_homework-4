const values = [3, 11, 7, 2, 9, 10]; 
let sum=0; 
let minValue = values[0];
let maxValue = values[0]; 

for (let i=0; i < values.length; i++){
    sum += values[i]; //Find sum
    if (values[i] < minValue) { //Find Minimum value
        minValue = values[i];
    }
    if (values[i] > maxValue) { //Find Maximum value
        maxValue = values [i]; 

    }
}
console.log(`Sum of all array values is: ${sum}`); 
console.log(`The min value in the array is: ${minValue}`);
console.log(`The max value in the array is: ${maxValue}`);


