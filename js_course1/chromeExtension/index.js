
let myLeads=["www.examples.com","www.javascript.com"]
const inputEl= document.getElementById("input-el")
const inputBtn =document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    //console.log(myLeads)

})

for (i=0;i<=myLeads.length;i++){
    console.log(myLeads[i])
}

// let boxBtn=document.getElementById("box")
// boxBtn.addEventListener("click", function(){
//     console.log("I want to open box")
// })