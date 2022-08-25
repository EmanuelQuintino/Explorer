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

       const users = [
            {
                login: "EmanuelQuintino",
                name: "Emanuel Quintino",
                public_repos: "10",
                followers: "120"
            },
            {
                login: "maykbrito",
                name: "Mayk Brito",
                public_repos: "10",
                followers: "120"
            },
        ]

        users.forEach(user => {
            console.log(user)
        })
    }

   createRow() {

    const tr = document.querySelector("tr") 
    tr.innerHTML = `
    <td class="users">
        <img src="https://github.com/EmanuelQuintino.png" alt="">
        <a href="https://github.com/EmanuelQuintino" target="_blank">
            <p>EmanuelQuintino</p>
            <span>Emanuel Quintino</span>
        </a>
    </td>
    <td class="repositories">10</td>
    <td class="followers">234</td>
    <td>
        <button class="remove">&times;</button>
    </td>`

    return tr
   }

    removeAllTr() {
        const tbody = this.root.querySelector("table tbody")
        
        tbody.querySelectorAll("tr").forEach((tr) => {
            tr.remove()
        });
    }
}