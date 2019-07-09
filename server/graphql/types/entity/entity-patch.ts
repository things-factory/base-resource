import { gql } from 'apollo-server-koa'

export const EntityPatch = gql`
  input EntityPatch {
    name: String
    description: String
    bundle: String
    tableName: String
    searchUrl: String
    multiSaveUrl: String
    idType: String
    idField: String
    titleField: String
    master: String
    childrens: [String]
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
