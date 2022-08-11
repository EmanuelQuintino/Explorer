let screen1 = document.querySelector(".screen-1") 
let screen2 = document.querySelector(".screen-2")
let inputNumber = document.querySelector("#inputNumber")
let tryButton = document.querySelector("#tryButton")
let gameTitleH2 = document.querySelector(".game-title h2")
let gameTitleButton = document.querySelector(".game-title button")


let randomNumber = Math.round(Math.random() * 10)
let tryCount = 0


function toggleHide() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function playDivination(event) {
    
    event.preventDefault()
    
    tryCount++
    
    if(randomNumber == inputNumber.value) {
        toggleHide()
        gameTitleH2.innerHTML = "Acertou em " + tryCount + " tentativas"
    }

    inputNumber.value = ''
}

function playAgain() {
    tryCount = 0
    randomNumber = Math.round(Math.random() * 10)
    
    toggleHide()  

    inputNumber.value = ''
}


tryButton.addEventListener('click', playDivination)

gameTitleButton.addEventListener('click', playAgain)

// document.addEventListener('keydown', (key) => {
//     if(key.key == 'Enter') {
//         playAgain()
//     }
// })
