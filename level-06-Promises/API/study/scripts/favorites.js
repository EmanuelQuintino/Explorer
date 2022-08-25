// Classe com a lógica dos dados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
} 

// Classe com visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        // console.log(this.root)
        this.update()
    }

    update() {
       this.removeAllTr()
    }

    removeAllTr() {
        const tbody = this.root.querySelector("table tbody")
        
        tbody.querySelectorAll("tr").forEach((tr) => {
            tr.remove()
        });
    }
}