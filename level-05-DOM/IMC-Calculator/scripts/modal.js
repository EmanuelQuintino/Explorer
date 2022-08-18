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

modal.buttonClose.onclick = () => {
    modal.close()
}