export class SessionsController {
  #sessionsService

  constructor(sessionsService) {
    this.#sessionsService = sessionsService
  }

  registerUser = async (req, res) => {
    try {
      const user = await this.#sessionsService.registerUser(req.body)
      return res.status(201).json({
        status: "success",
        payload: user,
      })
    } catch (error) {
      const statusCode = error.statusCode || 500
      return res.status(statusCode).json({
        status: "error",
        message: error.message,
      })
    }
  }

  loginUser = async (req, res) => {
      try {
            const token = await this.#sessionsService.loginUser(req.body)

            return res
                .cookie('currentUser', token, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 1000,
                    sameSite: 'lax',
                    secure: process.env.NODE_ENV === 'production'
                })
                .status(200)
                .json({
                status: "success",
                message: "Login correcto",
            })

        } catch (error) {
            const statusCode = error.statusCode || 500
            return res.status(statusCode).json({
                status: "error",
                message: error.message
            })
      }
  }

  current = async (req, res) => {
    res.status(200).json({status:'success', payload:req.user})
  }

  logoutUser = async (req, res) => {
      res.clearCookie('currentUser')
      res.status(200).json({
          status: 'success',
          message: 'Sesión cerrada'
      })
  }
}
