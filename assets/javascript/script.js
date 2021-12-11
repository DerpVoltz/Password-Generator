// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How long do you want the password?");
  var lowerCase = prompt("Do you want lowercase letters?");
  var upperCase = prompt("Do you want ippercase letters?");
  var numbers = prompt("Do you want numbers?");
  var specialCharacters = prompt("Do you want special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
