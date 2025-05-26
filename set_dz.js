"use strict"
console.log("DZ")
/*Создай функцию, которая возвращает новый массив без дубликатов, используя Set. */
const numbers = [1, 2, 3, 2, 4, 1, 5, 6, 5];

function transformer_array_in_set(array) {
    const new_array = new Set(array)
    return [...new_array]
}

console.log(transformer_array_in_set(numbers))

const countries = new Set(["Russia", "USA", "Canada", "Russia", "France"]);

console.log(countries.has("France"))

const colors = new Set(["red", "green", "blue"]);
for(let color of colors){
  console.log(color + " !!!")
}

const guests = new Set(["Alice", "Bob", "Charlie", "David"]);

delete guests.delete("Charlie")
console.log(guests)