import express from 'express'
import swaggerDocs from '../v1/docs/swagger.js'
import v1Router from '../v1/router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', v1Router)

swaggerDocs(app)

app.use((_req, res, _next) => {
  res.status(404).json({ message: '404 - Ruta no encontrada' })
})

export default app
