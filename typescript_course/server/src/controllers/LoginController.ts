import { Request, Response, NextFunction } from 'express'
import { Get, Controller, Post, BodyValidator } from './decorators'

@Controller('/auth')
class LoginController {
  @Get('/login')
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

  @Post('/login')
  @BodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body

    if (email === 'foo@bar.com' && password === 'password') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid email or password')
    }
  }
}
