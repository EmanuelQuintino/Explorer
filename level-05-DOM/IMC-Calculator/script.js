const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".resultIMC")
const modalClose = document.querySelector(".close")

// Estruturando os dados
const modal = {
    open: function() {
        modalWrapper.classList.add("open")
    },
    close() {
        modalWrapper.classList.remove("open")
    }
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2))
}

form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    const result = IMC(weight, height).toFixed(2)
    
    modal.open()
    modalMessage.innerHTML = `Seu IMC é de ${result}`
}

modalClose.onclick = () => {
    modal.close()
}