import React, { ChangeEvent, useState } from 'react'
import { TextField, Typography } from '@mui/material'

export default function TokenInput() {
  const hasToken = localStorage.getItem('token')
  const [token, setToken] = useState(hasToken ?? '')

  const handleToken = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setToken(value)
    localStorage.setItem('token', value)
    value && window.location.reload()
  }

  return (
    <>
      <TextField
        variant='outlined'
        placeholder='Add your github personal access token'
        sx={{ my: 2 }}
        fullWidth
        value={token}
        onChange={handleToken}
        error={!token}
      />
      <Typography component='p'>
        <a
          href='https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-a-personal-access-token'
          target='_blank'
          rel='noreferrer'
        >
          Get you personal access token
        </a>
      </Typography>
    </>
  )
}