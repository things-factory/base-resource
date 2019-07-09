import { gql } from 'apollo-server-koa'

export const EntityList = gql`
  type EntityList {
    items: [Entity]
    total: Int
  }
`
