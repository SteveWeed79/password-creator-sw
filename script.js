// Assignment Code
var generateBtn = document.querySelector("#generate");

// var generatePassword = "";

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var otherChar = ["!", "@", "#", "$", "%", "&", "*"];

var storage = []


function generatePassword() {
  var getCount = prompt("Select a password length of at least 8 characters and no longer then 128 characters.")
  if (getCount > 7 && getCount < 129) {
    console.log("password is the correct length  " + getCount);
  } else if (getCount = undefined) {
    alert("Your password must be at least 8 characters long and no more then 128");
    console.log("Pasword is incorrect length");
    return
  } else {
    alert("Your password must be at least 8 characters long and no more then 128");
    console.log("Pasword is incorrect length");
    return
  }

  var getNum = confirm("Do you want numbers in your password?");
  if (getNum == true) {
    console.log("Numbers Selected");
    var storage = numbers.concat(storage);
    console.log(storage)
  }
  var getLower = confirm("Do you want lowercase letters in your password?");
  if (getLower == true) {
    console.log("lowercase letters selected");
    var storage = lettersLower.concat(storage)
  }

  var getUpper = confirm("Do you want uppercase letters in your password?")
  if (getUpper == true) {
    console.log("Uppercase letters selected")
    var storage = lettersUpper.concat(storage)
    console.log(storage)
  }

  var getChar = confirm("Do you want special characters in your password? " + otherChar)
  if (getChar == true) {
    console.log("Characters selected");
    var storage = otherChar.concat(storage);
    console.log(storage);
  }

  if (getNum === false && getLower === false && getUpper === false && getChar === false) {
    alert("You must select at least on character type.")
    return
  }

  var loopHolder = parseInt(getCount, 10);
  var passHolder = []
  for (let i = 0; i < loopHolder; i++) {
    var randomSel = storage[Math.floor(Math.random() * storage.length)];
    passHolder.push(randomSel);
  }
  var printReady = passHolder.join('');
  document.getElementById("password").innerHTML = printReady;
  console.log(storage.length);
  console.log(loopHolder);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


