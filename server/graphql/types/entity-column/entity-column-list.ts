import { gql } from 'apollo-server-koa'

export const EntityColumnList = gql`
  type EntityColumnList {
    items: [EntityColumn]
    total: Int
  }
`
