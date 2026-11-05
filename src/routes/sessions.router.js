import { Router } from "express";
import { sessionsController } from "../dependencies/user.dependency.js";

const router = Router()

router.post('/register', sessionsController.registerUser)
router.post('/login', sessionsController.loginUser)

export default router
