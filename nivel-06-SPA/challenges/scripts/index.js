import {Router} from "./route.js"

const router = new Router()
router.add("/nivel-06-SPA/desafios/", "/nivel-06-SPA/study/pages/home.html"),
router.add("/nivel-06-SPA/study/index.html", "/nivel-06-SPA/study/pages/home.html"),
router.add("/", "/nivel-06-SPA/study/pages/home.html"),
router.add("/about", "/nivel-06-SPA/study/pages/about.html"),
router.add("/contact", "/nivel-06-SPA/study/pages/contact.html"),
router.add(404, "/nivel-06-SPA/study/pages/404.html")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}