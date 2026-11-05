import jwt from 'jsonwebtoken'
import {env} from '../config/env.config.js'

export const generateToken = (user) => {
    return jwt.sign({ id:user.id, email:user.email }, env.JWT_SECRET, {expiresIn:env.EXPIRATION_TIME})
}

export const verifyToken = (token) => {
    return jwt.verify(token, env.JWT_SECRET)
}
