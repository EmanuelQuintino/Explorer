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

        // GithubUser.search("EmanuelQuintino").then(user => console.log(user))
    }

    async add(username) {
        try {
            const user = await GithubUser.search(username)
            if(user.login === undefined) {
                throw new Error("Usuário não encontrado")
            }

            this.users = [user, ...this.users]
            this.update()

        } catch (error) {
            alert(error.message)
            
        }
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || []
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
        this.entries.forEach(user => {
            const row = this.createRow()
            // console.log(row)
            row.querySelector(".user img").src = `https://github.com/${user.login}.png`
            row.querySelector(".user img").alt = `Imagem de ${user.name}`
            row.querySelector(".user p").textContent = user.name
            row.querySelector(".user span").textContent = user.login
            row.querySelector(".repositories").textContent = user.public_repos
            row.querySelector(".followers").textContent = user.followers
            
            row.querySelector(".remove").addEventListener("click", () => {
                const respost = confirm("Tem certeza que deseja deletar essa linha?")

                if (respost) {
                    this.delete(user)
                }
            })

            this.tbody.append(row)
        })

    }

    removeAllTr() {        
        this.tbody.querySelectorAll("tr").forEach((tr) => {
            tr.remove()
        });
    }

   createRow() {

    const tr = document.createElement("tr")
    tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/maykbrito.png" alt="">
            <a href="https://github.com/maykbrito" target="_blank">
                <p>maykbrito</p>
                <span>maykbrito</span>
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