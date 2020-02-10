import App from './app'
import PostsController from './posts/posts_controller'

const app = new App([
  new PostsController()
], 8080)

app.listen()
