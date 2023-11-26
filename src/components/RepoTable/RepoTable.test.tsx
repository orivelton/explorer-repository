import React from 'react'
import { render, screen } from '@testing-library/react'
import RepoTable from './index'
import { MockedProvider } from '@apollo/client/testing'
import { GET_REPO } from '../../graphql/query'
import { errorMock, successMock } from '../../helpers/tests/mock'

describe('RepoTable component', () => {
  test('renders RepoTable component', () => {
    render(
      <MockedProvider mocks={successMock}>
        <RepoTable />
      </MockedProvider>,
    )

    expect(screen.getByText(/name/i)).toBeVisible()
    expect(screen.getByText(/stars/i)).toBeVisible()
    expect(screen.getByText(/forks/i)).toBeVisible()
  })
})
