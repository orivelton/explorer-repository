import React from 'react'
import { Container, Paper } from '@mui/material'
import RepoTable from './components/RepoTable'
import { RiGitRepositoryLine } from 'react-icons/ri'

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <Paper sx={{ p: 2, my: 2, textAlign: 'center' }} component='h1'>
          <RiGitRepositoryLine size={30} /> Explorer Repository
        </Paper>
        <RepoTable />
      </Container>
    </div>
  )
}

export default App
