import React from 'react'
import { Alert } from '@mui/material'

type AlertType = {
  severity?: 'error' | 'info' | 'success' | 'warning'
  message: string
}

export function MuiAlert({ severity, message }: AlertType) {
  return (
    <Alert sx={{ mb: 2 }} severity={severity ?? 'success'}>
      {message}
    </Alert>
  )
}
