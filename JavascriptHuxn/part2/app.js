// console.log(`Hello`)

// const { useReducer } = require("react");

// console.log('This ia some \
//     random Text');

//TEMPLATE LIERALS  
// console.log(`This is some random
//     text `)

// console.log(`${2+2}`)

// const firstName ="David"
// const lastName="Maharjan"
// console.log(`My name is ${firstName} ${lastName}`)
// console.log(`${["one","two","three"]}`)
// function info(){
//     return `My name is David Maharjan`
// }
// console.log(`${info}`)
// console.log(`${info()}`)

// const text=`The quick
// brown fox
// jumps over
// the lazy dog`;
// console.log(text)

//Arrow functions

// function greet(username){
//     return `Hello ${username}`
// }
// console.log(greet('David'))

// const greet=(username)=>{
//     return `Hello ${username}`
// }
// console.log(greet('David'))

// setTimeout(()=>{
//     console.log("Hello");
//     setTimeout(()=>{
//         console.log("Hey");
//         setTimeout(()=>{
//             console.log('Namaste');
//             setTimeout(()=>{
//                 console.log('HI');
//                 setTimeout(()=>{
//                     console.log('Bonjour');
//                 },2000)
//             },2000)

//         },2000)
//     },2000)
// },2000)

//Enhanced object literals

// function user(name,age,work){
//     return{
//         name,
//         age,
//         work,
//         intro(){
//             console.log(`My name is ${name} & I'm {age} years old.I am a ${work}`)
//         }
//     };
// }
// const huxn =user("David",23,"Programmer");
// const alex=user("Alex",20,"Designer")
// console.log(huxn)
// console.log(alex.intro())

// let a=1; 
// let b=2;
// let c=3;

// const obj = {
//     a,
//     b,
//     c
// }
// console.log(obj)

// const lib={
//     // sum(a,b){
//     //     return a+b
//     // },
//     // mul(a,b){
//     //     return a*b
//     // }
//     sum:(a,b)=>a+b,
//     mul:(a,b)=>a*b
// }
// console.log(lib.sum(2,3))
// console.log(lib.mul(2,3))

// const getPersonEs6=(name,age,height)=>{
//     return{
//         name,
//         age,
//         height
//     };
// }
// console.log(getPersonEs6("David",23,300)) 

// function countTo5(count=false){
//     if(count===true){
//         for(let i=1;i<=5;i++)
//         {
//             console.log(`count: ${i}`)
//         }
//     }
// }
// countTo5(true)

//problem no 1

// const rating=(rate=0)=>{
//     if(rate ===5){
//         console.log(`High Ratings :)`);
//     }
//     else if(rate ===0){
//         console.log(`Low Ratings :(`);
//     }

// }
// rating()


//problem no 2

// const multiply=(a,b=1)=>{
//     return a*b
// }
// console.log(multiply(2,2))



//Spread operator in JS
//Expand array into individual elements
// function giveMe4(a,b,c,d){
//     console.log("a",a)
//     console.log("b",b)
//     console.log("c",c)
//     console.log("d",d)

// }

// const colors=['red','green','blue','teal']
// giveMe4(...colors)

// const strNums =['one','two','three']
// const moreStrNums =['four','five','six']
// const concat = [...strNums,...moreStrNums]
// console.log(concat) 

// let people=['David','Hari','Jordan'];
// const allPeople = ["kumar",...people,"alex"]
// console.log(allPeople)

// const obj ={x:1,y:2}
// const obj2={z:3}
// const obj3={...obj,obj2}
// console.log(obj3)

// let person = {
//     name:"David",
//     age:19,
//     gender:"Male"
// };
// const clone ={...person, work:"programmer",address:"Kathmandu"}
// console.log(clone)


//problem 4


// let arr=[1,2,3];
// let arr2=[4,5];
// const user={
//     name:"Jen",
//     age:22,
// };
// let arrClone=[...arr,...arr2]
// let userClone={...user}
// console.log(arrClone)
// console.log(userClone)

//Rest operator

// function user(...userData){
//     console.log(userData)
// }
// user("David",19,"Programmer")

// function person(firstName,lastName,...hobbies){
//     console.log(`Name: ${firstName} ${lastName}`)
//     console.log(`hobbies: ${hobbies}`)
// }
// person("David","Maharjan","football","Singing","Dancing")

// const showAll=(...params)=>{
//     console.log(params)

// }
// showAll("Hello","Hi","Hey","Namaste")


