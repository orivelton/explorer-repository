import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { client } from './graphql'
import { ApolloProvider } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)

reportWebVitals()
