///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordText.value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////


//object containing the initial type possibilities
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = [];

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
generatedPassword.number = confirm('Do you want numbers included?');
generatedPassword.specialCharacter = confirm('Do you want special characters included?');
generatedPassword.capitol = confirm('Do you want uppercase letters included?');
generatedPassword.lowercase = confirm('Do you want lowercase letters included?');

//check values entered into generatedPassword
if (!generatedPassword.characters >= 8 && !generatedPassword.characters <= 128){
  alert("Please choose a valid number of characters.");
  generatedPassword.characters = prompt("Choose a length for password. \n Between 8 -128 characters.");
}

if (generatedPassword.number){
  
}

if (generatedPassword.specialCharacter){
  
}

if (generatedPassword.capitol){
  
}

if (generatedPassword.lowercase){
  
}

if (!generatedPassword.number || !generatedPassword.specialCharacter || !generatedPassword.capitol || !generatedPassword.lowercase){

}

//for loop to randomize each character in the total length of password that was selected
for (let i = 0; i <= generatedPassword.characters; i++){
  finalPassword.push (possibleChoices[Math.floor(Math.random () * possibleChoices.length)])
}


//validate the requirements selected are met by generated password.

console.log(generatedPassword);

}