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
let Password = new Array(128);

const allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allNumbers = ["0","1" ,"2", "3","4","5","6","7","8","9"];
const allSpecialChar = ["!","@","#","$","%","^","&","*","+","-"];
var count = 0;
var typesUsedCount = 0;

var lowerCaseRando = false;
var UpperCaseRando = false;
var NumbersRando = false;
var SpecialRando = false;


/*---------------------------RANDOM NUMBER GENERATORS-------------------------------*/


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function randomizeCharacters() {

  var CharTypeCount=0;
  var j = 0;
  while(CharTypeCount < PassCharCount) {
    if(CharTypes[0] === true){
      UpperCaseRando = getRndInteger(1, allUpperCase.length);
      CharTypeCount++;
      console.log(UpperCaseRando);
      console.log(allUpperCase[UpperCaseRando]);
      Password[0 + j] = allUpperCase[UpperCaseRando];
      console.log(Password);
      j++;
    }
    if(CharTypes[1] === true){
      lowerCaseRando = getRndInteger(1, allLowerCase.length);
      CharTypeCount++;
      console.log(lowerCaseRando);
      console.log(allLowerCase[lowerCaseRando]);
      Password[0 + j] = allLowerCase[lowerCaseRando];
      console.log(Password);
      j++;
   
    }
    if(CharTypes[2] === true){
      NumbersRando = getRndInteger(1, allNumbers.length);
      CharTypeCount++;
      console.log(NumbersRando);
      console.log(allNumbers[NumbersRando]);
      Password[0 + j] = allNumbers[NumbersRando];
      console.log(Password);
      j++;
    }
    if(CharTypes[3] === true){
      SpecialRando = getRndInteger(1, allSpecialChar.length);
      CharTypeCount++;
      console.log(SpecialRando);
      console.log(allSpecialChar[SpecialRando]);
      Password[0 + j] = allSpecialChar[SpecialRando];
      console.log(Password);
      j++;
    }
    console.log(CharTypeCount); 
  }
  let answer = Password.toString();
  console.log(Password);
  console.log(answer);
  return answer;
}


/* -----------------MAIN FUNCTION ---------------------------------------------------------*/

function generatePassword() {
  PassCharCount = CharCount(); 
  console.log(PassCharCount);
  defineCharTypes();
  console.log(CharTypes);
  Password = randomizeCharacters(); 
  console.log(Password);
  return Password;
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
      window.confirm("You selected " + userCharNum + " characters. Correct?");
      console.log(userCharNum);
      PassCharCount = userCharNum;
      return PassCharCount;
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
      console.log(CharTypes);
      return CharTypes;
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

