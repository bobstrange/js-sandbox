import { Router, Request, Response, NextFunction } from 'express'
import { Get, Controller, Use } from './decorators'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made')
  next()
}

@Controller('/auth')
class LoginController {
  @Get('/login')
  @Use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `)
  }
}
