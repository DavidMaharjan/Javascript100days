let firstCard = getRandomCards()
let secondCard=getRandomCards()
let sum = firstCard + secondCard
let hasBlackJack=false
let isAlive=true

let message = ''
//storing the message paragraph from html
let message_el=document.getElementById('message-el')
//let sum_el=document.getElementById('sum-el')
let sumEl=document.querySelector('#sum-el')
let cardEl=document.querySelector('#card-el')
let cards=[firstCard,secondCard]//array -ordered list of items

function getRandomCards(){
    return 5
}
function startGame(){
    renderGame()
}
function renderGame(){

    //renderout firstcard and secondcard
    cardEl.textContent="Cards: "
    for (let i=0;i<cards.length;i++)
    {
    cardEl.textContent+= cards[i] + " "
    // console.log(cards[i])


    }
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
function newCard(){

    let card = getRandomCards()
    sum+=card
    cards.push(card)
    // console.log(cards)
    renderGame()
    
}
// let sentence=["Hello", "my","name","is","David"]
// let greetingEl=document.getElementById("greetingEl")
// for (i=0;i<sentence.length;i++){
//     greetingEl.textContent+=" "+sentence[i]
// }
