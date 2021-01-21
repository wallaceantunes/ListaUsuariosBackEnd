import express from 'express'
import bodyParser from "body-parser";
import routes from './routes/'
import Knex from 'knex'
import knexConfig from '../knexfile'
import cors from 'cors'
import {Model} from 'objection'
const knex = Knex(knexConfig.development)
Model.knex(knex)

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)
app.listen(3100)
console.log('listen on port 3100')