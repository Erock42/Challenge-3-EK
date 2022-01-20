var length = Number(prompt("How long would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How long would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', function() {
  writePassword();
});

function writePassword() {
  var password = "";
  var allowed = "";
  if (uppers) (allowed += "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) (allowed += "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) (allowed += "1234567890");
  if (symbols) (allowed += "!@#$%^&*(){}[]=<>/,.");

  console.log (allowed)

  for (var i = password; i < length; i++) {
  var randomNumber = Math.floor(Math.random() * allowed.length);
  password += allowed.charAt(randomNumber)
  console.log (password)
  }

  document.getElementById("password").value = (password)
}
