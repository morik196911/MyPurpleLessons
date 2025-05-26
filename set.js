"use strict"
const fly = ["Russian","USA","London","Paris"];
const setFly = new Set(fly)
console.log(setFly)
console.log(typeof setFly)
const arr_set = [...setFly]
console.log(arr_set)
setFly.add("Keln").add("Genuya")
console.log(setFly)
console.log(setFly.has("Keln"))
console.log(setFly.has("Keln111"))

for(let foo of setFly){
  console.log(foo + "!!! size " + setFly.size)
}
for(let foo of arr_set){
  console.log(foo + "???")
}

const setObj = new Set([{a:1},{b:2}])
console.log(setObj)