import { Request, Response } from 'express'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user'

export async function login(req: Request, res: Response) {
    const user = await User.getUser(req.body.user)
    if (!user) {
        return res.status(404).send({ message: 'usuário não encontrado' })
    }
    if(bcrypt.compareSync(req.body.password, user.password) === false) {
        return res.status(401).send({ message: 'usuário não autorizado' })
    }
    const jwt = jsonwebtoken.sign({id: user.id}, process.env.JWT_SECRET || 'SECRET')
    return res.status(200).send({token: jwt})
}