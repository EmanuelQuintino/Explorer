import {Router} from "./route.js"

const router = new Router()
router.add("/nivel-06-SPA/challenges/", "/nivel-06-SPA/challenges/pages/home.html"),
router.add("/nivel-06-SPA/challenges/index.html", "/nivel-06-SPA/challenges/pages/home.html"),
router.add("/", "/nivel-06-SPA/challenges/pages/home.html"),
router.add("/universe", "/nivel-06-SPA/challenges/pages/universe.html"),
router.add("/exploration", "/nivel-06-SPA/challenges/pages/exploration.html"),
router.add(404, "/nivel-06-SPA/challenges/pages/404.html")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}