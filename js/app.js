'use strict';

let score = 0;
let name = prompt('Hello, what is your name?');
alert(`Hello ${name}, It's nice to meet you. I have a game to play with you. You will be answering a series of questions about my background.`);

const questions = [
  {
    question:'Was I born in Missouri?',
    answer:'no',
  },
  {
    question:'Do I have more than one AWS certification?',
    answer:'no',
  },
  {
    question:'Did I work in the news media previously?',
    answer:'no',
  },
  {
    question:'Did I serve in the US Navy?',
    answer:'no',
  },
  {
    question:'Do I have any cloud certifications?',
    answer:'yes',
  },
  {
    question:'What is my favorite color?',
    answer:'blue',
  },
];

function quiz() {
  for (let i = 0; i < questions.length; i++) {
    const response = prompt(questions[i].question).toLowerCase();
    if (response === questions[i].answer) {
      console.log('Correct');
      alert('Correct');
      score++;
    } else {
      console.log('Wrong');
      alert('Sorry that is not correct');
    }
  }
}

quiz();

// Question 6 which starts the third lab
function askMany(attempts = 4) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let counter = 1;
  while (counter <= attempts) {
    const guess = prompt('Enter a number between 1-10.');
    if (Number(guess) === randomNumber) {
      alert('Congratulations! You have guessed the correct number!');
      score++;
      break;
    } else if (guess > randomNumber) {
      alert('Too high, please try again.');
    } else {
      alert('Too low, please try again');
    }
    counter++;
  }
  if (counter > attempts) {
    alert(`Sorry, you didn't guess the right number within ${attempts} chances. The number is ${randomNumber}.`);
  }
}

askMany();

// Question 7
alert(`Ok ${name}, now it's time for the last guessing game.`);

const answers = [
  'Bellingham',
  'Portland',
  'Santa Cruz',
];

let cityCounter = 0;

while (cityCounter < 6) {
  let guess = prompt('Name one of my three favorite cities.');
  let match = false; 

  for (let i = 0; i < answers.length; i++) {
    if (guess === answers[i]) {
      alert("That's correct! It's one of my top three cities!");
      score++;
      match = true;
      break;
    }
  }

  if (!match) {
    alert("That's not right.");
    cityCounter++;
  } else {
    break; 
  }
}

if (cityCounter === 6) {
  alert('Sorry you are out of chances.');
}

if (score > 0) {
  alert(`It was a pleasure to play this game with you ${name}. You scored ${score} points! I hope you have a great day!)
};