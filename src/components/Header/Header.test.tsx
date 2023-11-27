import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Header component', () => {
  test('renders Header with heading', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', {
        name: /explorer repository/i,
      }),
    ).toBeVisible()
  })
})
