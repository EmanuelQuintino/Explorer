import {Router} from "./route.js"

const router = new Router()
router.add("/level-06-Promises/SPA/challenges/", "/level-06-Promises/SPA/challenges/pages/home.html"),
router.add("/level-06-Promises/SPA/challenges/index.html", "/level-06-Promises/SPA/challenges/pages/home.html"),
router.add("/", "/level-06-Promises/SPA/challenges/pages/home.html"),
router.add("/universe", "/level-06-Promises/SPA/challenges/pages/universe.html"),
router.add("/exploration", "/level-06-Promises/SPA/challenges/pages/exploration.html"),
router.add(404, "/level-06-Promises/SPA/challenges/pages/404.html")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}