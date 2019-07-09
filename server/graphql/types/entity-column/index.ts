import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { EntityColumn } from './entity-column'
import { EntityColumnList } from './entity-column-list'
import { EntityColumnPatch } from './entity-column-patch'
import { NewEntityColumn } from './new-entity-column'

export const Mutation = `
  createEntityColumn (
    entityColumn: NewEntityColumn!
  ): EntityColumn

  updateEntityColumn (
    name: String!
    patch: EntityColumnPatch!
  ): EntityColumn

  deleteEntityColumn (
    name: String!
  ): EntityColumn
`

export const Query = `
  entityColumns(filters: [Filter], pagination: Pagination, sortings: [Sorting]): EntityColumnList
  entityColumn(name: String!): EntityColumn
`

export const Types = [Filter, Pagination, Sorting, EntityColumn, NewEntityColumn, EntityColumnPatch, EntityColumnList]
