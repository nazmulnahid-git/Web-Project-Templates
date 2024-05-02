import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import PostReactions from './PostReaction'
import Comment from './Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id : number

  @column()
  public post_txt : string
  
  @column()
  public post_files : string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => User, {
    foreignKey : 'user_id',
  })
  public user: BelongsTo<typeof User>;

  @hasMany(() => PostReactions, {
    foreignKey : 'post_id',
  })
  public postReactions : HasMany <typeof PostReactions>
  

  @hasMany(() => Comment, {
    foreignKey : 'post_id',
  })
  public comments : HasMany <typeof Comment>
  public serializeExtras = true
}
