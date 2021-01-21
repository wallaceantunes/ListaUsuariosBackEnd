import { Request, Response, NextFunction } from 'express'
import jsonwebtoken from 'jsonwebtoken'

export function checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization
    if(!token){
        return res.status(401).send({message:'Usuário não autorizado'})
    }
    try {
        jsonwebtoken.verify(token, process.env.JWT_SECRET || 'SECRET')
        next()
    } catch (error) {
        return res.status(401).send({message:'Usuário não autorizado'})
    }
}