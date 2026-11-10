import { createHash, isValidPassword } from "../utils/hash.js"
import { generateToken } from "../utils/jwt.js"
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

  async loginUser ({ email, password }) {
    if (!email || !password) {
      throw new AppError(400, "Faltan campos obligatorios")
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      throw new AppError(400, "Email inválido")
    }

    if (password.length < 8) {
      throw new AppError(400, "Contraseña invalida")
    }

    const normalizedEmail = email.toLowerCase().trim()

    const user = await this.#usersRepository.findUserByEmail(normalizedEmail)
    if (!user) {
      throw new AppError(401, "Credenciales inválidas")
    }

    const isPasswordValid = await isValidPassword(password, user.password)

    if (!isPasswordValid) {
      throw new AppError(401, "Credenciales inválidas")
    }

    const tokenUser = {
          id: user._id,
          email: user.email,
          role: 'user'
    }

    const token = generateToken(tokenUser)

    return token
  }
}
