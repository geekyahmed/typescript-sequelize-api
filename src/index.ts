import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import UserRoutes from './routes/user.routes'

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT
const app = express()
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        statusCode: "Success",
        message: "Hello there"
    })
})

app.use('/users', UserRoutes)

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log('API is running on ' + PORT)
})