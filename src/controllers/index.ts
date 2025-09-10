import express from 'express'

class IndexController {
  public getHello(req: express.Request, res: express.Response) {
    res.send('Hello, World!')
  }

  public getGoodbye(req: express.Request, res: express.Response) {
    res.send('Goodbye, World!')
  }
}

export default IndexController
