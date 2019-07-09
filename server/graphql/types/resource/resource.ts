import { gql } from 'apollo-server-koa'

export const Resource = gql`
  type Resource {
    id: String
    domain: Domain
    name: String
    description: String
    bundle: String
    tableName: String
    searchUrl: String
    multiSaveUrl: String
    idType: String
    idField: String
    titleField: String
    masterId: String
    parent: Resource
    childrens: [Resource]
    association: String
    dataProp: String
    refField: String
    delStrategy: String
    fixedColumns: Int
    active: Boolean
    extEntity: Boolean
    columns: [ResourceColumn]
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
