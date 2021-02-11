'use strict';

let userName=prompt('What is your name?');
alert ('Welcome to the Michael Ryan information kiosk, ' + userName + '!');

let finalScore = 0

let favoriteGame = prompt('Is The Legend of Zelda my favorite game?');
let lowerFavoriteGame = favoriteGame.toLowerCase();

switch (lowerFavoriteGame) {
    case 'yes':
        //console.log ('That is correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
         //console.log ('That is correct!');
         alert ('Correct!');
         finalScore = finalScore + 1
        break;
     case 'true':
         //console.log ('That is correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     case 't':
        //console.log ('That is correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     default:
        //console.log ('Incorrect.  Zelda is my favorite game.');
        alert ('Incorrect. Zelda is my favorite game.');
}

let favoritePlanet = prompt('Is Earth my favorite planet?');
let lowerFavoritePlanet = favoritePlanet.toLowerCase();

switch (lowerFavoritePlanet) {
    case 'no':
        //console.log ('Correct!  Pluto is my favorite planet.');
        alert ('Correct!  Pluto is my favorite planet.');
        finalScore = finalScore + 1
        break;
    case 'n':
         //console.log ('Correct!  Pluto is my favorite planet. ');
         alert ('Correct!  Pluto is my favorite planet.');
         finalScore = finalScore + 1
        break;
     case 'false':
         //console.log ('Correct!  Pluto is my favorite planet.');
        alert ('Correct!  Pluto is my favorite planet.');
        finalScore = finalScore + 1
        break;
     case 'f':
        //console.log ('Correct!  Pluto is my favorite planet.');
        alert ('Correct!  Pluto is my favorite planet.');
        finalScore = finalScore + 1
        break;
     default:
        //console.log ('Incorrect.');
        alert ('Incorrect.');
}

let favoriteMonth = prompt('Is October my favorite month?');
let lowerFavoriteMonth = favoriteMonth.toLowerCase();

switch (lowerFavoriteMonth) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
         //console.log ('Correct!');
         alert ('Correct!');
         finalScore = finalScore + 1
        break;
     case 'true':
         //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     default:
        //console.log ('Incorrect. October is my favorite month.');
        alert ('Incorrect. October is my favorite month.');
}

let favoriteCar = prompt('Is the Mclaren P1 my favorite car?');
let lowerFavoriteCar = favoriteCar.toLowerCase();

switch (lowerFavoriteCar) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
         //console.log ('Correct!');
         alert ('Correct!');
         finalScore = finalScore + 1
        break;
     case 'true':
         //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     default:
        //console.log ('Incorrect. The Mclaren P1 is my favorite car.');
        alert ('Incorrect. The Mclaren P1 is my favorite car.');
}

let favoriteColor = prompt('Is Green my favorite color?');
let lowerFavoriteColor = favoriteColor.toLowerCase();

switch (lowerFavoriteColor) {
    case 'yes':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
    case 'y':
         //console.log ('Correct!');
         alert ('Correct!');
         finalScore = finalScore + 1
        break;
     case 'true':
         //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        finalScore = finalScore + 1
        break;
     default:
        //console.log ('Incorrect. Green is my favorite color.');
        alert ('Incorrect. Green is my favorite color.');
}

let secretNumber = parseInt( prompt('Lastly, can you guess the secret number?'))
let count = 4;
let correctAnswer = 1;
//console.log (correctAnswer);

for (let i = 0; i < count; i += 1){
   if (secretNumber === correctAnswer){
      alert('You are correct!');
      finalScore = finalScore + 1
      break;
   } else if (secretNumber < correctAnswer){
      alert('That is too low.');
   } else if (secretNumber > correctAnswer){
      alert('That is too high.');
   }
   if (i < count - 1){
      secretNumber = parseInt( prompt('Lastly, can you guess the secret number?'))
   }
}
alert ('Well done! The correct answer is 1')

let favoriteFood = ['gnocchi', 'pasta', 'pizza', 'jamacian beef patty', 'ramen']
console.log('favorite foods', favoriteFood)
let guess = 6;

for (let i = 0; i < guess; i +=1) {
   let foodGuess = prompt('Can you guess one of my favorite foods?')
   if (foodGuess === favoriteFood[0] || foodGuess === favoriteFood[1] || foodGuess === favoriteFood[2] || foodGuess === favoriteFood[3] || foodGuess === favoriteFood[4]) {
      console.log(foodGuess)
      alert('Correct!')
      finalScore = finalScore + 1
      break;
   }
   else {
      alert('Incorrect.')
   }
}
alert ('Well done! I love all of these foods: ' + favoriteFood)

alert (finalScore + '/7 is your final score!')

alert ('Thanks for playing my game, ' + userName + '!');