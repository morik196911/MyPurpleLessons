"use strict"
const my_map = new Map();
my_map.set('цвет','фиолетовый').set(10,'десять').set({id: 1},'объект')
console.log(my_map.keys())
console.log(my_map.entries())
console.log(my_map.values())

const users = new Map();
users.set("user1",20).set("user2",18).set("user3",30)
console.log(users)
users.delete("user2")
console.log(users.has("user2"))

const people = [
  { name: 'Иван', age: 20 },
  { name: 'Ольга', age: 25 },
  { name: 'Кирилл', age: 20 },
  { name: 'Катя', age: 23 }
];

const my_people = new Map();
my_people.set(20,["Иван", 'Кирилл']).set(25,['Ольга']).set(23,[ 'Катя'])
console.log(my_people)

const alex = {name:"Alex"}
const Gena = {name:"Gena"}

const foo = new Map();
foo.set(alex,125).set(Gena,184)

const book = new Map()
book.set('Anna',"3 книги").set('Ivan' , 5).set('Olga',2)
console.log(book.has("Ivan"))
console.log(parseInt(book.get("Anna")))
book.delete("Olga")
console.log(book.size)

const u1 = {name: 'Anna'}
const u2 = {name: 'Anna'}
const userMap = new Map();
userMap.set(u1,"Morik1969@yandex.ru")
userMap.set(u2,"gmail.com")
console.log(userMap.get(u1))
console.log(userMap.get(u2))
for(let item of userMap){
  console.log(item)
}