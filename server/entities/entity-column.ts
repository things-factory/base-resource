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

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column({
    nullable: true
  })
  term: string

  @Column()
  colType: string

  @Column('int', {
    nullable: true
  })
  colSize: number

  @Column({
    nullable: true,
    default: true
  })
  nullable: boolean

  @Column({
    nullable: true
  })
  refType: string

  @Column({
    nullable: true
  })
  refName: string

  @Column({
    nullable: true
  })
  refUrl: string

  @Column({
    nullable: true
  })
  refParams: string

  @Column({
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

  @Column({
    nullable: true,
    default: false
  })
  reverseSort: boolean

  @Column({
    nullable: true,
    default: false
  })
  virtualField: boolean

  @Column({
    nullable: true
  })
  searchName: string

  @Column({
    nullable: true
  })
  searchEditor: string

  @Column({
    nullable: true
  })
  searchOper: string

  @Column({
    nullable: true
  })
  searchInitVal: string

  @Column('int', {
    nullable: true
  })
  gridRank: number

  @Column({
    nullable: true
  })
  gridEditor: string

  @Column({
    nullable: true
  })
  gridFormat: string

  @Column({
    nullable: true
  })
  gridValidator: string

  @Column('int', {
    nullable: true
  })
  gridWidth: number

  @Column({
    nullable: true
  })
  gridAlign: string

  @Column('int', {
    nullable: true
  })
  uniqRank: number

  @Column({
    nullable: true
  })
  formEditor: string

  @Column({
    nullable: true
  })
  formValidator: string

  @Column({
    nullable: true
  })
  formFormat: string

  @Column({
    nullable: true
  })
  defVal: string

  @Column({
    nullable: true
  })
  rangeVal: string

  @Column({
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
