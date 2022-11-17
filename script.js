'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let highScore = 0;
let score = 15;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    displayMessage('No Number !!!');
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('Correct Answer. Please "AGAIN"');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Wrong number
  else if (guess != secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'too high !!!' : 'too low !!!');
      document.querySelector('.guess').value = '';
      //   score--;
    } else {
      score = 0;
      displayMessage("You've lost !!!");
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
