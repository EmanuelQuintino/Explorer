import {elements} from "./elements.js"
import timerFunctions from "./timer.js"
import controlsFunctions from "./controls.js"
import soundsElements from "./sounds.js"
import eventsFunctions from "./events.js"


const sound = soundsElements()

let {
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
} = elements

const controls = controlsFunctions({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSound,
    buttonMute,
    minutes
})

const timer = timerFunctions({
    displayMinutes,
    displaySeconds,
    timerTimeOut,
    resetControls: controls.reset,
    minutes
})

let events = eventsFunctions({
    controls,
    timer,
    sound,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSound,
    buttonMute,
    minutes
})