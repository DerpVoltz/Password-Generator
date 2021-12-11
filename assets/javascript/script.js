// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordItems = {};
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*+=?_-"
var numbers = "1234567890"

function generatePassword() {
  passwordContent();
  console.log(passwordItems);
  password = "";
  characters = "";

  if(passwordItems)
}

function passwordContent() {
  passwordItems.characters = prompt("How many characters do you want in the password?");
  
  if(passwordItems.characters < 8 || passwordItems.characters === null) {
    alert("Must be at least 8 characters, try again.")
    passwordContent();
  } else {
    passwordItems.lowerCase = confirm("Do you want lowercase letters?");
    passwordItems.upperCase = confirm("Do you want uppercase letters?");
    passwordItems.numbers = confirm("Do you want numbers?");
    passwordItems.specialCharacters = confirm("Do you want special characters?");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
