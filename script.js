// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var otherChar = ["!", "@", "#", "$", "%", "&", "*"];

var storage = []


function generatePassword() {
  var getCount = prompt("Select a password length of at least 8 characters and no longer then 128 characters.")
  if (getCount > 7 && getCount < 129) {
  } else if (getCount = undefined) {
    alert("Your password must be at least 8 characters long and no more then 128");
    return
  } else {
    alert("Your password must be at least 8 characters long and no more then 128");
    return
  }

  var getNum = confirm("Do you want numbers in your password?");
  if (getNum == true) {
    var storage = numbers.concat(storage);
  }

  var getLower = confirm("Do you want lowercase letters in your password?");
  if (getLower == true) {
    var storage = lettersLower.concat(storage);
  }

  var getUpper = confirm("Do you want uppercase letters in your password?");
  if (getUpper == true) {
    var storage = lettersUpper.concat(storage);
  }

  var getChar = confirm("Do you want special characters in your password? " + otherChar);
  if (getChar == true) {
    var storage = otherChar.concat(storage);
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
  
  var shuffledArray = shuffle(passHolder)
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
  }


  var printReady = shuffledArray.join('');
  document.getElementById("password").innerHTML = printReady;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


