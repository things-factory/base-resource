import { User } from '@things-factory/auth-base'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity as ORMEntity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EntityColumn } from './entity-column'

@ORMEntity('entities')
@Index('ix_entity_0', (entity: Entity) => [entity.domain, entity.name], { unique: true })
@Index('ix_entity_1', (entity: Entity) => [entity.domain])
@Index('ix_entity_2', (entity: Entity) => [entity.bundle])
@Index('ix_entity_3', (entity: Entity) => [entity.domain, entity.masterId])
export class Entity extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('text')
  bundle: string

  @Column('text')
  tableName: string

  @Column('text', {
    nullable: true
  })
  searchUrl: string

  @Column('text', {
    nullable: true
  })
  multiSaveUrl: string

  @Column('text', {
    nullable: true
  })
  idType: string

  @Column('text', {
    nullable: true
  })
  idField: string

  @Column('text', {
    nullable: true
  })
  titleField: string

  @Column('text', {
    nullable: true
  })
  masterId: string

  @ManyToOne(type => Entity, master => master.childrens)
  master: Entity

  @OneToMany(type => Entity, child => child.master)
  childrens: Entity[]

  @Column('text', {
    nullable: true
  })
  association: string

  @Column('text', {
    nullable: true
  })
  dataProp: string

  @Column('text', {
    nullable: true
  })
  refField: string

  @Column('text', {
    nullable: true
  })
  delStrategy: string

  @Column('int', {
    nullable: true
  })
  fixedColumns: number

  @Column('boolean', {
    default: true
  })
  active: boolean

  @Column('boolean', {
    nullable: true
  })
  extEntity: boolean

  @OneToMany(type => EntityColumn, entityColumn => entityColumn.entity)
  columns: EntityColumn

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
