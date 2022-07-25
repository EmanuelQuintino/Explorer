let body = document.querySelector('body')
let lightDisplayButton = document.querySelector('.light')
let darkDisplayButton = document.querySelector('.dark')

let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let displayTimer = document.querySelector('.timer') 

let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let stopButton = document.querySelector('.stop')
let removeButton = document.querySelector('.remove')
let addButton = document.querySelector('.add')
let displayControls = document.querySelector('.controls')

let forestCard = document.querySelector('.forest')
let rainCard = document.querySelector('.rain')
let coffeeCard = document.querySelector('.coffee')
let fireCard = document.querySelector('.fire')
let cards = document.querySelector('.cards')
let nodeCards = document.querySelectorAll('.cards button')
let slideVolumeClick = document.querySelectorAll('.card')
let slideVolume = document.querySelectorAll('section input')

let forestAudio = document.querySelector('.forestAudio')
let rainAudio = document.querySelector('.rainAudio')
let coffeeAudio = document.querySelector('.coffeeAudio')
let fireAudio = document.querySelector('.fireAudio')
let listAudios = document.querySelectorAll('audio')

let forestVolume = document.querySelector('#forestVolume')
let rainVolume = document.querySelector('#rainVolume')
let coffeeVolume = document.querySelector('#coffeeVolume')
let fireVolume = document.querySelector('#fireVolume')

let minutes = Number(displayMinutes.textContent)
let seconds = Number(displaySeconds.textContent)

let timerTimeOut
let countDownStop = true
let darkModeOn = false
let cardActive
let animation
let lastAnimation
let animationInterval
let lastCardAnimation
let volumeSlideControl = 50



function lightMode() {
    darkDisplayButton.classList.add('hide')
    lightDisplayButton.classList.remove('hide')
    body.classList.remove('darkMode')
    
    displayTimer.classList.remove('timerDark', 'selectTimerDark')
    
    if(!countDownStop) {
        displayTimer.classList.remove('selectDark', 'selectTimerDark')
    }
    
    displayControls.classList.remove('selectDark', 'controlsDark', 'selectTimerDark')
    
    // console.log(cardActive)
    cardSelect()

    cards.classList.remove('cardsDark')

    slideVolumeClick.forEach((x) => {
        x.classList.remove('slideVolumeClick')
    })
}

function darkMode() {
    lightDisplayButton.classList.add('hide')
    darkDisplayButton.classList.remove('hide')
    body.classList.add('darkMode')
    
    displayTimer.classList.add('timerDark')
    
    if(!countDownStop) {
        displayTimer.classList.add('selectDark', 'selectTimerDark')
    }

    displayControls.classList.remove('select', 'selectDark')
    displayControls.classList.add('selectDark', 'controlsDark')

    // console.log(cardActive)
    cardSelect()

    cards.classList.add('cardsDark')

    slideVolumeClick.forEach((i) => {
        i.classList.add('slideVolumeClick')
    })   
}



function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')    
}

function countDown() {
    timerTimeOut = setTimeout(() => {

        if (minutes == 0 && seconds == 0) {
           
            stopButtonSelect()
            timerSelectOff()
            stopAudio()
            resetCard()
           
            countDownStop = true
           
            return
        }

        if(seconds == 0) {
            seconds = 60
            minutes--
        }

        updateTimerDisplay(minutes, --seconds)

        countDown()

    }, 1000)
}



function addMinutes() {
    if(seconds != 0) {
        seconds = 0
    }

    if(minutes % 5 == 0) {
        minutes += 5
    }
    else {
        minutes = Math.ceil(minutes/5) * 5
    }

    if(minutes >= 995) {
        minutes = 999
        seconds = 59
    }
    
    updateTimerDisplay(minutes, seconds)
}

function removeMinutes() {

    if(seconds != 0) {
        seconds = 0
    }

    if(minutes % 5 == 0) {
        minutes -= 5
    }
    else {
        minutes = Math.floor(minutes/5) * 5
    }

    if(minutes < 5) {
        minutes = 0
        seconds = 0
    }

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
    if(darkModeOn){
        displayTimer.classList.add('selectDark', 'selectTimerDark')
        displayTimer.classList.remove('select')

        playButton.classList.add('hide')
        pauseButton.classList.remove('hide')
    }
    else{     
        displayTimer.classList.add('select')
        displayTimer.classList.remove('selectDark')
        
        playButton.classList.add('hide')
        pauseButton.classList.remove('hide')
    }
}

function pauseButtonSelect() {
    if(darkModeOn) {        
        displayTimer.classList.remove('select', 'selectDark', 'selectTimerDark')

        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }
    else{        
        displayTimer.classList.remove('select', 'selectDark')
        
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }
}

function stopButtonSelect() {
    
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    
    if(darkModeOn) {        
        displayTimer.classList.remove('select', 'selectDark', 'selectTimerDark')
    }
    else{        
        displayTimer.classList.remove('select', 'selectDark')
    }
}

function addButtonSelect() {
    
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
    
    if(darkModeOn) {
        displayTimer.classList.remove('select', 'selectDark', 'selectTimerDark')
    }
    else{
        displayTimer.classList.remove('select', 'selectDark')
    }
}

function removeButtonSelect() {
    
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
    
    if(darkModeOn) {
        displayTimer.classList.remove('select', 'selectDark', 'selectTimerDark')
    }
    else {
        displayTimer.classList.remove('select', 'selectDark')
    }
}

function cardSelect() {
    nodeCards.forEach((card) => {
        if(card.id == cardActive) {
            if(darkModeOn) {
                card.classList.add('selectDarkImg')
                card.classList.remove('select')
            }
            else{
                card.classList.add('select')
                card.classList.remove('selectDarkImg')
            }
        }
        else{
            card.classList.remove('select', 'selectDarkImg')
        }                
    })
}



function resetCard() {
    forestCard.classList.remove('select', 'selectDarkImg')
    rainCard.classList.remove('select', 'selectDarkImg')
    coffeeCard.classList.remove('select', 'selectDarkImg')
    fireCard.classList.remove('select', 'selectDarkImg')

    cardActive = '' 
}



function cardAnimation() {
    animationInterval = setInterval(() => {
    
        let animationRandom = Math.ceil(Math.random() * 3)
        
        switch (animationRandom) {
            case 1: animation = 'cardAnimationScale';break;
            case 2: animation = 'cardAnimationRotateX';break;
            case 3: animation = 'cardAnimationRotateZ';break;
        }
        
        nodeCards.forEach((card) => {
            
            // console.log(card.id == cardActive)
            
            if(card.id == cardActive) {
                card.classList.add(animation)
                card.classList.remove(lastAnimation)
                
                lastCardAnimation = animation 
            }                
        })
            
        lastAnimation = animation
        
    }, 8000)
}



function playAudio() {
    switch(cardActive) {
        
        case 'forestCard': 
        forestAudio.play()
        rainAudio.pause()    
        coffeeAudio.pause()
        fireAudio.pause()
        forestAudio.loop = true
        break;
        
        case 'rainCard': 
        forestAudio.pause()    
        rainAudio.play()
        coffeeAudio.pause()
        fireAudio.pause()
        rainAudio.loop = true
        break;
        
        case 'coffeeCard': 
        forestAudio.pause()
        rainAudio.pause()    
        coffeeAudio.play()
        fireAudio.pause()
        coffeeAudio.loop = true
        break;
        
        case 'fireCard': 
        forestAudio.pause()
        rainAudio.pause()    
        coffeeAudio.pause()
        fireAudio.play()
        fireAudio.loop = true
        break;        
    }
}

function playAudioCard() {
    
    let cardActiveVolumeName
    let cardActiveAudioName

    switch(cardActive) {
        
        case 'forestCard': 
        cardActiveVolumeName = 'forestVolume'
        cardActiveAudioName = 'forestAudio'
        forestAudio.play()
        rainAudio.pause()    
        coffeeAudio.pause()
        fireAudio.pause()
        forestAudio.loop = true
        slideVolume[0].value = volumeSlideControl
        forestAudio.volume = volumeSlideControl / 100
        break;
        
        case 'rainCard': 
        cardActiveVolumeName = 'rainVolume'
        cardActiveAudioName = 'rainAudio'
        forestAudio.pause()    
        rainAudio.play()
        coffeeAudio.pause()
        fireAudio.pause()
        rainAudio.loop = true
        slideVolume[1].value = volumeSlideControl
        rainAudio.volume = volumeSlideControl / 100
        break;
        
        case 'coffeeCard': 
        cardActiveVolumeName = 'coffeeVolume'
        cardActiveAudioName = 'coffeeAudio'
        forestAudio.pause()
        rainAudio.pause()    
        coffeeAudio.play()
        fireAudio.pause()
        coffeeAudio.loop = true
        slideVolume[2].value = volumeSlideControl
        coffeeAudio.volume = volumeSlideControl / 100
        break;
        
        case 'fireCard': 
        cardActiveVolumeName = 'fireVolume'
        cardActiveAudioName = 'fireAudio'
        forestAudio.pause()
        rainAudio.pause()    
        coffeeAudio.pause()
        fireAudio.play()
        fireAudio.loop = true
        slideVolume[3].value = volumeSlideControl
        fireAudio.volume = volumeSlideControl / 100
        break;
        
        // default: alert('Click no card para tocar áudio')
    }

    volumeSlideControl = 50
    volumeAudioControl = 0.5

    slideVolume.forEach((slide) => {
        if(slide.id != cardActiveVolumeName){
            slide.value = 0
        }
    })

    listAudios.forEach((audio) => {
        if(audio.classList != cardActiveAudioName){
            audio.volume = 0
        }
    })
}



function activeVolumeControl() {
    
    forestVolume.oninput = function() {
        forestAudio.volume = this.value / 100
        volumeSlideControl = this.value
    }
    
    rainVolume.oninput = function() {
        rainAudio.volume = this.value / 100
        volumeSlideControl = this.value
    }
    
    coffeeVolume.oninput = function() {
        coffeeAudio.volume = this.value / 100
        volumeSlideControl = this.value
    }
    
    fireVolume.oninput = function() {
        fireAudio.volume = this.value / 100
        volumeSlideControl = this.value
    }   
}




function pauseAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()    
    fireAudio.pause()
}

function stopAudio() {
    forestAudio.pause()
    forestAudio.currentTime = 0
    
    rainAudio.pause()
    rainAudio.currentTime = 0
    
    coffeeAudio.pause()
    coffeeAudio.currentTime = 0
    
    fireAudio.pause()
    fireAudio.currentTime = 0
}



lightDisplayButton.addEventListener('click', () => {
    darkModeOn = true 
    darkMode()
    cardSelect()
})

darkDisplayButton.addEventListener('click', () => {
    darkModeOn = false
    lightMode()
    cardSelect()
})



playButton.addEventListener('click', () => {
    
    if (minutes > 0 || seconds > 0){

        playButtonSelect()
        timerSelectOn()
        playAudio()

        clearInterval(animationInterval)
        cardAnimation()
    
        if(countDownStop) {
            countDown()
            countDownStop = false
        }
    }
    else {
        alert('Incremente os minutos no botão (+) para começar')
    }
})

pauseButton.addEventListener('click', () => {
  
    pauseButtonSelect()
    timerSelectOff()
    pauseAudio()
    clearTimeout(timerTimeOut)
    
    countDownStop = true
})

stopButton.addEventListener('click', () => {
    
    stopButtonSelect()
    timerSelectOff()
    zeroMinutes()
    stopAudio()
    resetCard()
    clearTimeout(timerTimeOut)
    clearInterval(animationInterval)
    
    countDownStop = true
})

addButton.addEventListener('click', () => {
    
    addButtonSelect()
    timerSelectOff()
    addMinutes()
    clearTimeout(timerTimeOut)

    countDownStop = true
})

removeButton.addEventListener('click', () => {
    
    removeButtonSelect()
    timerSelectOff()
    removeMinutes()
    clearTimeout(timerTimeOut)
    
    countDownStop = true
})



forestCard.addEventListener('click', () => {
    
    cardActive = 'forestCard'
    
    playAudioCard()
    cardSelect()

    clearInterval(animationInterval)
    cardAnimation()

    activeVolumeControl()    
})

rainCard.addEventListener('click', () => {
    
    cardActive = 'rainCard' 
    
    playAudioCard()
    cardSelect()

    clearInterval(animationInterval)
    cardAnimation()

    activeVolumeControl()
})

coffeeCard.addEventListener('click', () => {
    
    cardActive = 'coffeeCard'
    
    playAudioCard()
    cardSelect()
    
    clearInterval(animationInterval)
    cardAnimation()
    
    activeVolumeControl()
})

fireCard.addEventListener('click', () => {
    
    cardActive = 'fireCard'
    
    playAudioCard()
    cardSelect()

    clearInterval(animationInterval)
    cardAnimation()

    activeVolumeControl()
})