import React from 'react'
import { Container } from '@mui/material'
import RepoTable from './components/RepoTable'
import { Header } from './components/Header'
import { TokenInput } from './components/TokenInput'

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <Header />
        <RepoTable />
        <TokenInput />
      </Container>
    </div>
  )
}

export default App
