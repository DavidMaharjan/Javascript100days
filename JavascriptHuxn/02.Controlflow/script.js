//if (condition) {....}
//else if(condition){....}
//else {....}

// let a =10
// let b=20

// if (a>b) {
//     console.log("a is greater than b")
// }
// else if(a===b){
//     console.log("a is equal to b")
// }
// else {
//     console.log("b is greater than a")
// }

// let password=9;
// if (password === 8){
//     console.log("Welcome")
// }
// else if(password <= 8){
//     console.log("Password is too short")
// }
// else if(password>=8){
//     console.log("Too long password " )
//     console.log("Password should be 8 characters")
// }
// else{
//     console.log("Please provide a password.")
// }

//switch (expression) {
   //case x:
      //print 
      //break
//}

// let x= 1
// let text;
// switch (x) {
//     case 0:
//         text="off"
//         break;
//     case 1:
//         text= "on";
//         break;
//     default:
//         text= "no value found";

// }
// console.log(text)

// let day ='Monday'
// switch(day){
//     case 'Monday':
//         console.log('Today is monday')
//         break
//     case 'Tuesday':
//         console.log('Today is Tuesday')
//         break
//     default:
//         console.log("Don't know what day is today")
//         break
// }

// fruit = "banana"
// switch (fruit) {
//     case "banana":
//         console.log("Banana is good!")
//         break
//     case 'orange':
//         console.log("I am not a fan of orange.")
//         break
//     case 'apple':
//         console.log("How you like them apples?")
//     default:
//         console.log("I have never heard of that fruit.")
// }

//for loop
//DRY= don't repeat yourself

/* 
for (initialExpression; condition; increment/decrement)
{
   expression
}
*/

// for (let i=0; i <=5; i++){
//     console.log("--- Outer Loop ----",i)
//     //nested loop
//     for (j=0;j<=5;j++){
//         console.log("--- Innner loop ---",j)
//     }

// }

// for (let i=1; i<=1000;i++){
//     console.log("David",i)
// }

//while loop 
/*
 while (condition) {
    expression
 }
*/

// let i=1
// while(i<=5){
//     console.log("Hello World",i)
//     i++;
    
// }

// let i=10
// while(i<=100){
//     console.log("David",i)
//     i++
// }

//do while loop 

// let i=1;
// do{
//     console.log("Hello World",i)
//     i++
// }
// while(i<=5)

// let i=20 
// do {
//     console.log("David",i)
//     i++
// }
// while(i<=400)


//logical operators
/*
1. AND (&&)
2. OR (||)
3. NOT (!)
*/

// let password = "David Webdev"
// if (password.length >=8 && password.includes("Web")){
//     console.log("Valid Password")
// }
// else {
//     console.log("Invalid Password")
// }
