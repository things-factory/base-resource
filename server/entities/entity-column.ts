import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity as ORMEntity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Entity } from './entity'

@ORMEntity()
@Index('ix_entity_col_0', (entityColumn: EntityColumn) => [entityColumn.entity, entityColumn.name], {
  unique: true
})
@Index('ix_entity_col_1', (entityColumn: EntityColumn) => [entityColumn.entity, entityColumn.rank])
export class EntityColumn {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => Entity, entity => entity.columns)
  entity: Entity

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column('text', {
    nullable: true
  })
  term: string

  @Column('text')
  colType: string

  @Column('int', {
    nullable: true
  })
  colSize: number

  @Column('boolean', {
    nullable: true,
    default: true
  })
  nullable: boolean

  @Column('text', {
    nullable: true
  })
  refType: string

  @Column('text', {
    nullable: true
  })
  refName: string

  @Column('text', {
    nullable: true
  })
  refUrl: string

  @Column('text', {
    nullable: true
  })
  refParams: string

  @Column('text', {
    nullable: true
  })
  refRelated: string

  @Column('int', {
    nullable: true
  })
  searchRank: number

  @Column('int', {
    nullable: true
  })
  sortRank: number

  @Column('boolean', {
    nullable: true,
    default: false
  })
  reverseSort: boolean

  @Column('boolean', {
    nullable: true,
    default: false
  })
  virtualField: boolean

  @Column('text', {
    nullable: true
  })
  searchName: string

  @Column('text', {
    nullable: true
  })
  searchEditor: string

  @Column('text', {
    nullable: true
  })
  searchOper: string

  @Column('text', {
    nullable: true
  })
  searchInitVal: string

  @Column('int', {
    nullable: true
  })
  gridRank: number

  @Column('text', {
    nullable: true
  })
  gridEditor: string

  @Column('text', {
    nullable: true
  })
  gridFormat: string

  @Column('text', {
    nullable: true
  })
  gridValidator: string

  @Column('int', {
    nullable: true
  })
  gridWidth: number

  @Column('text', {
    nullable: true
  })
  gridAlign: string

  @Column('int', {
    nullable: true
  })
  uniqRank: number

  @Column('text', {
    nullable: true
  })
  formEditor: string

  @Column('text', {
    nullable: true
  })
  formValidator: string

  @Column('text', {
    nullable: true
  })
  formFormat: string

  @Column('text', {
    nullable: true
  })
  defVal: string

  @Column('text', {
    nullable: true
  })
  rangeVal: string

  @Column('boolean', {
    nullable: true,
    default: false
  })
  ignoreOnSav: boolean

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
