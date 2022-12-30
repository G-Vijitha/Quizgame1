// import chalk from 'chalk';
var readline = require("readline-sync");
// const chalk = require('chalk');

var score = 0;
// var ans = "yes";
var questions =
  [
    {
      question:
        `1. How many legs does a butterfly have? 
        a) 2 
        b) 4
        c) 6
        d) 8\n
        Select option:`,
      answer: "c"
    },
    {
      question:
        `2. What is the maximum running land speed of Crocodile	?
        a)	5 KMPL
        b)	12 KMPL
        c)	15 KMPL
        d)	17 KMPL\n
        Select option:`,
      answer: "d"
    },
    {
      question:
        `3. Which is the longest snake in the World	?
        a)	Black Mamba
        b)	Puff Adder
        c)	Reticulated Python
        d)	Anaconda\n
        Select option:`,
      answer: "c"
    },
    {
      question:
        `4. What is the fastest of all birds	?
        a)	Blood phesant
        b)	Swift
        c)	Sparrow
        d)	None\n
        Select option:`,
      answer: "b"
    },
    {
      question:
        `5. What is a rhinos horn made of ?
        a)	Bones
        b)	Collagen
        c)	Fibroin
        d)	Kerotin\n
        Select option:`,
      answer: "d"
    },
  ];

function welcome() {
  var userName = readline.question("Enter your name: ");
  // console.log(chalk.blue('Hi') + userName + " Welcome to PG NEET Short Quiz" + chalk.red('!'))
  console.log('\n' + " Hi " + userName + " Welcome to Quiz \n");
  console.log(" Your Quiz questions: \n");

}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currqstn = questions[i];
    play(currqstn.question, currqstn.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score + "/5");
}

// let questionIdx = 0;
function play(question, answer) {
  var userAns = readline.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("  \nCorrect Answer!");
    score++;
  }
  else {
    console.log("  \nWrong Answer!\n");
    console.log("Ans: " + answer)
    // score++;
  }
  console.log('\n');
}

welcome();
game();
showScores();

