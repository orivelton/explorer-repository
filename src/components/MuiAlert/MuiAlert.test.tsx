import React from 'react'
import { render, screen } from '@testing-library/react'
import { MuiAlert } from './index'

describe('MuiAlert component', () => {
  test('renders a default success Alert with the given message', () => {
    render(<MuiAlert message='Success!' />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('MuiAlert-root')
    expect(alert).toHaveClass('MuiAlert-standardSuccess')
    expect(alert).toHaveTextContent('Success!')
  })

  test('renders an Alert with Error severity and message', () => {
    render(<MuiAlert severity='error' message='An error occurred.' />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('MuiAlert-root')
    expect(alert).toHaveClass('MuiAlert-standardError')
    expect(alert).toHaveTextContent('An error occurred.')
  })

  test('renders an Alert with info severity and message', () => {
    render(<MuiAlert severity='info' message='info severity.' />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('MuiAlert-root')
    expect(alert).toHaveClass('MuiAlert-standardInfo')
    expect(alert).toHaveTextContent('info severity.')
  })

  test('renders an Alert with warning severity and message', () => {
    render(<MuiAlert severity='warning' message='warning severity.' />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('MuiAlert-root')
    expect(alert).toHaveClass('MuiAlert-standardWarning')
    expect(alert).toHaveTextContent('warning severity.')
  })
})
