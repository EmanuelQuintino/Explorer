export default function buttons({
    playButton,
    pauseButton,
    addButton,
    removeButton
}){
    
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
    
    
    return{
        playButtonSelect,
        pauseButtonSelect,
        addButtonSelect,
        removeButtonSelect
    }
} 