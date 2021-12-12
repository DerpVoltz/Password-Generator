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

  if(passwordItems.lowerCase){
    characters += lowerCase;
    console.log(characters);
  }
  if(passwordItems.upperCase) {
    characters += upperCase;
  }
  if(passwordItems.symbols) {
    characters += symbols;
  }
  if(passwordItems.numbers) {
    characters += numbers;
  }

  for (var i = 0; i < passwordItems.characters; i++) {
   password += characters.charAt(Math.round(Math.random() * characters.length));
  }
  console.log(password);
  return password;
}

function passwordContent() {
  passwordItems.characters = prompt("How many characters do you want in the password?");
  
  if(passwordItems.characters >= 8 && passwordItems.characters <= 128) {
    passwordItems.lowerCase = confirm("Do you want lowercase letters?");
    passwordItems.upperCase = confirm("Do you want uppercase letters?");
    passwordItems.numbers = confirm("Do you want numbers?");
    passwordItems.symbols = confirm("Do you want special characters?");
  } else {
    alert("Length must be from 8 - 128. Try again.")
    passwordContent();
  }

  if (passwordItems.lowerCase === false && passwordItems.upperCase === false && passwordItems.numbers === false && passwordItems.symbols === false) {
    alert("Password must have some content.");
    passwordContent();
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
