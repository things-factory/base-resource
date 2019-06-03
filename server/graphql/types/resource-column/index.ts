import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewResourceColumn } from './new-resource-column'
import { ResourceColumn } from './resource-column'
import { ResourceColumnList } from './resource-column-list'
import { ResourceColumnPatch } from './resource-column-patch'

export const Mutation = `
  createResourceColumn (
    resourceColumn: NewResourceColumn!
  ): ResourceColumn

  updateResourceColumn (
    name: String!
    patch: ResourceColumnPatch!
  ): ResourceColumn

  deleteResourceColumn (
    name: String!
  ): ResourceColumn
`

export const Query = `
  resourceColumns(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ResourceColumnList
  resourceColumn(name: String!): ResourceColumn
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  ResourceColumn,
  NewResourceColumn,
  ResourceColumnPatch,
  ResourceColumnList
]
