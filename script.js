'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);


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
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent =
      'Correct Answer. Please "AGAIN"';
    document.querySelector('.number').textContent = secretNumber;
    // Wrong number
  } else if (guess < secretNumber) {
    score--;
    if (score > 0) {
        
    document.querySelector('.score').textContent = score;   
      document.querySelector('.message').textContent = 'too low !!!';
      document.querySelector('.guess').value = '';
      //   score--;
    } else {
        score = 0;
        document.querySelector('.message').textContent = "You've lost !!!";
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = score;
            }
  } else if (guess > secretNumber) {
     score--;  
    if (score > 0) {
        
        document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'too low !!!';
      document.querySelector('.guess').value = '';
      //   score--;
    } else {
        score = 0;
        document.querySelector('.message').textContent = "You've lost !!!";
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = score;
            }
      
  }
});
    document.querySelector('.again').addEventListener('click', function () {
        score = 3;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        console.log(secretNumber);
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
}); 
