import { gql } from 'apollo-server-koa'

export const Resource = gql`
  type Resource {
    id: String
    domainId: String
    name: String
    bundle: String
    tableName: String
    children: [Resource]
    createdAt: String
    updatedAt: String
  }
`
