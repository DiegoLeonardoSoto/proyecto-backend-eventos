import { createHash } from "../utils/bcrypt.js"
import { AppError } from "../utils/AppError.js"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export class SessionsService {
  #usersRepository

  constructor(usersRepository) {
    this.#usersRepository = usersRepository
  }

  async registerUser({ first_name, last_name, email, password }) {
    if (!first_name || !last_name || !email || !password) {
      throw new AppError(400, "Faltan campos obligatorios")
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      throw new AppError(400, "Email inválido")
    }

    if (password.length < 8) {
      throw new AppError(400, "Contraseña invalida")
    }

    const normalizedEmail = email.toLowerCase().trim()

    const emailExists = await this.#usersRepository.userExistsByEmail(normalizedEmail)
    if (emailExists) {
      throw new AppError(409, "El email ya está registrado")
    }

    const hashedPassword = await createHash(password)

    const user = await this.#usersRepository.createUser({
      first_name,
      last_name,
      email: normalizedEmail,
      password: hashedPassword,
      role: "user",
    })

    return {
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
    }
  }
}
