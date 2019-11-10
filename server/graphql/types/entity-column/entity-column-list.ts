import gql from 'graphql-tag'

export const EntityColumnList = gql`
  type EntityColumnList {
    items: [EntityColumn]
    total: Int
  }
`
