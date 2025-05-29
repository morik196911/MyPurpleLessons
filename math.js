"use strict"
console.log(10 === 10.0)
console.log(Number(parseInt("10",10)))
console.log(Number(parseInt("10",2)))
console.log(Number.parseFloat("33.25 sec",10))
console.log(Number.isNaN(Number("10dffgg")))
console.log(Number.isFinite(10))
console.log(Number.isInteger(10))
console.log(Number.isInteger(10.45))

console.log(10**(1/4))
console.log(10**2)
console.log(Math.sign(-100))
console.log(Math.sign(35))
console.log(Math.abs(-10000))
console.log(Math.max(1,4,6,78))
const arr = [125,-5,64,5,8]
console.log(Math.max(...arr))
console.log(Math.min(...arr))
/* round */
console.log(Math.round(1.4))
console.log(Math.round(1.4999))
console.log(Math.round(1.6))
console.log(Math.ceil(1.4))
console.log(Math.floor(1.4))
console.log(Math.trunc(1.4))
console.log(1.48962.toFixed(2))
console.log(typeof Number(1.48962.toFixed(2)))

function my_random(min, max) {
 return Math.floor(Math.random()*(max-min + 1) + min)
 //return Math.floor(Math.random()*max)
}
console.log(my_random(1,20))
/* Operator % */
console.log(15 % 2)
const isEven = (n)=>n%2 === 0;
function isEvenFunc(num) {
  return (num %2 === 0) ? true:false
}
console.log(isEvenFunc(24))
/* Разделитель чисел */
const bigNum1 = 350_000_000;
const bigNum2 = 3505000000;
const payment = 20_10;
const paymentInr = 20.10
const paymentInr2 = 2_0_1_0
/* BigInt */
console.log(Number.MAX_SAFE_INTEGER)
console.log(2**53-1)
console.log(typeof 123456879998877n)
console.log(BigInt(123554478899663322541))
/*лучше строку передавать */
console.log(typeof BigInt("123554478899663322541"))
console.log(10n + BigInt(25))





