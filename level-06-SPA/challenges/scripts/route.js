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

