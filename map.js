"use strict"
const wether = new Map();
wether.set("London",20).set("Moskva",17)
console.log(wether.set("Paris",12))
console.log(wether.get("London"))
console.log(wether.has("Foo"))
console.log(wether.delete("London"))
wether.clear()
console.log(wether)
const foo = [25,89]
wether.set([1,3,6,7],"array").set(true,25).set(false,"true").set(foo,"FOO")
console.log(wether.size)
console.log(wether.get(foo))