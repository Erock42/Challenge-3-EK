// Assignment code here
var passwordText = document.querySelector("#password");

 function writePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
