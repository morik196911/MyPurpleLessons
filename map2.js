"use strict"
const newMap = new Map([
  ["London",25],
  ["Paris",28]
])
console.log(newMap)
const object = {
  "London":16,
  "Moscow":17,
  "Keln":32
}

const newMap2 = new Map(Object.entries(object))
console.log(newMap2)
newMap2.set("Hamburg",8);
for(let[key,value] of newMap2) {
  console.log("Key "+key + " Value "+value)
}

const back_in_array = [...newMap2]

console.log([...newMap2.values()])
console.log([...newMap2.keys()])
console.log(back_in_array)

const city = new Map([
  ["London",25],
  ["Paris",28],
  ["Ladoga",7]
])
const Foo = []
for(let arr of city) {
  Foo.push(arr.reverse())
}
for(let[key, value] of Foo) {
  console.log(key + " = "+value)
}
const TT = new Map([...city].map((el)=>el.reverse()))

console.log(TT)