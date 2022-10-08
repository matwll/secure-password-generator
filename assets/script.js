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
}

//object containing the initial type possibilities
let generatedPassword = {
  characters: 8,
  number: true,
  specialCharacter: true,
  capitol: true,
  lowercase: true,
}


//user prompts to set values of the object for password requirements
generatedPassword.characters = prompt("Choose a length for password. \n Between 8 -128 characters.");
generatedPassword.number = confirm('Do you want numbers included?');
generatedPassword.specialCharacter = confirm('Do you want special characters included? \n i.e.');
generatedPassword.capitol = confirm('Do you want uppercase letters included?');
generatedPassword.lowercase = confirm('Do you want lowercase letters included?');