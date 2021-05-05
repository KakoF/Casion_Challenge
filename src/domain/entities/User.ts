import {
  Entity,
  Column,
} from 'typeorm'
import { BaseEntity } from './Base'

@Entity('users')
export class User extends BaseEntity {

  @Column()
  nome: string

  @Column()
  email: string

  constructor(nome: string, email: string, createAt?: Date, updateAt?: Date) {
    super()
    this.nome = nome
    this.email = email
    this.createAt = createAt
    this.updateAt = updateAt
  }
}
