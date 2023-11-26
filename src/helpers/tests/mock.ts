import { GraphQLError } from 'graphql'
import { GET_REPO } from '../../graphql/query'

export const successMock = [
  {
    request: {
      query: GET_REPO,
    },
    result: {
      data: {
        search: {
          repositoryCount: 3189,
          repos: [
            {
              repo: {
                description: 'The library for web and native user interfaces.',
                forkCount: 45469,
                id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
                name: 'react',
                stargazerCount: 215656,
                url: 'https://github.com/facebook/react',
                __typename: 'Repository',
              },
              __typename: 'SearchResultItemEdge',
            },
          ],
          pageInfo: {
            endCursor: 'Y3Vyc29yOjEwMA==',
            hasNextPage: true,
            startCursor: 'Y3Vyc29yOjE=',
            __typename: 'PageInfo',
          },
          __typename: 'SearchResultItemConnection',
        },
      },
    },
  },
]

export const errorMock = [
  {
    request: {
      query: GET_REPO,
    },
    error: {
      message: 'Not Found',
    },
  },
]
