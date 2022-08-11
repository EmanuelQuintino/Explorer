export default function controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSound,
    buttonMute,
    minutes
}){
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function getMinutes() {
        minutes = prompt('Digite quantos minutos:') || 0
        return minutes
    }

    return {
        play,
        pause,
        reset,
        getMinutes,
    }
}