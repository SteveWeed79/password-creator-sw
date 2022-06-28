// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = "";

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var otherChar = ["!", "@", "#", "$", "%", "&", "*"];

function startPW() {
  var getCount = prompt("Select a password length of at least 8 characters and no longer then 128 characters.")
  if (getCount > 8 && getCount < 129) {
    console.log("password is the correct length");
  } else {
    alert("Your password must be at least 8 characters long and no more then 128");
    console.log("Pasword is incorrect length")
  }
}

startPW()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(numbers);
