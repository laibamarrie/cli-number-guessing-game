#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number.

// 2) User input for guessing number.

// 3) Compare user input with computer generated number and show result

const randomNumber =Math.floor(Math.random() * 8 + 1);

console.log("Welcome to the number guessing game");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: ",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
} else{
    console.log("You guessed the wrong number.");
}
