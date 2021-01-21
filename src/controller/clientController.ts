import {Request, Response} from 'express'
import Client from '../models/client'
export async function addClient(req:Request, res:Response) {
    const client = await Client.createClient(req.body)
    return res.status(200).send(client)
}
export async function listClient(req:Request, res:Response) {
    const clients = await Client.listClient()
    return res.status(200).send({clients})
}
export async function removeClient(req:Request, res:Response) {
    const id = Number(req.params.id)
    await Client.removeClient(id)
    return res.status(200).send({removed: true})
}
export async function updateClient(req:Request, res:Response) {
    const id = Number(req.params.id)
    const client = await Client.updateClient(id, req.body)
    return res.status(200).send(client)
}