export default function timer({
    displayMinutes,
    displaySeconds,
    minutes,
    seconds,
    displayTimer
}) {

    function updateTimerDisplay(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, '0')
        displaySeconds.textContent = String(seconds).padStart(2, '0')    
    }
    
    let timerTimeOut
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
        
        return minutes
    }
    
    function removeMinutes() {
        minutes -= 5
        updateTimerDisplay(minutes, seconds)
        
        return minutes
    }
    
    function zeroMinutes() {
        minutes = 0
        seconds = 0
        updateTimerDisplay(minutes, seconds)
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }

    function newMinutes() {
        return minutes
    }

    function newSeconds() {
        return seconds
    }

    function selectOn(){
        displayTimer.classList.add('timerSelect')
        displayTimer.classList.remove('timerSelectOff')
    }

    function selectOff(){
        displayTimer.classList.remove('timerSelect')
        displayTimer.classList.add('timerSelectOff')
    }


    return {
        updateTimerDisplay,
        countDown,
        addMinutes,
        removeMinutes,
        zeroMinutes,
        pause,
        newMinutes,
        newSeconds,
        selectOn,
        selectOff
    }
}
