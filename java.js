'use strict';

let userName=prompt('What is your name?');
alert ('Welcome to the Michael Ryan information kiosk, ' + userName + '!');

let favoriteGame = prompt('Is The Legend of Zelda my favorite game?');
let lowerFavoriteGame = favoriteGame.toLowerCase();

switch (lowerFavoriteGame) {
    case 'yes':
        //console.log ('That is correct!');
        alert ('Correct!');
        break;
    case 'y':
         //console.log ('That is correct!');
         alert ('Correct!');
        break;
     case 'true':
         //console.log ('That is correct!');
        alert ('Correct!');
        break;
     case 't':
        //console.log ('That is correct!');
        alert ('Correct!');
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
        break;
    case 'n':
         //console.log ('Correct!  Pluto is my favorite planet. ');
         alert ('Correct!  Pluto is my favorite planet.');
        break;
     case 'false':
         //console.log ('Correct!  Pluto is my favorite planet.');
        alert ('Correct!  Pluto is my favorite planet.');
        break;
     case 'f':
        //console.log ('Correct!  Pluto is my favorite planet.');
        alert ('Correct!  Pluto is my favorite planet.');
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
        break;
    case 'y':
         //console.log ('Correct!');
         alert ('Correct!');
        break;
     case 'true':
         //console.log ('Correct!');
        alert ('Correct!');
        break;
     case 't':
        //console.log ('Correct!');
        alert ('Correct!');
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
        break;
    case 'y':
         //console.log ('Correct!');
         alert ('Correct!');
        break;
     case 'true':
         //console.log ('Correct!');
        alert ('Correct!');
        break;
     case 't':
        //console.log ('Correct!');
        alert ('Correct!');
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
        break;
    case 'y':
         //console.log ('Correct!');
         alert ('Correct!');
        break;
     case 'true':
         //console.log ('Correct!');
        alert ('Correct!');
        break;
     case 't':
        //console.log ('Correct!');
        alert ('Correct!');
        break;
     default:
        //console.log ('Incorrect. Green is my favorite color.');
        alert ('Incorrect. Green is my favorite color.');
}