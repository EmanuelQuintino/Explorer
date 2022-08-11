import {Router} from "./route.js"

const router = new Router()
router.add("/nivel-06/", "/nivel-06/pages/home.html"),
router.add("/", "/nivel-06/pages/home.html"),
router.add("/about", "/nivel-06/pages/about.html"),
router.add("/contact", "/nivel-06/pages/contact.html"),
router.add(404, "/nivel-06/pages/404.html")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}