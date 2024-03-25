#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("WELCOME TO THE NUMBER GUESSING GAME");
const answer = await inquirer.prompt([
    {
        message: "please guess a number ",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congractulations you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
