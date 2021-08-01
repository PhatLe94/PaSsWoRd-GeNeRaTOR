// Assignment Code
var generateBtn = document.querySelector("#generate");

//added function to generate password
function generatePassword() {
  //Created variables with Arrays of objects
  var uppercaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];

  //empty array
  var resultArray = [];
  var userArray = [];

  uppercaseArray[1];

  // Prompts
  var numCharacter = prompt(
    "Between 8 and 128 characters, how many would you like in your password?"
  );
  var numbers = confirm("Do you want numbers in your password?");
  var uppercases = confirm("Do you want Uppercases in your password?");
  var lowercases = confirm("Do you want lowercases in your password?");
  var characters = confirm("Do you want special characters in your password?");

  //Must set conditions
  if (numbers) {
    resultArray = resultArray.concat(numbArray);
  }

  if (uppercases) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  if (lowercases) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  if (characters) {
    resultArray = resultArray.concat(characterArray);
  }
  console.log(resultArray);

  //for loop
  //function needs to stop from executing when the conditionis not  met
  for (var i = 0; i < numCharacter; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
