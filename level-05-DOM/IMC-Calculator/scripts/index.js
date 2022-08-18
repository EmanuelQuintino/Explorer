import { modal } from "./modal.js"
import { alertError } from "./error.js"
import Tools from "./functions.js"


let tools = Tools({
    weight,
    height,
})


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    if(tools.isNumber(weight) && tools.isNumber(height)) {
        const result = tools.calculateIMC(weight, height).toFixed(2)
        modal.open()
        modal.message.innerHTML = `Seu IMC é de ${result}`
    }
    else {
        alertError.open()

        setTimeout(function(){
            alertError.close()
        }, 3000)
    }  
}