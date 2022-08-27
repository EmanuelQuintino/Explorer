// Classe com a lógica dos dados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.users = [
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
    }
} 

// Classe com visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector("table tbody")

        // console.log(this.root)
        this.update()
    }

    update() {
        this.removeAllTr()
        this.users.forEach(user => {
            const rows = this.createRow()
            // console.log(rows)
            rows.querySelector(".users img").src = `https://github.com/${user.login}.png`
            rows.querySelector(".users img").alt = `imagem de ${user.name}`
            rows.querySelector(".users p").textContent = user.name
            rows.querySelector(".users span").textContent = user.login
            rows.querySelector(".repositories").textContent = user.public_repos
            rows.querySelector(".followers").textContent = user.followers
            
            this.tbody.append(rows)
        })

    }

    removeAllTr() {        
        this.tbody.querySelectorAll("tr").forEach((tr) => {
            tr.remove()
        });
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
}