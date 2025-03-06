const userChoicemsgEl = document.querySelector("p.userPick-el")
const computerChoicemsgEl = document.querySelector("p.computerPick-el")
const resultEl = document.querySelector("p.result-el")

function generateRandomComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1
    if(choice==1){
        return "ROCK"
    }
    else if(choice==2){
        return "PAPER"
    }
    else if(choice==3){
        return "SCISSOR"
    }
}


function startGame(userChoice){
    let userWon = false
    let isDraw = false
    const computerChoice = generateRandomComputerChoice()
    userChoicemsgEl.textContent="You Picked "+userChoice
    computerChoicemsgEl.textContent="Computer Picked "+computerChoice

    if(userChoice==computerChoice){
        resultEl.textContent= "DRAW"
        isDraw = true
    }
    else if(userChoice == 'ROCK'){
        if(computerChoice=='SCISSOR'){
            resultEl.textContent= "You WON"
            userWon = true
        }
        else{   
            resultEl.textContent= "You LOST"
        }
    }
    else if(userChoice == 'PAPER'){
        if(computerChoice=='ROCK'){
            resultEl.textContent= "You WON"
            userWon = true
        }
        else{
            resultEl.textContent= "You LOST"
        }
    }
    else {
        if(computerChoice=='PAPER'){
            resultEl.textContent= "You WON"
            userWon = true
        }
        else{
            resultEl.textContent= "You LOST"
        }
    }

    if(isDraw){
        resultEl.innerHTML += '<i class="fa-solid fa-face-meh"></i>'
    }
    else if(userWon){
        resultEl.innerHTML += '<i class="fa-solid fa-face-smile"></i>'
    }
    else{
        resultEl.innerHTML +='<i class="fa-regular fa-face-frown"></i>'
    }
}