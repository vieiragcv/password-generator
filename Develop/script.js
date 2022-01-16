// Creating the main function that will execute once button is

// 1 FUNCTION TO DO IT ALL! generatePassword();
    // starts interacition with user and returns password on screen

    //1st interaction: Criteria Selection
    // 2nd interaction: Determining Length
    // 3rd interaction: Determining Acceptable Char types
      // upper case, lower case, numeric, special characters
    // 4th interaction: Validation of character minimal of 1 character type selected
function generatePassword() {
  var randomKey = CharCount(); 
  return randomKey;
}

  // generate 1st alert window

var CharCount = function() {
var userCharNum = 0;

  while(userCharNum < 8 || userCharNum > 128) {
    userCharNum = window.prompt('How long do you want your password to be? (Min: 8 - Max: 126) ');
    if(userCharNum < 8 || userCharNum > 128) {
      window.alert("Your password size cannot be smaller than 8 or bigger than 128 characters");
    }
    else {
      console.log(userCharNum);
      window.confirm("You selected " + userCharNum + " characters. Correct?");
      break;
    }
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
