const express = require("express")
const app = express();

app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params

    response.send(`Olá, o id de ${user} é ${id}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))