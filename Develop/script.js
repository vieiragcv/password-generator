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
var lowerCaseRando = false;
var UpperCaseRando = false;
var NumbersRando = false;
var SpecialRando = false;


/*---------------------------Approach 1: PASSWORD GENERATOR ------------------

  //const allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //const allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //const allNumbers = ["0","1" ,"2", "3","4","5","6","7","8","9"];
  //const allSpecialChar = ["!","@","#","$","%","^","&","*","+","-"];
  //var count = 0;
  //var typesUsedCount = 0;
----------------------------------------------------------------------------------------------------

function randomizeCharacters() {

  var j = 0;
  console.log(j);
  console.log(PassCharCount);
  while(j < PassCharCount) {
    if(CharTypes[0] === true) {
      UpperCaseRando = getRndInteger(1, allUpperCase.length);
      Password[0 + j] = allUpperCase[UpperCaseRando];
      console.log(Password);
      j++; 
      console.log(j);
      console.log(PassCharCount);
    }
    else{}
    if(CharTypes[1] === true && j < PassCharCount) {
      lowerCaseRando = getRndInteger(1, allLowerCase.length);
      Password[0 + j] = allLowerCase[lowerCaseRando];
      console.log(Password); 
      j++; 
      console.log(j);
      console.log(PassCharCount);
    }
    else if(j === PassCharCount){
      var answer = Password.toString();
      console.log(Password);
      console.log(answer);
      return answer;
    }
    else{}
    if(CharTypes[2] === true && j < PassCharCount){
      NumbersRando = getRndInteger(1, allNumbers.length);
      Password[0 + j] = allNumbers[NumbersRando];
      console.log(Password);
      j++; 
      console.log(j);
      console.log(PassCharCount);

    }
    else if(j === PassCharCount){
      var answer = Password.toString();
      return answer;
    }
    else{}
    if(CharTypes[3] === true && j < PassCharCount){
      SpecialRando = getRndInteger(1, allSpecialChar.length);
      Password[0 + j] = allSpecialChar[SpecialRando];
      console.log(Password);
      j++; 
      console.log(j);
      console.log(PassCharCount);
    }
    else if(j === PassCharCount){
      var answer = Password.toString();
      return answer;
    }
    else{}
  }
  var answer = Password.toString();
  console.log(Password);
  console.log(answer);
  console.log(PassCharCount);
  return answer;
}
----------------------------------------------------------------------------------------------*/
/* --------------------Approach 2: PASSWORD GENERATOR ------------------------------*/

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
  console.log(rand_pass_arr);

  // until this point the function organized an array with each type of char per column. 
  // next I would have to search only the columns approved by user to be used in the random key generation.

  var finalKey = "";
  var i = 0;
  while (i < pass_length){

    if(CharTypes[0] === true){
      result_arr[i] = number_chars[getRndInteger(1, number_chars.length)];
      console.log(result_arr);
      i++;
    }
    else if(i === pass_length){
      console.log("AQUI PAROU");
      finalKey = result_arr.join();
      console.log(finalKey);
      return finalKey;
    }
    else{}

    if(CharTypes[1] === true && i < pass_length){
      result_arr[i] = upper_chars[getRndInteger(1, upper_chars.length)];
      console.log(result_arr);
      i++;
    }
    else if(i === pass_length){
      console.log("AQUI PAROU");
      finalKey = result_arr.join();
      console.log(finalKey);
      return finalKey;
    }
    else{}
    if(CharTypes[2] === true && i < pass_length){
      result_arr[i] = lower_chars[getRndInteger(1, lower_chars.length)];
      console.log(result_arr);
      i++;
    }
    else if(i === pass_length){
      console.log("AQUI PAROU");
      finalKey = result_arr.join();
      console.log(finalKey);
      return finalKey;
    }
    else{}
    if(CharTypes[3] === true && i < pass_length){
      result_arr[i] = special_chars[getRndInteger(1, special_chars.length)];
      console.log(result_arr);
      i++;
    }
    else if(i === pass_length){
      console.log("AQUI PAROU");
      finalKey = result_arr.join();
      console.log(finalKey);
      return finalKey;
    }
    else{}
  }
  finalKey = result_arr.join('').trim();

  return finalKey;
}
 /*output = shuffle_array(rand_pass_arr.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join(''); 
  document.getElementById('output').value = output; 

function shuffle_array(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
*/
/* -----------------MAIN FUNCTION ---------------------------------------------------------*/

function generatePassword() {
  PassCharCount = CharCount(); 
  console.log(PassCharCount);
  defineCharTypes();
  console.log(CharTypes); /*dont remove - shows user selection of types */
  var Password = generate_password(PassCharCount);
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

