'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 3;
document.querySelector('.score').textContent = score;
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !!!"';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct Answer. Please "AGAIN"';
    // Wrong number
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low !!!';
      document.querySelector('.guess').value = '';
      //   score--;
    } else document.querySelector('.message').textContent = "You've lost !!!";
  } else if (guess > secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low !!!';
      document.querySelector('.guess').value = '';
      //   score--;
    } else document.querySelector('.message').textContent = "You've lost !!!";
  }
});
