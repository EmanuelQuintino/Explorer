// Estruturando os dados
export const modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".resultIMC"),
    buttonClose: document.querySelector(".close"), 
    
    open: function() {
        modal.wrapper.classList.add("open")
    },
    close() {
        modal.wrapper.classList.remove("open")
    }
}

// "onclick" só registra um em memória por projeto
modal.buttonClose.onclick = () => {
    modal.close()
}

function handleKeydawn(event) {
    if(event.key == "Escape") {
        modal.close()
    } 
}

window.addEventListener("keydown", handleKeydawn)