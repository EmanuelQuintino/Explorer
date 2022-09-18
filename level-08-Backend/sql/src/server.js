const express = require("express")
const app = express();

app.use(express.json())

// app.get("/message/:id/:user", (request, response) => {
//     const {id, user} = request.params

//     response.send(`Olá, o id de ${user} é ${id}`)
// })

// app.get("/users", (request, response) => {
//     const {page, limit} = request.query

//     response.send(`Página ${page} linha ${limit}`)
// })

app.post("/users", (request, response) => {
    const {name, email, password} = request.body;

    // response.send(`Você chamou o POST! Name: ${name}, E-mail: ${email}, Password: ${password}`)

    response.json({name, email, password})
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))