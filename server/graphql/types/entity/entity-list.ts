import gql from 'graphql-tag'

export const EntityList = gql`
  type EntityList {
    items: [Entity]
    total: Int
  }
`
