import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { Entity } from './entity'
import { EntityList } from './entity-list'
import { EntityPatch } from './entity-patch'
import { NewEntity } from './new-entity'

export const Mutation = `
  createEntity (
    entity: NewEntity!
  ): Entity

  updateEntity (
    name: String!
    patch: EntityPatch!
  ): Entity

  deleteEntity (
    name: String!
  ): Entity
`

export const Query = `
  entities(filters: [Filter], pagination: Pagination, sortings: [Sorting]): EntityList
  entity(name: String!): Entity
`

export const Types = [Filter, Pagination, Sorting, Entity, NewEntity, EntityPatch, EntityList]
