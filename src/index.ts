import app from './frameworks/express/server'
import * as portfinder from 'portfinder'

portfinder.getPortPromise({ port: 3000 })
  .then((port) => {
    app.listen(port, () => {
      console.log(`Server online at url http://localhost:${port}`)
      console.log(`Document online at url http://localhost:${port}/api-docs`)
    })
  })
  .catch((error) => {
    console.error('Failed to start server:', error)
  })
