import gql from 'graphql-tag'

export const Entity = gql`
  type Entity {
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
    master: Entity
    childrens: [Entity]
    association: String
    dataProp: String
    refField: String
    delStrategy: String
    fixedColumns: Int
    active: Boolean
    extEntity: Boolean
    columns: [EntityColumn]
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
