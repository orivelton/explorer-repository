import React from 'react'
import { Container, Paper } from '@mui/material'
import RepoTable from './components/RepoTable'

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <Paper sx={{ p: 2, my: 2, textAlign: 'center' }} component='h1'>
          Explorer Repository
        </Paper>
        <RepoTable />
      </Container>
    </div>
  )
}

export default App
