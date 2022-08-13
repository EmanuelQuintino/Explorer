export default function cards({
    treeCard,
    rainCard,
    coffeeCard,
    fireCard,
    treeAudio,
    rainAudio,
    coffeeAudio,
    fireAudio
}) {

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
 
    
    
    return{
        treeSelect,
        rainSelect,
        coffeeSelect,
        fireSelect,
        treePlayAudio,
        rainPlayAudio,
        coffeePlayAudio,
        firePlayAudio       
    }
}