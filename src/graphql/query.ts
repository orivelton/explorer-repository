import { gql } from '@apollo/client'

export const GET_REPO = gql`
  query {
    search(
      type: REPOSITORY
      query: "is:public language:javascript stars:>100 topic:react"
      first: 100
    ) {
      repositoryCount
      repos: edges {
        repo: node {
          ... on Repository {
            description
            forkCount
            id
            name
            stargazerCount
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`
