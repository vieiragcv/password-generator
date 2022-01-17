/*  --------------------------------------- GENERAL SCOPE -----------------------------
    
1st interaction: Determining Length

2nd interaction: Determining Acceptable Char types

- upper case, 
- lower case, 
- numeric,
- special characters.

3rd interaction: Validation of character minimal of 1 character type selected  
    
-------------------------------------------------------------------------------------- */


/* ---------------- GLOBAL VARIABLES ------------------------------------------------------*/

var PassCharCount = 0;
var CharTypes = [false, false, false, false]; // [Uppder Case, Lower Case, Number, Special Characters]

/* -----------------MAIN FUNCTION ---------------------------------------------------------*/

function generatePassword() {
  PassCharCount = CharCount(); 
  defineCharTypes();
  console.log(CharTypes); 
}


 /*---------------------------------- INTERACTION 1 -----------------------------------

 CharCount function generates 1st alert window, collects and validates user's input,  
  -                                             logs on console and and returns value.
  
  -------------------------------------------------------------------------------------*/

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

 /*---------------------------------- INTERACTION 2 -----------------------------------


  
  -------------------------------------------------------------------------------------*/


// Collecting from user the characters types to be used.

function defineCharTypes() {

  while(CharTypes[0] === false && CharTypes[1] === false && CharTypes[2] === false && CharTypes[3] === false){
    CharTypes[0] = window.confirm("Include Upper Case characters?");
    CharTypes[1] = window.confirm("Include Lower Case characters?");
    CharTypes[2] = window.confirm("Include Numbers?");
    CharTypes[3] = window.confirm("Include Special Characters?");
    if(CharTypes[0] === false && CharTypes[1] === false && CharTypes[2] === false && CharTypes[3] === false){
      window.alert("You have to select at least one option. Let's try again!");
    }
    else{
      break;
    }
  }
}
/* LOGGING TO CHECK */
for (i = 0; i < 4; i++) {
  console.log(CharTypes[i]);
}
  


  /*---------------------------------- INTERACTION 3 -----------------------------------

 
  
  -------------------------------------------------------------------------------------*/


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
