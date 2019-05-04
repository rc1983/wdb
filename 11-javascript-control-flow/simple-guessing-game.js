//create secretNumber

var secretNumber = 9;

//ask user for guess
//casting guess as a number right away will mean we 
//dont have to cast it each time

// var guess = Number(prompt("Guess a number: "));
var stringGuess = prompt("Guess a number: ");
var guess = Number(stringGuess);

//check guess

if (guess === secretNumber) 
{
    console.log("The guess is right!");
}

//check if guess is higher
else if (guess > secretNumber)
{
    console.log("Too high guess again");
}

//otherwise
else
{
    console.log("Guess again.")
}