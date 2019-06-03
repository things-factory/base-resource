import { gql } from 'apollo-server-koa'

export const ResourceColumnList = gql`
  type ResourceColumnList {
    items: [ResourceColumn]
    total: Int
  }
`
