"use strict"
const map = new WeakMap();
/* key only object */
let a = {a:1}
let b = {b:1}
map.set(a, "testA")
map.set(b, "testB")
console.log(map.get(a))
console.log(map.has(b))
a = null
console.log(map)
/*setTimeout(()=>{
  console.log(map)
},1000)*/

let cache = new WeakMap();

function getValue(obj) {
  if(!cache.has(obj)){
    let res = 1;
    cache.set(obj, res);
  }
  return cache.get(obj)
}

const result = getValue(b)
console.log("HHHH")
console.log(result)

console.log("DZ WEakMap")
const key = {x:25}
let key1 = {}
const foo = new WeakMap()
foo.set(key, "student").set(key1, "cellog")
console.log(foo.get(key))
key1 = null
console.log(foo.get(key1))
const userCache = new WeakMap()
const user1 = {name: "Vasya"};
const user2 = {name: "Petya"};

function cacheUser(object) {
  if(!userCache.has(object)){
    userCache.set(object, Date.now())
    return("This add userCache")
  }
  return userCache.get(object)
}

console.log(cacheUser(user1))
console.log(cacheUser(user2))
console.log(cacheUser({}))
console.log(cacheUser(user1))