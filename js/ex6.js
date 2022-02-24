let number = Math.floor(Math.random()*101); 
response= (prompt("Please input a number between 0 and 100:")); 
attempt = 0; 

while (number!== response){
    attempt++; 

    if (response>number){    
        response=prompt('Too high, try again: ');
    }
    else if (response<number){
        response=prompt('Too low, try again: ');
    }}
    response=prompt(`Correct! It took you ${attempt} attempts to guess the correct number.`)
    console.log(number); 

             