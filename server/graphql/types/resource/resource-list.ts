import { gql } from 'apollo-server-koa'

export const ResourceList = gql`
  input ResourceList {
    items: [Resource]
    total: Int
  }
`
