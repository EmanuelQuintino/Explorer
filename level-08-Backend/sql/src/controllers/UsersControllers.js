class UsersController {

    // index - GET para listar vários registros.
    // show - GET para exibir um registro específico.
    // Create - POST para criar um registro.
    // update - PUT para atualizar um registro.
    // delete - DELETE para remover registro.

    create(request, response) {
        const {name, email, password} = request.body;
        // response.send(`Você chamou o POST! Name: ${name}, E-mail: ${email}, Password: ${password}`)
        response.status(201).json({name, email, password})
    }
}

module.exports = UsersController