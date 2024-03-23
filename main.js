#! usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const finalRandomNumber = randomNumber;
const product = await inquirer.prompt([{
        message: "Enter your predicted number", type: "number", name: "predicted_number"
    }]);
if (product.predicted_number === finalRandomNumber) {
    console.log("Congratulaitons, You have done a great job!!");
}
else {
    console.log("Try Again, Next Time!");
}
