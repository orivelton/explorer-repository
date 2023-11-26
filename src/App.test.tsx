import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'
import { successMock } from './helpers/tests/mock'
import { client } from './graphql'
import { ApolloProvider } from '@apollo/client'

describe('RepoTable component', () => {
  const OLD_ENV = process.env
  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    process.env = { ...OLD_ENV }
  })
  test('renders RepoTable component', () => {
    process.env.REACT_APP_GITHUB_TOKEN = '123'
    render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={successMock}>
          <App />
        </MockedProvider>
      </ApolloProvider>,
    )

    expect(screen.getByText(/name/i)).toBeVisible()
    expect(screen.getByText(/stars/i)).toBeVisible()
    expect(screen.getByText(/forks/i)).toBeVisible()
  })
})
