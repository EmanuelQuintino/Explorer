import { modal } from "./modal.js"
import { alertError } from "./error.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2))
}

function isNumber(number) {
    return !(isNaN(number) || number === "")
}

form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    if(isNumber(weight) && isNumber(height)) {
        const result = IMC(weight, height).toFixed(2)
        modal.open()
        modal.message.innerHTML = `Seu IMC é de ${result}`
    }
    else {
        alertError.open()

        setTimeout(function(){
            alertError.close()
        }, 1800)
    }  
}

