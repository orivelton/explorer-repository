import React from 'react'
import { render, screen } from '@testing-library/react'
import RepoTable from './index'
import { MockedProvider } from '@apollo/client/testing'
import { successMock } from '../../helpers/tests/mock'

describe('RepoTable component', () => {
  test('renders RepoTable component success request', () => {
    render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <RepoTable />
      </MockedProvider>,
    )

    expect(screen.getByText(/name/i)).toBeVisible()
    expect(screen.getByText(/stars/i)).toBeVisible()
    expect(screen.getByText(/forks/i)).toBeVisible()
  })
})
