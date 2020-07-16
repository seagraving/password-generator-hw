// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword() {
  var characterArray = "";
  var password = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var num = "0123456789".split("");
  var specialChar = "!@#$%^&*()_+={}[]|';:/?></?".split("");

  var passLength = prompt("How many characters would you like your password to be? (8-128 characters)");
    
    if (passLength < 8 || passLength > 128) {

      alert("Please check length requirements and try again.");

      writePassword();
    } else {
      
    

      var useLower = confirm("Press OK to include lowercase letters.");
      var useUpper = confirm("Press OK to include uppercase letters.");
      var useNum = confirm("Press OK to include numbers.");
      var useSpec = confirm("Press OK to include special characters.");

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

      for (var i = 0; i < passLength; i++) {
        var randomNumber = Math.floor(Math.random() * characterArray.length);

        
        
        
      }

      return password;
    }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
