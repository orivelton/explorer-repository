import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material/styles'
import { client } from './graphql'
import './styles/index.css'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
)

reportWebVitals()
