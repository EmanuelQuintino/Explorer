const { Router } = require("express")
const UsersController = require("../controllers/UsersControllers")
const userRoutes = Router()

const usersController = new UsersController()

// app.get("/message/:id/:user", (request, response) => {
//     const {id, user} = request.params

//     response.send(`Olá, o id de ${user} é ${id}`)
// })

// app.get("/users", (request, response) => {
//     const {page, limit} = request.query

//     response.send(`Página ${page} linha ${limit}`)
// })

userRoutes.post("/", usersController.create)

module.exports = userRoutes