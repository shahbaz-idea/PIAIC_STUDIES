import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const todos = [];
console.log('Welcome to the Todo List app!');
rl.on('line', (input) => {
    const command = input.trim().toLowerCase();
    switch (command) {
        case 'add':
            rl.question('Enter a new todo: ', (todo) => {
                todos.push(todo);
                console.log(`Added "${todo}" to the list.`);
            });
            break;
        case 'list':
            console.log('Todo List:');
            todos.forEach((todo, index) => {
                console.log(`${index + 1}. ${todo}`);
            });
            break;
        case 'remove':
            rl.question('Enter the number of the todo to remove: ', (indexString) => {
                const index = parseInt(indexString, 10);
                if (isNaN(index) || index < 1 || index > todos.length) {
                    console.log('Invalid input. Please enter a valid number.');
                    return;
                }
                const removedTodo = todos.splice(index - 1, 1)[0];
                console.log(`Removed "${removedTodo}" from the list.`);
            });
            break;
        case 'exit':
            console.log('Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid command. Please enter "add", "list", "remove", or "exit".');
    }
});
