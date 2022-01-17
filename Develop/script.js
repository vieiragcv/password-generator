/*  --------------------------------------- GENERAL SCOPE ----------------------------
    
1st interaction: Determining Length

2nd interaction: Determining Acceptable Char types

- upper case, 
- lower case, 
- numeric,
- special characters.

3rd interaction: Validation of character types selected.
    
----------------------------------------------------------------------------------- */


/* ---------------------- GLOBAL VARIABLES ----------------------------------------*/


var PassCharCount = 0;
var CharTypes = [false, false, false, false]; // [Uppder Case, Lower Case, Number, Special Characters]
var lowerCaseRando = false;
var UpperCaseRando = false;
var NumbersRando = false;
var SpecialRando = false;


/* ------------------- PASSWORD GENERATOR -----------------------------------*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function generate_password(password_length) {

  var number_chars = '0123456789';
  var upper_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower_chars = 'abcdefghijklmnopqrstuvwxyz';
  var special_chars = '!@#$%^&*+-';
  var all_chars = number_chars + upper_chars + lower_chars + special_chars;
  var rand_pass_arr = new Array(password_length);
  var pass_length = rand_pass_arr[0];
  var result_arr = new Array(password_length);
  rand_pass_arr[0] = number_chars;
  rand_pass_arr[1] = upper_chars;
  rand_pass_arr[2] = lower_chars;
  rand_pass_arr[3] = special_chars;
  rand_pass_arr = rand_pass_arr.fill(all_chars, 4);

  // until this point the function organized an array with each type of char per column. 
  // next I would have to search only the columns approved by user to be used in the random key generation.

  var finalKey = "";
  var i = 0;
  while (i < pass_length){

    if(CharTypes[0] === true){
      result_arr[i] = number_chars[getRndInteger(1, number_chars.length)];
      i++;
    }
    else{}
    if(CharTypes[1] === true && i < pass_length){
      result_arr[i] = upper_chars[getRndInteger(1, upper_chars.length)];
      i++;
    }
    else{}
    if(CharTypes[2] === true && i < pass_length){
      result_arr[i] = lower_chars[getRndInteger(1, lower_chars.length)];
      i++;
    }
    else{}
    if(CharTypes[3] === true && i < pass_length){
      result_arr[i] = special_chars[getRndInteger(1, special_chars.length)];
      i++;
    }
    else{}
  }
  finalKey = result_arr.join('').trim();

  return finalKey;
}

/* --------------------------------MAIN FUNCTIONS----------------------------------------*/

function generatePassword() {
  PassCharCount = CharCount(); 
  defineCharTypes();
  var Password = generate_password(PassCharCount);
  return Password;
  }


/*------------------- INTERACTION 1: User input of password size-----------------------

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
    CharTypes[0] = window.confirm("Include Numbers?");
    CharTypes[1] = window.confirm("Include Upper Case characters?");
    CharTypes[2] = window.confirm("Include Lower Case characters?");
    CharTypes[3] = window.confirm("Include Special Characters?");
    if(CharTypes[0] === false && CharTypes[1] === false && CharTypes[2] === false && CharTypes[3] === false){
      window.alert("You have to select at least one option. Let's try again!");
    }
    else{
      window.confirm("You Have selected: "  + "\nUpper Case: " + CharTypes[0] + "\nLower Case: " + CharTypes[1] + "\nNumbers: " + CharTypes[2] + "\nSpecial Characters: " + CharTypes[3]);
      return CharTypes;
    }
  }
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);





