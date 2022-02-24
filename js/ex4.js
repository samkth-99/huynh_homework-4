const words = [];
let validWord = 'stop';

while (true) {
    const inputWord = String(prompt("Enter words here. Type 'stop' to quit: "));

    if (inputWord.toLowerCase() === validWord && words.length === 0 ) {
        console.log("You entered Stop. No words to display."); 
        break;
        
    } else if (inputWord.toLowerCase() === validWord) {
        console.log(`You entered the following words: ${words}`); 
        break;
    } else {
        words.push(inputWord); 
    }
}    


