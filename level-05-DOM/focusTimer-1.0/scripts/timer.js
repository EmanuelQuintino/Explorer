import soundsElements from "./sounds.js"

export default function timer({
    displayMinutes,
    displaySeconds,
    resetControls,
    minutes
}) {
    
    function updateDisplay(minutes, seconds) {
        displayMinutes.innerHTML = String(minutes).padStart(2, '0')
        displaySeconds.innerHTML = String(seconds).padStart(2, '0')
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    let timerTimeOut
    function countDown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(displaySeconds.textContent)
            let minutes = Number(displayMinutes.textContent)
            
            updateDisplay(minutes, 0)
            
            if (minutes == 0 && seconds == 0) {
                resetControls()
                soundsElements().timeEnd()
                return
            }

            if (seconds <= 0 ) {
                seconds = 60
                minutes--
            }
            
            updateDisplay(minutes, String(seconds - 1))
            
            countDown()
            
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    return {
        updateDisplay,
        reset,       
        countDown,
        updateMinutes,
        pause
    }
}