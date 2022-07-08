var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log("Your Phrase Is: " + input)

var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

var shift = parseInt(readline.question('How many letters would you like to shift? '));

var alphabetPosition = text => 
  text.split('').map(x => {
      let shiftedLetter = alphabet.indexOf(x) + shift
      alphabet[shiftedLetter]
      if (shiftedLetter > 25) {
        shiftedLetter = shiftedLetter - 26
      }
      return alphabet[shiftedLetter]
    });

console.log("Your Encripted Phrase Is: " + alphabetPosition(input).join(''));