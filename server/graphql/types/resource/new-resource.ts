import { gql } from 'apollo-server-koa'

export const NewResource = gql`
  input NewResource {
    name: String!
    description: String
    bundle: String!
    tableName: String!
    searchUrl: String
    multiSaveUrl: String
    idType: String
    idField: String
    titleField: String
    masterId: String
    parent: String
    association: String
    dataProp: String
    refField: String
    delStrategy: String
    fixedColumns: Int
    active: Boolean
    extEntity: Boolean
    columns: [String]
  }
`
