var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "?",]

var numCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9",]

var lowerCharacters = ["a", "b", "c", "d", 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]

//User Inputs

var lowerCase = ""
var upperCase = ""
var specialCase = ""
var numberCase = ""
var passwordPool = []

function questions() {
  lowerCase = confirm("Would you like to include lower case letters in your password?")
  upperCase = confirm("Would you like to include upper case letters in your password?")
  specialCase = confirm("Would you like to include special characters in your password?")
  numberCase = confirm("Would you like to include numbers in your password?")
  passwordLength = prompt("How long would you like your password to be? (Between 8 and 128)")
  //Password length verify
  while (passwordLength < 8 || passwordLength > 128) { passwordLength = prompt("Please input a password length between 8 and 128.") }
  while (isNaN(passwordLength) == true || passwordLength === "") { passwordLength = prompt("Please input a number."); }
  //Password Pool
  function generatePool() {
    passwordPool = []
    if (lowerCase) { passwordPool = passwordPool.concat(lowerCharacters); } else { }
    if (upperCase) { passwordPool = passwordPool.concat(upperCharacters) } else { }
    if (numberCase) { passwordPool = passwordPool.concat(numCharacters) } else { }
    if (specialCase) { passwordPool = passwordPool.concat(specialCharacters) } else { }

    return passwordPool;
  }

  passwordPool = generatePool()
}



//Generate password

var password = []
function generatePassword() {
  password = []
  for (let i = 0; i < Math.floor(passwordLength); i++) {
    randomSelect = Math.floor(Math.random() * passwordPool.length)
    passCharacter = passwordPool[randomSelect]
    password = password.concat(passCharacter)
  }

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  questions()
  if (!lowerCase && !upperCase && !specialCase && !numberCase) { alert("No password parameters selected: you must select at least 1 type of character to be included.") } else {
    generatePassword()
    var passwordOutput = password.join('')
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordOutput;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
