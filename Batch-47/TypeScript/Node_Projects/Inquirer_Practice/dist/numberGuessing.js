import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 10;
console.log('Guess the number between 1 and 100. You have 10 attempts.');
rl.on('line', (input) => {
    const guess = parseInt(input.trim(), 10);
    if (isNaN(guess)) {
        console.log('Invalid input. Please enter a number.');
        return;
    }
    if (guess === randomNumber) {
        console.log('Congratulations! You guessed the number.');
        rl.close();
        return;
    }
    guessCount--;
    if (guessCount === 0) {
        console.log(`Sorry, you ran out of attempts. The number was ${randomNumber}.`);
        rl.close();
        return;
    }
    const hint = guess > randomNumber ? 'smaller' : 'larger';
    console.log(`Wrong! The number is ${hint} than ${guess}. You have ${guessCount} attempts left.`);
});
