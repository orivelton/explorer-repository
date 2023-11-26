import { Paper } from '@mui/material'
import { RiGitRepositoryLine } from 'react-icons/ri'

export function Header() {
  return (
    <Paper sx={{ p: 2, my: 2, textAlign: 'center' }} component='h1'>
      <RiGitRepositoryLine size={30} /> Explorer Repository
    </Paper>
  )
}
