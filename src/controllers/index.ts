import express from 'express'
import logger from '../utils/logger'

class IndexController {
  public getHello(req: express.Request, res: express.Response) {
    logger.info('Hello endpoint was called')
    res.send('Hello, World!')
  }

  public getGoodbye(req: express.Request, res: express.Response) {
    logger.info('Goodbye endpoint was called')
    res.send('Goodbye, World!')
  }
}

export default IndexController
