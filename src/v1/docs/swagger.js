import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movies API',
      version: '1.0.0'
    }
  },
  apis: ['./src/v1/movie/router.js']
}

const openapiSpecification = swaggerJsdoc(options)

export default function swaggerDocs (app) {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
};
