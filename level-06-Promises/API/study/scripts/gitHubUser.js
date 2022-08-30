// Posso usar para outros projetos, só recortar o código
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