export class Router {

    routes = {}

    add(routeName, pageLink) {
        this.routes[routeName] = pageLink
    }
        
    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }
    
    handle() {
        // Desestruturando o objeto {propriedadrot x, propriedade y, propriedade z}
        const {pathname} = window.location 
        // console.log(pathname)

        let myPage = document.querySelector('.page')
        let linkHome = document.querySelector('ul li:nth-child(1)')
        let linkUniverse = document.querySelector('ul li:nth-child(2)')
        let linkExploration = document.querySelector('ul li:nth-child(3)')

        switch (pathname) {
            case '/':
                linkHome.innerHTML = '<li><a href="/" class="select" onclick="route()">Home</a></li>'
                linkUniverse.innerHTML = '<li><a href="/universe" onclick="route()">Universe</a></li>'
                linkExploration.innerHTML = '<li><a href="/exploration" onclick="route()">Exploretion</a></li>'
                myPage.style.backgroundImage = "url('/level-06-SPA/challenges/images/mountains-universe-1.png')"
                break;
            
            case '/universe':
                linkHome.innerHTML = '<li><a href="/" onclick="route()">Home</a></li>'
                linkUniverse.innerHTML = '<li><a href="/universe" class="select" onclick="route()">Universe</a></li>'
                linkExploration.innerHTML = '<li><a href="/exploration" onclick="route()">Exploretion</a></li>'
                myPage.style.backgroundImage = "url('/level-06-SPA/challenges/images/mountains-universe-2.png')"
                break;
            
            case '/exploration':
                linkHome.innerHTML = '<li><a href="/" onclick="route()">Home</a></li>'
                linkUniverse.innerHTML = '<li><a href="/universe" onclick="route()">Universe</a></li>'
                linkExploration.innerHTML = '<li><a href="/exploration" class="select" onclick="route()">Exploretion</a></li>'
                myPage.style.backgroundImage = "url('/level-06-SPA/challenges/images/mountains-universe-3.png')"
                break;
        
            default:
                break;
        }
        
        const route = this.routes[pathname] || this.routes[404]
        
        // console.log('Antes do fetch()')
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('.app').innerHTML = html
        })
    
        // console.log(route)
    
    }        
}