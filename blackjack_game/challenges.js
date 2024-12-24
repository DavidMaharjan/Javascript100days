// let age =20
// if (age>=21){
//     console.log("Welcome")
// }
// else{
//     console.log("You cannot enter the club")
// }

// let age=99
// if (age<100){
//     console.log("Not eligible")
// }
// else if(age===100){
//     console.log("Here is your birthday card from the King!")
// }
// else {
//     console.log("Not eligible, you have already gotten one")
// }

//arrays - ordered list of elements
let featuredPosts=[
    "Check out my Netflix clone",
    "link to github",
    "I've just relaunced my portfolio"
]

// let experience=[
//     "I've worked on some projects",
//     "I have a compputer engineering degree",
//     "I have MERN certification"
// ]

// console.log(experience[0]+". "+featuredPosts[2])

//arrays are composite data types differnt dataypes can be put in an array

// let description =[
// "David Maharjan",
// 23,
// true
// ]
// console.log(description)
// console.log(typeof(description[2]))

//adding and removing items from array

//  let cards=[7,4]
//  cards.push(6)
//  console.log(cards)

// let messages=[
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately"
// ]

// let newMessage="Same here!"

// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)


//for loops in javascript

// for (let count=10; count<=20;count+=1){
//     console.log(count)
// }

// for (let count=10; count<=100 ;count+=10){
//     console.log(count)
// }

//for loops and arrays

// let messages=[
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately",
//     "Same here"
// ]

// for (i=0;i<messages.length;i++){
//     console.log(messages[i])
// }

// let cards=[7,3,9]
// for (i=0;i<=cards.length;i++){
//     console.log(cards[i])
// }

// let player1Time =102
// let player2Time=107

// function getFastestTime(){
//     if (player1Time<player2Time){
//         return player1Time
//     }
//     else {
//         return player2Time
//     }
// }
// let fastestRaceTime = getFastestTime()
// console.log(fastestRaceTime)

// function gettotalRaceTime(){
//     return player1Time+player2Time
// }
// let totalRaceTime=gettotalRaceTime()
// console.log(totalRaceTime)

// let randomNumber =Math.random() *  6 // gives random number 0 to 6
// let flooredNumber=Math.floor(randomNumber)
// // generates random numbers from 0 and 1
// console.log(randomNumber)
// console.log(flooredNumber+1)// 1 to 6

//roll dice function in arrow style no hoisting
// if used function rollDice(){} the it is hoisted
const dice = ()=>{
    return Math.floor(Math.random()*6)+1
}
console.log(dice())