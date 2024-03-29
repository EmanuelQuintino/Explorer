import {Router} from "./route.js"

const router = new Router()
router.add("/level-06-Promises/SPA/study/", "/level-06-Promises/SPA/study/pages/home.html"),
router.add("/level-06-Promises/SPA/study/index.html", "/level-06-Promises/SPA/study/pages/home.html"),
router.add("/", "/level-06-Promises/SPA/study/pages/home.html"),
router.add("/about", "/level-06-Promises/SPA/study/pages/about.html"),
router.add("/contact", "/level-06-Promises/SPA/study/pages/contact.html"),
router.add(404, "/level-06-Promises/SPA/study/pages/404.html")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}