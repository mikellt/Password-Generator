var generateBtn = document.querySelector("#generate"); // Assignment Code

function writePassword() { // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); // Add event listener to generate button

function generatePassword() {// Generate Password

  var characterSet = [];// Store all needed characters in variables
  var generatedPassword = "";

  var passwordLength;

  var generateUpper;
  var generateLower;
  var generateNumber;
  var generateSpecial;

  passwordLength = window.prompt("Please enter the length you would like for your password."); // Prompt the user for their password length and store it in a variable   

  var numbers = ["1","2","3","4","5","6","7","8","9"]; // variables
  var specialCharacters = ["!","@","#","$","%","&","*"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  if ((passwordLength < 8) || (passwordLength > 128)){
    window.alert("Error!!!\nPassword length must be between 8 - 128 characters.\nPlease try again");
    return null
  } 

  if (passwordLength >= 8 && passwordLength <= 128){ // Validate the password length and make use it's a number between or equal to 8 and 128
    
    generateUpper = window.confirm("Would you like to use uppercase letters?\n(ok-yes, Cancel-No)");
    generateLower = window.confirm("Would you like to use lowercase letters?\n(ok-yes, Cancel-No)");
    generateNumber = window.confirm("Would you like to use numbers?\n (ok-yes,Cancel-No)");
    generateSpecial = window.confirm("Would you like to use special characters?\n(ok-yes, Cancel-No)");
  }

  if (generateUpper) {
    characterSet = characterSet.concat(upperCase);
  }

  if (generateLower) {
    characterSet = characterSet.concat(lowerCase)
  }
  
  if (generateNumber) {
    characterSet = characterSet.concat(numbers);
  } 
  
  if (generateSpecial) {
    characterSet = characterSet.concat(specialCharacters);
  } 
  
  if (!generateUpper && !generateLower && !generateNumber && !generateSpecial) {
    window.alert("Error! Must select at least 1 criteria. Please try again.");
  return;
}

  // generated password using randome variables for selected types

  for (var i = 0; i <= passwordLength; i++) { //using the length entered to create the password
    var index = Math.floor(Math.random()*characterSet.length)//random number that exist in index witing character set
    generatedPassword += characterSet[index]; // adding characters to generated password string.
  }
  return generatedPassword
  }
