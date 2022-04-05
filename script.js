'use strict';
// small guessing game :)
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = (document.querySelector('.number'));
const again = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highScoreLabel = document.querySelector('.highscore');
let numGuess= 0
// const userName = alert("what is your name ?")
document.querySelector('.check').addEventListener('click', function (e) {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === secretNumber) {
//     message.textContent = 'Correct number congrats you got it in ' + numGuess + ' guesses';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highScore) {
      score = highScore;
      highScoreLabel.textContent = highScore;
      numGuess +=1
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = 'Too high';
      score--;
      scoreLabel.textContent = score;
      numGuess +=1
    } else {
      message.textContent = 'you lost the game';
      scoreLabel.textContent = 0;
    
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      message.textContent = 'Too low';
      score--;
      scoreLabel.textContent = score;
      numGuess +=1
    } else {
      message.textContent = 'you lost the game';
      scoreLabel.textContent = 0;
    }
  }
});
// again button
again.addEventListener('click', function (e) {
  score = 20;
  highScore = 0;
  const body = document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ''
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Starting guessing';
  number.style.width = '15rem';
  number.textContent = '?';
  scoreLabel.textContent = score;
  highScoreLabel.textContent = highScore;
});
