let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonSound = document.querySelector('.sound')
let buttonMute = document.querySelector('.mute')

let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let minutes = Number(displayMinutes.textContent)
let timerTimeOut


export let elements = {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSound,
    buttonMute,
    displayMinutes,
    displaySeconds,
    minutes,
    timerTimeOut
}