import { Model } from "objection";

export default class User extends Model {
    id!: number
    user!: string
    password!: string

    static tableName = 'users'

    static async getUser(username: string):Promise<User> {
        const user = await User.query().where('user', username).first()
        return user
    }
}