import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter the first number : "
    },
    {
        type:"number",
        name:"num2",
        message:"Enter the second number : "
    },
    {
        type:"list",
        name:"operation",
        message:"Selec the operation you want to perform : ",
        choices:["Add", "Subtract", "Multiply", "Divide"]
    }
]);

let result: number;

switch(answer.operation){
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("Addition of two number is : " + result);
        break;
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("Subtraction of two number is : " + result);
        break;
    case 'Multiply':
            result = answer.num1 * answer.num2;
            console.log("Multiplication of two number is : " + result);
            break;
    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log("Division of two number is : " + result);
        break;
}
