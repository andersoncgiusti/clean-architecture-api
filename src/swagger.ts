import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Clean Architecture API',
      version: '1.0.0',
      description: 'Documentation for the Clean Architecture API'
    }
  },
  apis: ['./src/frameworks/express/server.ts']
}

const specs = swaggerJsdoc(options)

export default specs
