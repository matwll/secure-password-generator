///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

//object containing the initial type possibilities
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabetUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharacters = ['@', '#', '!', '$', '%', '&', '/', '~'];

//arrays to store the randomized values selected
let possibleChoices = [];
let finalPassword = [];

let generatedPassword = {
  characters: 8,
  number: true,
  specialCharacter: true,
  capitol: true,
  lowercase: true,
}

//user prompt/confrims to set values of the object for password requirements
generatedPassword.characters = prompt("Choose a length for password. \n Between 8 -128 characters.");
if (generatedPassword.characters < 8 || generatedPassword.characters > 128){
  alert("Please choose a valid number of characters.");
  generatedPassword.characters = prompt("Choose a length for password. \n Between 8 -128 characters.");
}
generatedPassword.number = confirm('Do you want numbers included?');
generatedPassword.specialCharacter = confirm('Do you want special characters included?');
generatedPassword.capitol = confirm('Do you want uppercase letters included?');
generatedPassword.lowercase = confirm('Do you want lowercase letters included?');

if (generatedPassword.numbers && generatedPassword.specialCharacter && generatedPassword.capitol && generatedPassword.lowercase){
  return null;
}

//check values entered into generatedPassword
for (let i = 0; i < 5; i++){
  if (generatedPassword.number){
    possibleChoices.push (numbers[Math.floor(Math.random() * numbers.length)]);
  }
}

for (let i = 0; i < 5; i++){
  if (generatedPassword.specialCharacter){
    possibleChoices.push (specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  }
}
for (let i = 0; i < 5; i++){
  if (generatedPassword.capitol){
    possibleChoices.push (alphabetUpperCase[Math.floor(Math.random() * alphabetUpperCase.length)]);
  }
}
for (let i = 0; i < 5; i++){
  if (generatedPassword.lowercase){
    possibleChoices.push (alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
}
//for loop to randomize each character in the total length of password that was selected
for (let i = 0; i < generatedPassword.characters; i++){
  finalPassword.push (possibleChoices[Math.floor(Math.random () * possibleChoices.length)])
}


//validate the requirements selected are met by generated password.
console.log(generatedPassword);
console.log(possibleChoices);
console.log(finalPassword);

let stringPassword = finalPassword.join('');
return stringPassword;
}