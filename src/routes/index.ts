import { Router } from 'express'
import IndexController from '../controllers/index'
import { Express } from 'express-serve-static-core'

const router = Router()
const indexController = new IndexController()

export function setRoutes(app: Express) {
  app.use('/api', router)

  router.get('/', indexController.getHello)
  router.get('/example', indexController.getGoodbye)
  // Add more routes as needed
}
