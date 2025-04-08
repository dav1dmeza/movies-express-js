import { createServer } from 'node:http'
import app from './config/app.js'

const server = createServer(app)

const host = process.env.APP_HOST
const port = process.env.APP_PORT

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`)
})
