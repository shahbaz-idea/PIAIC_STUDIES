import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"        
    },
    {
        type: "number",
        name: "age",
        message: "What is your age?"       
    },
    {
        type: "list",
        name: "gender",
        message: "What is your gender?",
        choices: ["Male", "Female"]        
    }
]);
console.log("Your Name is " + answer.name);
console.log("Your Age is " + answer.age);
console.log("Your Gender is " + answer.gender);