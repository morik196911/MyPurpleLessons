'use strict';

let map = new Map([
  [1, 'd4-4'],
  [2, 'd6-6'],
  [3, 'd8-8'],
  [4, 'd10-10'],
  [5, 'd12-12'],
  [6, 'd16-16'],
  [7, 'd20-20'],
]);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRollDice(num) {
  return Math.floor(Math.random() * num) + 1;
}

function getResult() {
  let randomNumber = map.get(getRollDice(7));
  let array_number = randomNumber.split('-');
  return getRandomNumber(1, Number(array_number[1]));
}

console.log(getResult());