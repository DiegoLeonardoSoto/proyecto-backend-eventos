import { userModel } from "../models/user.model.js"
import { createHash } from "../utils/bcrypt.js"

export const getSessions = async (req, res) => {

    return res.status(200).json({
        status: 'success',
        payload: []
  })
}

export const registerUser = async (req, res) => {

    const { first_name, last_name, email, password } = req.body

    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({
            status: 'error',
            message: "Faltan campos obligatorios"
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
            status: 'error',
            message: 'Email inválido'
        })
    }

    if (password.length < 8) {
      return res.status(400).json({
          status: 'error',
          message: "Contraseña invalida"
      })
    }

    const normalizedEmail = email.toLowerCase().trim()

    if (await userModel.exists({email:normalizedEmail})) {
        return res.status(409).json({
            status: 'error',
            message: "El email ya esta registrado"
        })
    }


    const hashedPassword = await createHash(password)

    const userSaved = await userModel.create({ first_name, last_name, password: hashedPassword, role: 'user' ,email:normalizedEmail  } )

    return res.status(201).json({
        status: 'success',
        payload: {
          id: userSaved._id,
          first_name: userSaved.first_name,
          last_name: userSaved.last_name,
          email: userSaved.email,
          role: userSaved.role
        }
    })
}
