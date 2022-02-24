const word = String(prompt("Enter a word here:"));
//convert input word to
inputWord = word.toLowerCase(); 
let count = 0;
reverseWord = "";

//check if char in the word is vowel
for (i=0; i<inputWord.length; i++){
    if (inputWord[i] == 'a'|| inputWord[i] == 'e'|| inputWord[i] == 'i'|| inputWord[i] == 'o'|| inputWord[i] == 'u'){
    count++;
    }
}
for (i = (inputWord.length - 1); i >=0; --i){
    reverseWord = reverseWord + inputWord[i];
  }
  if (reverseWord === inputWord) {
      console.log(`${inputWord} is a palindrome`)

  } else {
    console.log(`${inputWord} is not a palindrome`)
  }

console.log(`${inputWord} has ${count} vowels`); 