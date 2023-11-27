import React from 'react'
import { useQuery } from '@apollo/client'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { MuiAlert } from '../MuiAlert'
import { columns } from '../../helpers/tableConfig'
import { RepoElement, Repository } from '../../types/repository'
import { GET_REPO } from '../../graphql/query'

export default function RepoTable() {
  const { loading, error, data } = useQuery<Repository>(GET_REPO, {
    variables: {
      first: 100,
    },
  })

  if (error) return <MuiAlert severity='error' message={error?.message} />

  const rows = data?.search.repos.map((item: RepoElement) => item.repo) || []

  return (
    <Box>
      <DataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        autoHeight
        disableColumnSelector
        disableRowSelectionOnClick
      />
    </Box>
  )
}
