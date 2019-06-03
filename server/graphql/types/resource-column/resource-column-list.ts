import { gql } from 'apollo-server-koa'

export const ResourceColumnList = gql`
  input ResourceColumnList {
    items: [ResourceColumn]
    total: Int
  }
`
