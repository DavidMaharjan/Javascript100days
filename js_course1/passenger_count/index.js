let count=0

//display welcome message
let welcome=document.getElementById('welcome-el')
let name='David'
let greeting="Hello! Welcome"+" "
welcome.innerText=greeting + name+" "
welcome.innerText+="👋"


//increment the number of people entered
let counter=document.getElementById('entered')
function increment(){
    count+=1
    //innerText only reads human readable things
    //textContent reads all the contents including hidden spaces
    counter.textContent=count
}

let saveEl=document.getElementById("save-el")
//save the number 
function save(){
    let countStr = count + " - "
    saveEl.textContent+=countStr
    count=0
    counter.textContent=count


}