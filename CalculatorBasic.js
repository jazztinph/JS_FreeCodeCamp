// Import readline module from Node.js
const readline = require('readline');

// Create an interface to read from stdin (keyboard) and write to stdout (console)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question("What is your name? ", function(name) {
    console.log(`Hello, ${name}! Welcome to the terminal app.`);

    // Close the readline interface after input
    rl.close();
});
