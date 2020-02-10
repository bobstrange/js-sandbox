import Express from 'express'
import Post from './post'

class PostsController {
  public path = '/posts'
  public router = Express.Router()

  private posts: Post[] = [
    {
      author: 'Bob',
      content: 'Post content sample',
      title: 'Post title sample'
    }
  ]
  constructor() {
    this.initializeRoutes()
  }

  getAllPosts = (request: Express.Request, response: Express.Response) => {
    response.send(this.posts)
  }

  createPost = (request: Express.Request, response: Express.Response) => {
    const post: Post = request.body
    this.posts.push(post)
    response.send(post)
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts)
    this.router.post(this.path, this.createPost)
  }
}

export default PostsController
