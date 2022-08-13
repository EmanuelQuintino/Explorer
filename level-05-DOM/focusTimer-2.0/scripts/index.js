import Timer from "./timer.js"
import Button from "./buttons.js"
import Card from "./cards.js"


let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let displayTimer = document.querySelector('.timer')

let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let removeButton = document.querySelector('.remove')
let addButton = document.querySelector('.add')


let treeCard = document.querySelector('.tree')
let rainCard = document.querySelector('.rain')
let coffeeCard = document.querySelector('.coffee')
let fireCard = document.querySelector('.fire')

let treeAudio = document.querySelector('.treeAudio')
let rainAudio = document.querySelector('.rainAudio')
let coffeeAudio = document.querySelector('.coffeeAudio')
let fireAudio = document.querySelector('.fireAudio')


let minutes = Number(displayMinutes.textContent)
let seconds = Number(displaySeconds.textContent)


let countDownPaused = true


let timer = Timer({
    displayMinutes,
    displaySeconds,
    minutes,
    seconds,
    displayTimer
})

let button = Button({
    playButton,
    pauseButton,
    addButton,
    removeButton
})

let card = Card({
    treeCard,
    rainCard,
    coffeeCard,
    fireCard,
    treeAudio,
    rainAudio,
    coffeeAudio,
    fireAudio
})



playButton.addEventListener('click', () => {
    
    if (minutes > 0 || seconds > 0){
        
        button.playButtonSelect()
        timer.selectOn()
    
        if(countDownPaused) {
            timer.countDown()
            countDownPaused = false
        }
    }
    else if(minutes == 0 && seconds == 0){
        alert('Incremente os minutos no botão (+) para começar!')
    }
})

pauseButton.addEventListener('click', () => {
    
    button.pauseButtonSelect()

    timer.selectOff()
    timer.pause()

    countDownPaused = true
})

addButton.addEventListener('click', () => {
    
    button.addButtonSelect()
    
    minutes = timer.addMinutes()
    
    timer.selectOff()
    timer.pause()

    countDownPaused = true
})

removeButton.addEventListener('click', () => {
    
    button.removeButtonSelect()
    
    if(minutes > 5) {
        minutes = timer.removeMinutes()
    }

    else if(minutes > 0) {
        minutes = 0
        seconds = 0
        timer.zeroMinutes()
    }

    timer.selectOff()
    timer.pause()

    countDownPaused = true
})




treeCard.addEventListener('click', () => {
    card.treeSelect()
    card.treePlayAudio()
})

rainCard.addEventListener('click', () => {
    card.rainSelect()
    card.rainPlayAudio()
})

coffeeCard.addEventListener('click', () => {
    card.coffeeSelect()
    card.coffeePlayAudio()
})

fireCard.addEventListener('click', () => {
    card.fireSelect()
    card.firePlayAudio()
})