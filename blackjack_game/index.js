let firstCard =11
let secondCard=10
let sum = firstCard + secondCard
let hasBlackJack=false
let isAlive=true

let message = ''
//storing the message paragraph from html
let message_el=document.getElementById('message-el')
//let sum_el=document.getElementById('sum-el')
let sumEl=document.querySelector('#sum-el')
let cardEl=document.querySelector('#card-el')


function startGame(){

    cardEl.textContent="Cards: " + firstCard + "  " + secondCard
    sumEl.textContent="Sum: "+sum
    if (sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else {
        message="You're out of the game!"
        isAlive= false
    }
    message_el.textContent=message
    
}

