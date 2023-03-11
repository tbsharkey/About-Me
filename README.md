# LAB - 02

## About Me

I built a simple webpage that includes biographical information on myself and asks the user a series of questions. The user is greeted, asked the questions, and then thanked for participating.

### Author: Tom Sharkey

### Links and Resources

* [Github Repo](https://github.com/tbsharkey/About-Me)

### Lighthouse Accessibility Report Score

![Lighthouse report](/img/lighthouse-report.png)

### Reflections and Comments

This was a good exercise with Javascript reinforcing the basic concept of if statements. 

# LAB - 03

## About Me

Continuning on with this same repo I will be adding additional content for the third lab. The following user stories need to be implemented:

As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.

Convert your work experience and education summary into an unordered list using HTML
As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.

Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.
As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
Add a screenshot of your score to your README.md file.

### Author: Tom Sharkey

### Links and Resources

* [Github Repo](https://github.com/tbsharkey/About-Me)

### Lighthouse Accessibility Report Score

![Lighthouse report](/img/lighthouse-report2.png)

### Reflections and Comments

This was rather challenging in the use of loops and making everything work. I had to open a REPL sandbox as it took many expierments to get things where I wanted them to be. I made minimal changes to the html and CSS files. 

# LAB - 04

## About Me

For the fourth lab:
I was the Navigator for this lab.
Heather Halcomb was the driver.

1. How To Get Code Ready For Work
Be sure to follow these instructions VERY carefully.

Note: Before starting these steps, make sure that both of your repositories are ‘clean’: in other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.

Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Slack.

The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in class.

The Driver then goes to their fork of the repo (the URL should have the Driver’s GitHub name in it) and copies the link to that repo (the link have the Driver’s GitHub name in it and should end in .git).

Inside of the Driver’s main work directory on their laptop, make a directory with your partner’s name and then navigate (cd) into it. From there, enter the command git clone the-link-you-copied. That will create a local version of the forked repo on the Driver’s laptop.

cd into that directory and enter code . in the terminal to open all of the files in VSCode.

Start working on the code!

2. Extend and Refine
You’ll be making some edits to each other’s sites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (a-c-p) to place the code on GitHub and preserve a versioned history of your work.

Move the logic for all questions into functions: Today we learned about functions, and now we’ll move the logic for the individual questions into separate functions, and call those functions to run the game.

In its most basic sense, this is pretty simple and straightforward: ‘wrap’ the logic and variables for a given question with function someFuncNameYouChoose() { at the beginning, and add a closing curly brace } at the end. To make the function execute, just call it afterwards: someFuncNameYouChoose(); After completing this step the game should behave exactly as it did before. a-c-p

Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p

3. Push to GitHub; Make a Pull Request
Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it’s time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.

From the Driver’s repo that is a fork of the Navigator’s repo, hit the green button that says ‘Create pull request’.

Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command ‘git pull origin main’ to retrieve the modified code from GitHub.

When everything is finished for one person’s project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

4. Pair Programming Basics
In pair programming, there are two developers working on a single body of code on a single computer.
One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator’s code by way of forking and cloning the Navigator’s repository.
The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
The Navigator does not touch the keyboard, nor does the Navigator work on their laptop “on the side”. The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they’re working on together.
The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person’s code. Remember to watch the clock and determine the best point to swap roles.
In the case of an odd number of students, one group will have three members and you should rotate through three roles: Driver, Navigator, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.
Stretch Goals
Work from collections of like data: Create 3 arrays, one for each of: your questions, the correct answers, and the two possible responses. (The same applies if you’ve added in any other pieces to the questions besides the most basic structure.) Replace that content in the functions by accessing the arrays.

Make it DRY: Reduce the yes/no questions from five functions to one function, and then use a ‘for’ loop to iterate through the arrays and call the function for each question.

Code review: Take time to explore each other’s CSS and talk about how it is organized and what it is doing. Make suggestions for how it can be improved. Integrate your partner’s suggestions to improve your own styling.

Improve accessibility: Collaborate on achieving better scores on accessibility audits. Include a screenshot of your new audit score in your README.md file.

### Author: Tom Sharkey and Heather Halcomb

### Links and Resources

* [Github Repo](https://github.com/tbsharkey/About-Me/tree/lab-04)

### Lighthouse Accessibility Report Score

![Lighthouse report](/img/lighthouse-report3.png)

### Reflections and Comments

This was my first time pair programming with a classmate. We spent extra time making sure we were caught up in our abilities and asked a graduate to assist us as we were on a later schedule. He was a great resource and really broke down how functions worked and the various steps of refactoring. I was able to make some fairly easy changes to Heather's project that really make the appearance of her webpage pop out. It has also been a good oppurtunity to get to know one of my classmates which is hard given that we are all remote. I do need to continue to solidy my knowledge on loops and functions going forward.