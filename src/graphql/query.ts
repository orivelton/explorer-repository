import { gql } from '@apollo/client'

export const GET_REPO = gql`
  query {
    viewer {
      login
    }
  }
`
