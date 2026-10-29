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

  getSessions = async (req, res) => {
    return res.status(200).json({
      status: "success",
      payload: [],
    })
  }
}
