import {Router} from 'express'
import clientRoutes from './clientRoutes'
import loginRoutes from './loginRoute'
const routes = Router()
routes.use('/client', clientRoutes)
routes.use('/login', loginRoutes)
export default routes