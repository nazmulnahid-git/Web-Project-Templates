import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Reply from './Reply'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id : number

  @column()
  public post_id : number

  @column()
  public comment_txt : string
  
  @column()
  public comment_files : string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey : 'user_id',
  })
  public user : BelongsTo<typeof User>

  @hasMany(() => Reply, {
    foreignKey : 'comment_id',
  })
  public replies : HasMany <typeof Reply>

  public serializeExtras = true

}
