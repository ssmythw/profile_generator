const readline = require("readline");

// create interface
// takes in options which sets the input stream and the output stream
// .question(query, callback)
//
// .close()
//

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = await rl.question("What is your name?");
const activity = await rl.question("What's an activity you like doing?");
const music = await rl.question("What do you listen to while doing that?");
const meal = await rl.question(
  "Which meal is your favourite (eg: dinner, brunch, etc.)"
);
const eat = rl.question("What's your favourite thing to eat for that meal?");
const sport = rl.question("What sport is your absolute favorite?");
const superPower = rl.question(
  "What is your superpower? In a few words, tell us what you are amazing at!"
);

console.log(`
Name: ${name}
Activity: ${activity}
Music: ${music}
Meal: ${meal}
Eat: ${eat}
Sport: ${sport}
Super Power: ${superPower}
`);
