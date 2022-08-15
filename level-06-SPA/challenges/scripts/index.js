import {Router} from "./route.js"


let linkHome = document.querySelector('ul li:nth-child(1)')
let linkUniverse = document.querySelector('ul li:nth-child(2)')
let linkExploration = document.querySelector('ul li:nth-child(3)')
let page = document.querySelector('.page')


linkHome.addEventListener("click", () => {
    linkHome.innerHTML = '<li><a href="/" class="select" onclick="route()">Home</a></li>'
    linkUniverse.innerHTML = '<li><a href="/universe" onclick="route()">Universe</a></li>'
    linkExploration.innerHTML = '<li><a href="/exploration" onclick="route()">Exploretion</a></li>'
})

linkUniverse.addEventListener("click", () => {
    linkHome.innerHTML = '<li><a href="/" onclick="route()">Home</a></li>'
    linkUniverse.innerHTML = '<li><a href="/universe" class="select" onclick="route()">Universe</a></li>'
    linkExploration.innerHTML = '<li><a href="/exploration" onclick="route()">Exploretion</a></li>'
})

linkExploration.addEventListener("click", () => {
    linkHome.innerHTML = '<li><a href="/" onclick="route()">Home</a></li>'
    linkUniverse.innerHTML = '<li><a href="/universe" onclick="route()">Universe</a></li>'
    linkExploration.innerHTML = '<li><a href="/exploration" class="select" onclick="route()">Exploretion</a></li>'
})


const router = new Router()
router.add("/level-06-SPA/challenges/", "/level-06-SPA/challenges/pages/home.html"),
router.add("/level-06-SPA/challenges/index.html", "/level-06-SPA/challenges/pages/home.html"),
router.add("/", "/level-06-SPA/challenges/pages/home.html"),
router.add("/universe", "/level-06-SPA/challenges/pages/universe.html"),
router.add("/exploration", "/level-06-SPA/challenges/pages/exploration.html"),
router.add(404, "/level-06-SPA/challenges/pages/404.html")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}