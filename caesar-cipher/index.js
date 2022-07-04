var readline = require('readline-sync');



var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log("Your Phrase is: " + input)

console.log(alphabetPosition(input))



var shift = parseInt(readline.question('How many letters would you like to shift? '));

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function alphabetPosition(text) {
    let result = ""
    for(var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }
    return result.slice(0, result.length - 1);
}