import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post';
import User from 'App/Models/User'


export default class QueriesController {

  public async task1({}: HttpContextContract) {
      const LoggedInUserID = 13;
      const posts = await Post.query()
        .preload('user')
        .preload('postReactions',(query) => {
          query.where('user_id', LoggedInUserID)
        })
        .withCount('postReactions')
        .withCount('comments')
        .orderBy('created_at', 'desc')
      return posts;
    }
  
    public async task2({}: HttpContextContract) {

    }
  
    public async task3({}: HttpContextContract) {

    }
  
    public async task4({}: HttpContextContract) {
      const users = await User.query()
      .preload('comments')
      .withCount('comments')
      .orderBy('comments_count', 'desc');
      return users;
    }
  
    public async task5({}: HttpContextContract) {
      const users = await User.query()
      .preload('posts')
      .withCount('posts')
      .orderBy('posts_count', 'desc')
      return users;
    }
}
