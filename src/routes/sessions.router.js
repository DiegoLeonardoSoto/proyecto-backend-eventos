import { Router } from "express";
import { sessionsController } from "../dependencies/user.dependency.js";

const router = Router()

router.get('/', sessionsController.getSessions)
router.post('/register', sessionsController.registerUser)

export default router
