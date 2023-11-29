import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { TokenInput } from './index'

describe('TokenInput component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    })
  })

  test('renders the component with the initial token value', () => {
    render(<TokenInput />)
    const tokenInput: HTMLInputElement = screen.getByPlaceholderText(
      'Add your github personal access token',
    )
    expect(tokenInput).toBeInTheDocument()
    expect(tokenInput.value).toBe(localStorage.getItem('token') || '')
  })

  test('updates the token value on input change', () => {
    render(<TokenInput />)
    const tokenInput: HTMLInputElement = screen.getByPlaceholderText(
      'Add your github personal access token',
    )

    fireEvent.change(tokenInput, { target: { value: 'newTokenValue' } })

    expect(tokenInput.value).toBe('newTokenValue')
  })

  test('sets the token in local storage and reloads the page on valid input', () => {
    render(<TokenInput />)
    const tokenInput = screen.getByPlaceholderText(
      'Add your github personal access token',
    )

    fireEvent.change(tokenInput, { target: { value: 'validToken' } })

    expect(localStorage.getItem('token')).toBe('validToken')

    expect(window.location.reload).toHaveBeenCalled()
  })

  test('does not reload the page on empty input', () => {
    render(<TokenInput />)
    const tokenInput = screen.getByPlaceholderText(
      'Add your github personal access token',
    )

    fireEvent.change(tokenInput, { target: { value: '' } })

    expect(window.location.reload).not.toHaveBeenCalled()
  })

  test('displays an error when token is empty', () => {
    render(<TokenInput />)
    const tokenInput = screen.getByPlaceholderText(
      'Add your github personal access token',
    )

    fireEvent.change(tokenInput, { target: { value: '' } })

    expect(tokenInput.closest('div')).toHaveClass('Mui-error')
  })
})
