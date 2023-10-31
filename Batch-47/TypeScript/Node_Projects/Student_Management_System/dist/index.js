import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const students = [];
console.log('Welcome to the Student Management System app!');
rl.on('line', (input) => {
    const command = input.trim().toLowerCase();
    switch (command) {
        case 'add':
            rl.question('Enter the student name: ', (name) => {
                rl.question('Enter the student ID: ', (idString) => {
                    const id = parseInt(idString, 10);
                    if (isNaN(id)) {
                        console.log('Invalid input. Please enter a valid number.');
                        return;
                    }
                    const student = { name, id, courses: [] };
                    students.push(student);
                    console.log(`Added "${name}" to the list.`);
                });
            });
            break;
        case 'list':
            console.log('Student List:');
            students.forEach((student, index) => {
                console.log(`${index + 1}. ${student.name} (${student.id})`);
            });
            break;
        case 'add course':
            rl.question('Enter the student ID: ', (idString) => {
                const id = parseInt(idString, 10);
                if (isNaN(id)) {
                    console.log('Invalid input. Please enter a valid number.');
                    return;
                }
                const student = students.find((s) => s.id === id);
                if (!student) {
                    console.log(`No student found with ID ${id}.`);
                    return;
                }
                rl.question('Enter the course name: ', (course) => {
                    student.courses.push(course);
                    console.log(`Added "${course}" to ${student.name}'s courses.`);
                });
            });
            break;
        case 'exit':
            console.log('Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid command. Please enter "add", "list", "add course", or "exit".');
    }
});
