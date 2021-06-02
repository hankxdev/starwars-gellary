import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import App from './App'

const themeMock = {
  colors: {
    yellow: '#feda4a',
    lightWhite: '#f0f0f0',
    black: '#000',
  }
}

const ThemeProviderWrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
  <ThemeProvider theme={themeMock}>
    {children}
  </ThemeProvider>
)

test('renders header', () => {
  render(
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  )
  const linkElement = screen.getByText(/People/i)
  expect(linkElement).toBeInTheDocument()
})
