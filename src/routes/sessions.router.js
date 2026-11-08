import { Router } from "express";
import { sessionsController } from "../dependencies/user.dependency.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/register', sessionsController.registerUser)
router.post('/login', sessionsController.loginUser)
router.get('/current', authMiddleware ,sessionsController.current)

export default router
