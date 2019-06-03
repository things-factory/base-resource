import { gql } from 'apollo-server-koa'

export const ResourceList = gql`
  type ResourceList {
    items: [Resource]
    total: Int
  }
`
