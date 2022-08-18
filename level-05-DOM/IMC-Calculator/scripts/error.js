export const alertError = {
    element: document.querySelector(".alertError"),
    
    open: () => {
        alertError.element.classList.add("open")
    },

    close() {
        alertError.element.classList.remove("open")
    }
}