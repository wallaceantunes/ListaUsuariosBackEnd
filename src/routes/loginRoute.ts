import {Router} from 'express'
import { login } from '../controller/loginController'

const router = Router()

router.post('/', login)
export default router
