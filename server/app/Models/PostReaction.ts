import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import User from './User'

export default class PostReactions extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id : number

  @column()
  public post_id : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> User, {
    foreignKey : 'user_id'
  })
  public user : BelongsTo<typeof User>

  @belongsTo(()=> Post, {
    foreignKey : 'post_id'
  })
  public post : BelongsTo<typeof Post>




  public serializeExtras = true
}
