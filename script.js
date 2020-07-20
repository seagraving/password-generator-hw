// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

// What will the password contain?
function generatePassword() {
  var characterArray = "";
  var password = "";
  // variables for characters in the password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var specialChar = "!@#$%^&*)(_+={}[]|';:/?></?";

  // Initial password prompt
  var passLength = prompt("How many characters would you like your password to be? (8-128 characters)");

  if (passLength < 8 || passLength > 128) {

    alert("Please check length requirements and try again.");
  
      // will not allow user to continue the prompts, generates error in text box
      return "error";

    }

  

  // Password prompts after getting past initial phase
  var useLower = confirm("Press OK to include lowercase letters.");
  var useUpper = confirm("Press OK to include uppercase letters.");
  var useNum = confirm("Press OK to include numbers.");
  var useSpec = confirm("Press OK to include special characters.");
  // if statements for prompts
  if (useLower) {
    characterArray = characterArray.concat(lowerCase);
  }

  if (useUpper) {
    characterArray = characterArray.concat(upperCase);
  }

  if (useNum) {
    characterArray = characterArray.concat(num);
  }

  if (useSpec) {
    characterArray = characterArray.concat(specialChar);
  }

  // Loop for generating the password
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterArray.length);
    var randomPassword = characterArray[randomNumber];
    password += randomPassword;


  }

  // Bring password back to the generated box
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
