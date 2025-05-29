"use strict"
const options1 = {
  style:"currency",
  currency:"RUB",
  useGrouping:false
}

const options2 = {
  style:"currency",
  currency:"USD"
}

const options3 = {
  style:"decimal"
}

const options4 = {
  style:"percent"
}

const options5 = {
  style:"unit",
  unit:"celsius"
}


console.log(new Intl.NumberFormat("ru-RU",options1).format(23000) )
console.log(new Intl.NumberFormat("en-US",options2).format(23000))
console.log(new Intl.NumberFormat("ru-RU",options3).format(23000))
console.log(new Intl.NumberFormat("ru-RU",options4).format(0.1))
console.log(new Intl.NumberFormat("ru-RU",options5).format(28))

/*Converter */

function converter(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    {name:"USD", mult:1},
    {name:"RUB", mult:1/60},
    {name:"EUR", mult:1.1}
  ]
  const initial = allCurrencies.find(c=>c.name === initialCurrency)
  if(!initial){
    return null;
  }
  const convert = allCurrencies.find(c=>c.name === convertCurrency)
  if(!convert){
    return null;
  }
  return new Intl.NumberFormat("ru-RU",{style:"currency", currency:convert.name})
  .format(sum * initial.mult / convert.mult);
}

console.log(converter(10000, "RUB", "USD"))
console.log(converter(10000, "RUB", "EUR"))
console.log(converter(10000, "EUR", "USD"))
console.log(converter(10000, "USD", "EUR"))
