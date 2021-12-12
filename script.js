// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var password = prompt("How many characters would you like your password to have?");
var character = "Would you like to include special characters?";
var smallAlpha = "Would you like to include lower case letters?";
var largeAlpha = "Would you like to include upper case letters";



//Write password to the #password input
function writePassword() {
    if (password  >= 8 && password <=127) {
      alert("Would you like to include special characters?");
    }
    else {
      alert("Your password must be between 8 and 126 characters in length");
    }



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}




// function message() {
//   if (password > 8 && passwordLength < 127); alert 
// } 



// if(passwordLength.length >8 && passwordLength.length <= 127); {
//   alert ("Would you like to include special characters?");
// }
// else {("Your password must be between 8 - 126 characters in length")
// }





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
