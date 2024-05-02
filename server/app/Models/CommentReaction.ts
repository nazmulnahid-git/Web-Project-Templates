import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'

export default class CommentReactions extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id : number

  @column()
  public comment_id : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Comment, {
    foreignKey : 'comment_id'
  })
  public post : BelongsTo<typeof Comment>

  public serializeExtras = true
}
