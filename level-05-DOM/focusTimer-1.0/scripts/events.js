export default function events({
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
}){
    buttonPlay.addEventListener('click', function() {
        controls.play()
        timer.countDown()

        // sound.pressButton()
        sound.bgAudio.play()

        buttonMute.classList.add('hide')
        buttonSound.classList.remove('hide')
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause()
        timer.pause()
        
        // sound.pressButton()
        sound.bgAudio.pause()
        
        buttonSound.classList.add('hide')
        buttonMute.classList.remove('hide')
    })
    
    buttonStop.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        
        // sound.pressButton()
        sound.bgAudio.pause()
        
        buttonSound.classList.add('hide')
        buttonMute.classList.remove('hide')
    })
    
    buttonSound.addEventListener('click', function() {
        buttonSound.classList.add('hide')
        buttonMute.classList.remove('hide')
        
        sound.bgAudio.pause()
    })
    
    buttonMute.addEventListener('click', function() {
        buttonMute.classList.add('hide')
        buttonSound.classList.remove('hide')
        
        sound.bgAudio.play()
    })
    
    buttonSet.addEventListener('click', () => {        
        minutes = controls.getMinutes()
        timer.updateDisplay(minutes, 0)
        timer.updateMinutes(minutes)

        sound.pressButton()
        
    })
}