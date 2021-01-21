import {Router} from 'express'
import { addClient, listClient, removeClient, updateClient } from '../controller/clientController'
import {checkToken} from '../middleware/checkToken'
const router = Router()
router.use(checkToken)
router.post('/', addClient)
router.get('/', listClient)
router.delete('/:id', removeClient)
router.put('/:id', updateClient)
export default router