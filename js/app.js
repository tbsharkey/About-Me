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
    answer:'yes',
  },
  {
    question:'Did I serve in the US Navy?',
    answer:'no',
  },
  {
    question:'Do I have any cloud certifications?',
    answer:'yes',
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



// let answer1 = prompt("Was I born in Missouri?");
// answer1 = answer1.toUpperCase();
// if (answer1 === "NO") {
//   //  console.log("Yes, that's correct."); 
//   alert("Yes, that's correct.");
//   score++;
// } else {
//   // console.log("That's incorrect, I am from Virginia originally.");
//   alert("That's incorrect, I am from Virginia originally.");
// };

// let answer2 = prompt("Do I have more than one AWS certification?");
// answer2 = answer2.toUpperCase();
// if (answer2 === "NO") {
//   // console.log("Yes, that's correct.");
//   alert("Yes, that's correct.");
//   score++;
// } else {
//   //  console.log("That's incorrect, though I wish otherwise at the moment I only have one.");  
//   alert("That's incorrect, though I wish otherwise at the moment I only have one.");
// };

// let answer3 = prompt("Did I work in the news media previously?");
// answer3 = answer3.toUpperCase();
// if (answer3 === "NO") {
//   //    console.log("Yes, that's correct.");
//   alert("Yes, that's correct.");
//   score++;
// } else {
//   // console.log("That's incorrect and I'm thankful it is.");  
//   alert("That's incorrect and I'm thankful it is.");
// };

// let answer4 = prompt("Did I serve in the US Navy?");
// answer4 = answer4.toUpperCase();
// if (answer4 === "NO") {
//   // console.log("Yes, that's correct.");   
//   alert("Yes, that's correct.");
//   score++;
// } else {
//   // console.log("No, this may be a technicality but I'm not going to agree with you.");
//   alert("No, this may be a technicality but I'm not going to agree with you.");
// };

// let answer5 = prompt("Do I have any cloud certifications?");
// answer5 = answer5.toUpperCase();
// if (answer5 === "YES") {
//   // console.log("Yes, that's correct as I have two.");
//   alert("Yes, that's correct as I have two.");
//   score++;
// } else {
//   //    console.log("That's incorrect, give me some credit here!");
//   alert("That's incorrect, give me some credit here!");
// };

// Question 6 which starts the third lab
// Question 6 



function askMany(questions, attempts = 4) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let counter = 1;
  let score = 0;
  while (counter <= 4) {
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
    alert('Sorry, you didn\'t guess the right number within four chances. The number is ${randomNumber}.');
  }
  return score;
}

askMany('Ok ${name}, now it\'s time for a guessing game.');


// Question 7
alert(`Ok ${name}, now it's time for the last guessing game.`);

 const answers = [
  'Bellingham',
  'Portland',
 'Santa Cruz',
 ];

let totalScore = 0;

let cityCounter = 0;
while (cityCounter < 6) {
  let guess = prompt('Name one of my three favorite cities.');
  if (guess === 'Bellingham' || guess === 'Portland' || guess === 'Santa Cruz') {
    alert('That\'s correct! It\'s one of my top three cities!');
    score++;
    break;
  } else {
    alert('That\'s not right.');
    cityCounter++;
  }
  totalScore += score;
}
if (cityCounter === 6) {
  alert('Sorry you are out of chances.');
}
alert('It was a pleasure to play this game with you ' + name + '. You scored ' + totalScore + ' points! I hope you have a great day!');
