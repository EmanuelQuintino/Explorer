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

let timerTimeOut
let countDownPaused = true



function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')    
}

function countDown() {
    timerTimeOut = setTimeout(() => {

        if (minutes == 0 && seconds == 0) {
            return
        }

        if(seconds == 0) {
            seconds = 59
            minutes--
        }

        updateTimerDisplay(minutes, seconds--)

        countDown()

    }, 1000)
}

function addMinutes() {
    minutes += 5
    updateTimerDisplay(minutes, seconds)
}

function removeMinutes() {
    minutes -= 5
    updateTimerDisplay(minutes, seconds)
}

function zeroMinutes() {
    minutes = 0
    seconds = 0
    updateTimerDisplay(minutes, seconds)
}

function timerSelectOn(){
    displayTimer.classList.add('timerSelect')
    displayTimer.classList.remove('timerSelectOff')
}

function timerSelectOff(){
    displayTimer.classList.remove('timerSelect')
    displayTimer.classList.add('timerSelectOff')
}





function playButtonSelect() {
    playButton.classList.add('select')
    pauseButton.classList.remove('select')
    addButton.classList.remove('select')
    removeButton.classList.remove('select')
}

function pauseButtonSelect() {
    pauseButton.classList.add('select')
    playButton.classList.remove('select')
    addButton.classList.remove('select')
    removeButton.classList.remove('select')
}

function addButtonSelect() {
    addButton.classList.add('select')
    pauseButton.classList.add('select')
    playButton.classList.remove('select')
    removeButton.classList.remove('select')
}

function removeButtonSelect() {
    removeButton.classList.add('select')
    pauseButton.classList.add('select')
    playButton.classList.remove('select')
    addButton.classList.remove('select')
}



function treeSelect() {
    treeCard.classList.add('select')
    rainCard.classList.remove('select')
    coffeeCard.classList.remove('select')
    fireCard.classList.remove('select')
}

function rainSelect() {
    rainCard.classList.add('select')
    treeCard.classList.remove('select')
    coffeeCard.classList.remove('select')
    fireCard.classList.remove('select')
}

function coffeeSelect() {
    coffeeCard.classList.add('select')
    treeCard.classList.remove('select')
    rainCard.classList.remove('select')
    fireCard.classList.remove('select')
}

function fireSelect() {
    fireCard.classList.add('select')
    treeCard.classList.remove('select')
    rainCard.classList.remove('select')
    coffeeCard.classList.remove('select')
}



function treePlayAudio() {
    treeAudio.play()
    rainAudio.pause()
    coffeeAudio.pause()
    fireAudio.pause()

    treeAudio.loop = true
}

function rainPlayAudio() {
    rainAudio.play()
    treeAudio.pause()
    coffeeAudio.pause()
    fireAudio.pause()

    rainAudio.loop = true
}

function coffeePlayAudio() {
    coffeeAudio.play()
    treeAudio.pause()
    rainAudio.pause()
    fireAudio.pause()

    coffeeAudio.loop = true
}

function firePlayAudio() {
    fireAudio.play()
    treeAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()

    fireAudio.loop = true
}




playButton.addEventListener('click', () => {
    
    if (minutes > 0 || seconds > 0){
        
        playButtonSelect()
        timerSelectOn()
    
        if(countDownPaused) {
            countDown()
            countDownPaused = false
        }
    }
    else {
        alert('Incremente os minutos no botão (+) para começar')
    }
})

pauseButton.addEventListener('click', () => {
    
    pauseButtonSelect()
    timerSelectOff()
    
    clearTimeout(timerTimeOut)

    countDownPaused = true
})

addButton.addEventListener('click', () => {
    
    addButtonSelect()

    timerSelectOff()
    
    addMinutes()

    clearTimeout(timerTimeOut)

    countDownPaused = true
})

removeButton.addEventListener('click', () => {
    
    removeButtonSelect()
    timerSelectOff()
    
    if(minutes >= 5) {
        removeMinutes()
    }

    else if(minutes > 0) {
        zeroMinutes()
    }

    clearTimeout(timerTimeOut)

    countDownPaused = true
})



treeCard.addEventListener('click', () => {
    treeSelect()
    treePlayAudio()
})

rainCard.addEventListener('click', () => {
    rainSelect()
    rainPlayAudio()
})

coffeeCard.addEventListener('click', () => {
    coffeeSelect()
    coffeePlayAudio()
})

fireCard.addEventListener('click', () => {
    fireSelect()
    firePlayAudio()
})