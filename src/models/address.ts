import { Model } from 'objection'

export default class Address extends Model {
    id!: number
    address!: string
    neighborhood!: string
    city!: string
    uf!: string

    static tableName = 'addresses'


}