import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.currentUser?.token

    if (!token) {
        return res.status(401).json({status:'error', message: 'No se encontro un token de autenticación'})
    }

    try {

        const decoded = verifyToken(token)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({status: 'error', message:'Token de autenticacion invalido'})
    }
}
