// empty array 
// const myList=[]
// console.log(myList)

// Nested Array
// const nestArr = ['one',['two', 'three'],1,true,false]
// console.log(nestArr[1])
// console.log(nestArr[1][0])

// const myLetter = ["h","e","l","l","o"]
// console.log(myLetter)

// const favSingers = ['Justin','Lee','Arijit']
// console.log(favSingers[0])
// const favNumbers=[1,2,3,4]
// const mixedArr=['string',['otherarray'],123,true]
// console.log(mixedArr[0])
// console.log(mixedArr[1])
// console.log(mixedArr[2])
// console.log(mixedArr[3])

// const fruits =[
//     "apples", "pomegranate","mango","strawberries","pineapple","grapefruit"
// ]
// console.log(fruits.length)
// fruits.push('Banana')
// console.log(fruits,fruits.length)
// fruits.pop()
// console.log(fruits)

// fruits.unshift("tomato")
// console.log(fruits)

// const fruits1 = ['apples','pomegranate','mango']
// const fruits2=['strawberries','pineapple']
// const totalFruits = fruits1.concat(fruits2)
// console.log(totalFruits)

// const p1 =['JavaScript',"Golang","Python","PHP"];
// const numbers=[3,5,2,4,1];
// console.log(p1.includes("Golang"))
// console.log(p1.join("_"))
// console.log(p1.reverse())
// console.log(p1.slice(0,2));
// console.log(numbers.sort())

//OBJECTS
// const person ={
//     firstName : "David",
//     lastName : "Maharjan",
//     age:20,
//     location:['Planet','Earth'],
//     isProgrammer: true

// };

// person.vehicle="Scooter";
// delete person.age;
// //Accessing Items from objects
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.location)
// console.log(person['firstName']);

// car = {
//     type : "Fiat",
//     model: 2012,
//     color: "red"
// }
// console.log(car)
// console.log(typeof(car))
// car.type='Toyota'
// console.log(car)
// car.wheels="offroad"
// console.log(car)

// function greet(){
//     console.log("Hello from a function")

// }
// greet();

// function sayHello(userName){
//    console.log(`Hello ${userName}`)
// }
// sayHello("David")

//return in function

// function add(x,y){
//     return x+y
// }

// const res=add(10,20)
// console.log(res)

// function myFunction(x,y){
//     return x*y

// }
// console.log(myFunction(10,20))

//function declaration
// function sayHello(){
//     console.log(`Hello`)
// }

//function expression
// const greetings=function(user){
//     console.log(`Hello ${user}`)
// }
// greetings('John')

//callback function

// showCallFunc(function(){})

// function showCallFunc(fn){
//     const value=10;
//     fn(value)
// }

// showCallFunc(function(value){
//     console.log(value)

// })

// function greet(name,cb){
//     console.log(`Hello ${name}`)
//     cb()
// }
// function cb(){
//     console.log("I am a callback function")
// }

// greet("David",cb)
// greet("Maharjan",function {
//     console.log("I am a callback function")
// })

// function showCallFunc(fn){
//     const value=10
//     fn(value)
// }
// showCallFunc(function (value){
//     console.log(value)
// })

function greet(){
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`
}
// const person={
//     name:"David",
//     age:"24",
//     greet,
// };
// console.log(person.greet())

// const person ={
//     name:"Harry",
//     age:19,
//     greet: function(){
//     return `Hello, my name is ${person.name} and I am ${person.age} years old.`
//     }
// }

// console.log(person.greet())

// JSON
// const person = {
//     "name":"John Doe",
//     "age": 20,
//     "email":"Jd@gmail.com",
//     "isSubscribed": true,
//     "hobbies":["Reading","Running","Cooking"],
//     "address":{
//         "city":"NewYork",
//         "idk":true
//     }
// }
// console.log(JSON.stringify(person))
// const parsedObj=JSON.parse(JSON.stringify(person))
// console.log(parsedObj)


//DATES in JS
// const currentDate=new Date(2024,5,25,12,30,0,0);
// console.log(currentDate)

// const date =new Date();
// const year= date.getFullYear();
// const month=date.getMonth();
// const day=date.getDay();
// const hours=date.getMinutes();
// console.log(`Year:${year}`)
// console.log(`month:${month}`)
// console.log(date.toDateString())
// date.setDate(date.getDate()+1)
// console.log(date)


//SET interval and Set timeout

//setInterval
// setInterval(()=>{
//     console.log(`This function will be executed every 2 second`)
// },2000)

//setTimeout
// setTimeout(function (){
//     console.log(`This function will be execued after 3 sec`)
// },3000)

//clearInterval

const intervalId=setInterval(function(){
    console.log(`This fuction is being executed at the Interval`)
},1000);
//stop the interval after 10 sec

setTimeout(()=>{
    clearInterval(intervalId)
    console.log('Interval Stopped')
},10000)
