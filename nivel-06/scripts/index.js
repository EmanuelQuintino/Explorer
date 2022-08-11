const routes = {
    "/nivel-06/": "/nivel-06/pages/home.html",
    "/": "/nivel-06/pages/home.html",
    "/about": "/nivel-06/pages/about.html",
    "/contact": "/nivel-06/pages/contact.html",
    404: "/nivel-06/pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    // Desestruturando o objeto {propriedadrot x, propriedade y, propriedade z}
    const {pathname} = window.location 
    // console.log(pathname)
    
    const route = routes[pathname] || routes[404]
    
    // console.log('Antes do fetch()')
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('.app').innerHTML = html
    })

    // console.log(route)

}

handle()

window.onpopstate = () => {handle()}
window.route = () => {route()}