import Address  from './address'
import { Model } from 'objection'
import { ICreateClientDTO } from '../entities/createClientDTO'
import { IUpdateClientDTO } from '../entities/updateClientDTO'

export default class Client extends Model {
    id!: number
    name!: string
    email!: string
    phone!: string
    address!: Address

    static tableName = 'clients'

    static relationMappings = () => ({
        address: {
            relation: Model.BelongsToOneRelation,
            modelClass: Address,
            join: {
                to: 'clients.addressId',
                from: 'addresses.id'
            }
        }
    })

    static async createClient(clientDTO: ICreateClientDTO):Promise<Client> {
        const client = await Client.query().insertGraphAndFetch(clientDTO)
        return client
    }
    static async listClient():Promise<Array<Client>> {
        const clients = await Client.query().withGraphFetched('address')
        return clients
    }
    static async removeClient(id: number):Promise<void> {
        await Client.query().deleteById(id)
    }
    static async updateClient(id: number, updateClient: IUpdateClientDTO):Promise<Client> {
        const client = await Client.query().upsertGraphAndFetch({
            id,
            ...updateClient
        })
        return client
    }
}