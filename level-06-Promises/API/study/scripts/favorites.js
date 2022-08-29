export class GithubUser {
    static search (username) {
        const endPoint = `https://api.github.com/users/${username}`

        return fetch(endPoint)
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        }))
    }
}

// Classe com a lógica dos dados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search("EmanuelQuintino").then(user => console.log(user))
    }

    async add(username) {
        const user = await GithubUser.search(username)

        console.log(user)
    }

    load() {
        this.users = JSON.parse(localStorage.getItem("@github-favorites:")) || []
    }

    delete(user) {
        const filterEntries = this.users.filter(entry => {
            entry.login !== user.login
        })

        this.users = filterEntries
        this.update()
    }
} 

// Classe com visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector("table tbody")

        // console.log(this.root)
        this.update()
        this.onAdd()
    }

    onAdd() {
        const addButton = this.root.querySelector(".search button")
        addButton.addEventListener("click", () => {
            const {value} = this.root.querySelector(".search input")

            this.add(value)
        })
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
            
            rows.querySelector(".remove").addEventListener("click", () => {
                const respost = confirm("Tem certeza que deseja deletar essa linha?")

                if (respost) {
                    this.delete(user)
                }
            })

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