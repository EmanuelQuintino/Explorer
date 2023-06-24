const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite");
const { response } = require("express");


class UsersController {
    async create(request, response) {
        const {name, email, password} = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        
        if(checkUserExists) {
            throw new AppError("E-mail já cadastrado!");
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

        return response.status(201).json();
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if(!user) {
            throw new AppError("Usuário não encontrado!")
        }

        const userUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userUpdateEmail && userUpdateEmail.id !== user.id) {
            throw new AppError("O email já está em uso!")
        }

        user.name = name || user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError("Informe sua senha")
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword) {
                throw new AppError("Senha não confere!")
            }

            user.password = await hash(password, 8);
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME("now")
            WHERE id = ?`, 
            [user.name, user.email, user.password, id]
        );

        return response.status(200).json();
    }
}

module.exports = UsersController