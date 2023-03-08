'use strict';

let name = prompt("Hello, what is your name?");
alert(`Hello ${name}, It's nice to meet you. I have a game to play with you. You will be answering a series of questions about my background.`);

let answer1 = prompt("Was I born in Missouri?");
answer1 = answer1.toUpperCase();
if (answer1 === "YES") {
//  console.log("Yes, that's correct.") 
  alert("Yes, that's correct.");
} else {
// console.log("That's incorrect, I am from Virginia originally.");
  alert("That's incorrect, I am from Virginia originally.");
};

let answer2 = prompt("Do I have more than one AWS certification?");
answer2 = answer2.toUpperCase();
if (answer2 === "NO") {
// console.log("Yes, that's correct.");
  alert("Yes, that's correct.");
} else {
//  console.log("That's incorrect, though I wish otherwise at the moment I only have one.");  
  alert("That's incorrect, though I wish otherwise at the moment I only have one.");
};

let answer3 = prompt("Did I work in the news media previously?");
answer3 = answer3.toUpperCase();
if (answer3 === "NO") {
//    console.log("Yes, that's correct.");
  alert("Yes, that's correct.");
} else {
// console.log("That's incorrect and I'm thankful it is.");  
  alert("That's incorrect and I'm thankful it is.");
};

let answer4 = prompt("Did I serve in the US Navy?");
answer4 = answer4.toUpperCase();
if (answer4 === "NO") {
 // console.log("Yes, that's correct.");   
  alert("Yes, that's correct.");
} else {
// console.log("No, this may be a technicality but I'm not going to agree with you.");
  alert("No, this may be a technicality but I'm not going to agree with you.");
};

let answer5 = prompt("Do I have any cloud certifications?");
answer5 = answer5.toUpperCase();
if (answer5 === "YES") {
// console.log("Yes, that's correct as I have two.");
  alert("Yes, that's correct as I have two.");
} else {
//    console.log("That's incorrect, give me some credit here!");
  alert("That's incorrect, give me some credit here!");
};

alert(`It was a pleasure to play this game with you ${name}. I hope you have a great day!`)