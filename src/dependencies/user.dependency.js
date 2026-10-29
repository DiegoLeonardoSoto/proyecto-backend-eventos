import { UsersMongoDAO } from "../dao/users.dao.js"
import { UsersRepository } from "../repositories/users.repository.js"
import { SessionsService } from "../services/sessions.service.js"
import { SessionsController } from "../controllers/sessions.controller.js"

const usersDAO = new UsersMongoDAO()
const usersRepository = new UsersRepository(usersDAO)
const sessionsService = new SessionsService(usersRepository)

export const sessionsController = new SessionsController(sessionsService)
