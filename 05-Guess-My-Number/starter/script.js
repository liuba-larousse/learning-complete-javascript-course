'use strict';

// const test = document.querySelector('.message');
// console.log(test.textContent);
// test.textContent = 'Hey';
// console.log(test.textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let score = document.querySelector('.score');
let message = document.querySelector('.message');
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  console.log(Number(document.querySelector('.guess').value));
  // When no input
  if (!guess) {
    message.textContent = '🐽 No Number';
    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = '💫 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreNumber >= 1) {
      message.textContent =
        guess > secretNumber
          ? '🚀 The Number is too high'
          : '🛀 The Number is too low';
      scoreNumber--; // decrease the score
      score.textContent = scoreNumber;
    } else {
      message.textContent = ' 👻 You lost the game';
      score = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
