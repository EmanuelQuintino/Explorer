const AppError = require("../utils/AppError")

class UsersController {

    // index - GET para listar vários registros.
    // show - GET para exibir um registro específico.
    // Create - POST para criar um registro.
    // update - PUT para atualizar um registro.
    // delete - DELETE para remover registro.

    create(request, response) {
        const {name, email, password} = request.body;

        if(!name) {
           throw new AppError("Nome obrigatório!") 
        }
        
        response.status(201).json({name, email, password})
    }
}

module.exports = UsersController