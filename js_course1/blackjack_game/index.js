let player ={
    name:"David",
    chips:145,
    
}
let sum = 0
let hasBlackJack=false
let isAlive=false
let message = ''
//storing the message paragraph from html
let message_el=document.getElementById('message-el')
//let sum_el=document.getElementById('sum-el')
let sumEl=document.querySelector('#sum-el')
let cardEl=document.querySelector('#card-el')
let cards=[]//array -ordered list of items

playerEL=document.getElementById("player-el")

// Render the player's name and chips in playerEl
playerEL.textContent=player.name + " : "+"$ "+ player.chips

function getRandomCards(){
    //generates the random number upto 13
    let randomNumber= Math.floor(Math.random()*13)+1
    //A = 1 and J,Q,k=10 condition check
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else {
        return randomNumber
    }
}
function startGame(){
    let firstCard = getRandomCards()
    let secondCard=getRandomCards()
    isAlive=true
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
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
    if (isAlive==true && hasBlackJack==false)
    {
        let card = getRandomCards()
        sum+=card
        cards.push(card)
         // console.log(cards)
        renderGame()
    }
    
    
}

