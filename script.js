//The user will have to crack a 3 digit random code in 7 turns. Each time the user completes a 3 digit guess, the computer will tell him or her whether the code is higher, lower, or correct.
var code = 0;
var guessStr = "";
var guessNum = 0;
var numGuesses = 0;
var numResets = 0;

function giveCode() {
  console.log("User clicked button.");

  var num1 = Math.floor((Math.random() * 9) + 1);
  var num2 = Math.floor((Math.random() * 9));
  var num3 = Math.floor((Math.random() * 9));
  var number = num1 * 100 + num2 * 10 + num3;

  code = number;
  numResets++;

  console.log("Number is: " + code);
  console.log("Number of resets: " + numResets);

  eventOutput = document.getElementById("makeCode");
  eventOutput.innerHTML = "Code has been reset. " + numResets;
}

function guess(num) {
  guessStr += num;
  eventOutput = document.getElementById("codeFill");
  eventOutput.innerHTML = "enter code: " + guessStr;
  guessNum = parseInt(guessStr);
}

function enter() {
  numGuesses++;
  
  eventOutput = document.getElementById("answer");
  
  if (guessNum == code) {
    eventOutput.innerHTML = "correct!";
  } else {
    var str = "incorrect! try again.\n"; 
    str += "here's a hint: ";
    if (guessNum > code) {
      str += "your guess is HIGHER than the code";
    } else {     
      str += "your guess is LOWER than the code";
    }
    eventOutput.innerHTML = str;
    clearGuess();
    
  }

  function clearGuess() {
    guessNum = 0;
    eventOutput = document.getElementById("codeFill");
    eventOutput.innerHTML = "enter code: ";
  }

  function displayGuesses() {
    eventOutput = document.getElementById("numG");
    eventOutput.innerHTML = "number of guesses: " + numGuesses;

  }
}