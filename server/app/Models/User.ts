import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Comment from './Comment'
import Reply from './Reply'
import PostReactions from './PostReaction'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullName : string
  @column()
  public email : string
  @column()
  public password : string
  @column()
  public isActive : boolean
  @column()
  public forgotCode : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime



  @hasMany(() => Post, {
    foreignKey : 'user_id',
  })
  public posts: HasMany<typeof Post>;

  @hasMany(() => Comment, {
    foreignKey : 'user_id',
  })
  public comments: HasMany<typeof Comment>;

  @hasMany(() => Reply, {
    foreignKey : 'user_id',
  })
  public replies: HasMany<typeof Reply>;

  public serializeExtras = true;
}
