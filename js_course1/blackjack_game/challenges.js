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
// const dice = ()=>{
//     return Math.floor(Math.random()*6)+1
// }
// console.log(dice())

//logical operartors

// let hasCompletedCourse =true
// let givesCertificate= false

// if (hasCompletedCourse==true || givesCertificate==true){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generating Certificate")
// }

// let hasSolvedChallenge =false
// let hasHintsLeft=false
// if (hasSolvedChallenge==hasHintsLeft)
// {
//     showSolution()
// }
// function showSolution(){
//     console.log("Showing the solution.....")
// }

//or statement
// let likesDocumentaries = true
// let likesStartups= false 
// if(likesDocumentaries==true || likesStartups==false){
//     recommendMovies()
// }
// function recommendMovies(){
//     console.log("Hey, checkout this new flim we think you will like it")

// }

//objects in js

// let course ={
//     title:"Learn CSS Grid for free",
//     lessons:16,
//     creator:"Per Harald Borgen",
//     length:63,
//     level:2,
//     isFree:true,
//     tags:['html','css']
// }
// console.log(course.tags)

// let castle ={
//     name:"MakwanpurGadi",
//     location:"Makwanpur",
//     price:32,
//     isAvailable:true,
//     featues:['Golfcourse','Swimmingpool','Fishpond']
// }
// console.log(castle.featues)
// console.log(castle.name)

//practice questions

//question1

// let person = {
//     name:"David",
//     age:"22",
//     country:"Nepal"
// }
// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// logData()


//question 2

// let age =67

// if(age<6){
//     console.log("free")
// }
// else if(age<=17){
//     console.log("child discount")
// }
// else if(age<=26){
//     console.log("student discount")
// }
// else if(age<=66){
//     console.log("full price")
// }
// else{
//     console.log("senoir citizen discount")
// }

//question 3 loops

// let countries =["India","China","USA","Indonesia","Pakistan"]
// console.log("The 5 largest countries in the world:")
// for (i=0;i<countries.length;i++){
//     console.log("- "+countries[i])
// }

// let largeCountries =["Tuvalu","India","USA","Indonesia","Monaco"]
// largeCountries.pop()
// largeCountries.shift() // removes array element at the beginning
// console.log(largeCountries)
// largeCountries.unshift("China")//adds array element at the beginning
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// //removes country at index 2 and 1 is number of countries
// //splice(index,noOfElementsToRemove)
// largeCountries.splice(2,1)
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday ="Tuesday"
// if (dayOfMonth==13 && weekday=="Friday"){
//     console.log("🎃👻🍬🦇💀🧡")
// }

// let hands =["rocks","paper","scissors"]

// function randomHand (){
//     return hands[Math.floor(Math.random()*3)]
// }

// console.log(randomHand())

// function sortFruits(){
//     for(i=0;i<fruits.length;i++){
//         if(fruits[i]==="apple"){
//             appleShelf.textContent+=fruits[i]
//         }
//         else{
//             orangeShelf.textcontent+=fruits[i]
//         }
//     }
// }