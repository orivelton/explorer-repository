import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'
import { successMock } from './helpers/tests/mock'
import { client } from './graphql'
import { ApolloProvider } from '@apollo/client'

describe('App component', () => {
  test('renders App component', () => {
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
