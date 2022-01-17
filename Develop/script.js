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

const allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allNumbers = [0, 1, 2, 3, 5, 6, 7, 8, 9];
const allSpecialChar = ["!","@","#","$","%","^","&","*","+","-"];
var j = 0;
var count = 0;
var typesUsedCount = 0;

var lowerCaseRando = false;
var UperCaseRando = false;
var NumbersRando = false;
var SpecialRando = false;


/*---------------------------RANDOM NUMBER GENERATORS-------------------------------*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function randomizeCharacters() {
  if(CharTypes[0] === true){
    lowerCaseRando = getRndInteger(1, allLowerCase.length);
    console.log(lowerCaseRando);
  }
  if(CharTypes[1] === true){
    UperCaseRando = getRndInteger(1, allUpperCase.length);
    console.log(UperCaseRando);
  }
  if(CharTypes[2] === true){
    NumbersRando = getRndInteger(1, allNumbers.length);
    console.log(NumbersRando);
  }
  if(CharTypes[3] === true){
    SpecialRando = getRndInteger(1, allSpecialChar.length);
    console.log(SpecialRando);
  }
}




/* -----------------MAIN FUNCTION ---------------------------------------------------------*/

function generatePassword() {
  PassCharCount = CharCount(); 
  defineCharTypes();
  console.log(CharTypes);
  randomizeCharacters();
  }












/*---------------------------------- INTERACTION 1 -----------------------------------

Generates 1st alert window, requesting user to define the number of characters.
  
-------------------------------------------------------------------------------------*/

var CharCount = function() {

  var userCharNum = 0;
  while(userCharNum < 8 || userCharNum > 128) {
    userCharNum = window.prompt('How long do you want your password to be? (Min: 8 - Max: 128) ');
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

Resets char type selections and requests user for type selection
  
  -------------------------------------------------------------------------------------*/

function defineCharTypes() {
  CharTypes = [false, false, false, false];
 

  while(CharTypes[0] === false && CharTypes[1] === false && CharTypes[2] === false && CharTypes[3] === false){
    CharTypes[0] = window.confirm("Include Upper Case characters?");
    CharTypes[1] = window.confirm("Include Lower Case characters?");
    CharTypes[2] = window.confirm("Include Numbers?");
    CharTypes[3] = window.confirm("Include Special Characters?");
    if(CharTypes[0] === false && CharTypes[1] === false && CharTypes[2] === false && CharTypes[3] === false){
      window.alert("You have to select at least one option. Let's try again!");
    }
    else{
      window.confirm("You Have selected: "  + "\nUpper Case: " + CharTypes[0] + "\nLower Case: " + CharTypes[1] + "\nNumbers: " + CharTypes[2] + "\nSpecial Characters: " + CharTypes[3]);
      break;
    }
  }
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

