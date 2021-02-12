'use strict';

function askName() {
    let userName = prompt('What is your name?');
    alert ('Welcome to the Michael Ryan information kiosk, ' + userName + '!');
}

askName();

let finalScore = 0

function favoriteGame() {
    let title = prompt('Is The Legend of Zelda my favorite game?');
    
    if (title === 'yes' || title === 'Yes' || title === 'y' || title === 'Y' || title === 'true' || title === 'True' || title === 't' || title === 'T') {
        alert ('Correct!');
        finalScore += 1
    } else {
        alert ('Incorrect. Zelda is my favorite game.');
    } 
}

favoriteGame();

function favoritePlanet() {
    let title = prompt('Is Earth my favorite planet?');
    
    if (title === 'no' || title === 'No' || title === 'n' || title === 'N' || title === 'false' || title === 'False' || title === 'f' || title === 'F') {
        alert ('Correct!');
        finalScore += 1
    } else {
        alert ('Incorrect. Pluto is my favorite planet.');
    } 
}

favoritePlanet();

function favoriteMonth() {
    let title = prompt('Is October my favorite month?');
    
    if (title === 'yes' || title === 'Yes' || title === 'y' || title === 'Y' || title === 'true' || title === 'True' || title === 't' || title === 'T') {
        alert ('Correct!');
        finalScore += 1
    } else {
        alert ('Incorrect. October is my favorite month.');
    } 
}

favoriteMonth();

function favoriteCar() {
    let title = prompt('Is the Mclaren P1 my favorite car?');
    
    if (title === 'yes' || title === 'Yes' || title === 'y' || title === 'Y' || title === 'true' || title === 'True' || title === 't' || title === 'T') {
        alert ('Correct!');
        finalScore += 1
    } else {
        alert ('Incorrect. The Mclaren P1 is my favorite car.');
    } 
}

favoriteCar();

function favoriteColor() {
    let title = prompt('Is Green my favorite color?');
    
    if (title === 'yes' || title === 'Yes' || title === 'y' || title === 'Y' || title === 'true' || title === 'True' || title === 't' || title === 'T') {
        alert ('Correct!');
        finalScore += 1
    } else {
        alert ('Incorrect. Green is my favorite color.');
    } 
}

favoriteColor();

function specialNumber() {
    let secretNumber = parseInt( prompt('Can you guess the secret number?'))
    let count = 4;
    let correctAnswer = 1;
    
    for (let i = 0; i < count; i += 1){
       if (secretNumber === correctAnswer){
          alert('You are correct!');
          finalScore += 1
          break;
       } else if (secretNumber < correctAnswer){
          alert('That is too low.');
       } else if (secretNumber > correctAnswer){
          alert('That is too high.');
       }
       if (i < count - 1){
          secretNumber = parseInt( prompt('Can you guess the secret number?'))
       }
    }
    alert ('Well done! The correct answer is 1')
}

specialNumber();

function goodEat() {
    let favoriteFood = ['gnocchi', 'pasta', 'pizza', 'jamacian beef patty', 'ramen']
    let guess = 6;

for (let i = 0; i < guess; i +=1) {
   let foodGuess = prompt('Can you guess one of my favorite foods?')
   if (foodGuess === favoriteFood[0] || foodGuess === favoriteFood[1] || foodGuess === favoriteFood[2] || foodGuess === favoriteFood[3] || foodGuess === favoriteFood[4]) {
      alert('Correct!')
      finalScore += 1
      break;
   }
   else {
      alert('Incorrect.')
   }
   alert ('Well done! I love all of these foods: ' + favoriteFood)
}
}

goodEat();

alert (finalScore + '/7 is your final score!')

alert ('Thanks for playing my game, ' + userName + '!');