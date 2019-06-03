import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewResource } from './new-resource'
import { Resource } from './resource'
import { ResourceList } from './resource-list'
import { ResourcePatch } from './resource-patch'

export const Mutation = `
  createResource (
    resource: NewResource!
  ): Resource

  updateResource (
    name: String!
    patch: ResourcePatch!
  ): Resource

  deleteResource (
    name: String!
  ): Resource
`

export const Query = `
  resources(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ResourceList
  resource(name: String!): Resource
`

export const Types = [Filter, Pagination, Sorting, Resource, NewResource, ResourcePatch, ResourceList]
