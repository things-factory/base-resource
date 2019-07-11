import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity as ORMEntity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { EntityColumn } from './entity-column'

@ORMEntity('entities')
@Index('ix_entity_0', (entity: Entity) => [entity.domain, entity.name], { unique: true })
@Index('ix_entity_1', (entity: Entity) => [entity.domain])
@Index('ix_entity_2', (entity: Entity) => [entity.bundle])
@Index('ix_entity_3', (entity: Entity) => [entity.domain, entity.master])
export class Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  bundle: string

  @Column()
  tableName: string

  @Column({
    nullable: true
  })
  searchUrl: string

  @Column({
    nullable: true
  })
  multiSaveUrl: string

  @Column({
    nullable: true
  })
  idType: string

  @Column({
    nullable: true
  })
  idField: string

  @Column({
    nullable: true
  })
  titleField: string

  @ManyToOne(type => Entity, master => master.childrens)
  master: Entity

  @OneToMany(type => Entity, child => child.master)
  childrens: Entity[]

  @Column({
    nullable: true
  })
  association: string

  @Column({
    nullable: true
  })
  dataProp: string

  @Column({
    nullable: true
  })
  refField: string

  @Column({
    nullable: true
  })
  delStrategy: string

  @Column('int', {
    nullable: true
  })
  fixedColumns: number

  @Column({
    default: true
  })
  active: boolean

  @Column({
    nullable: true
  })
  extEntity: boolean

  @OneToMany(type => EntityColumn, entityColumn => entityColumn.entity)
  columns: EntityColumn

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
