import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useQuery } from '@apollo/client'
import { GET_REPO } from '../../graphql/query'
import { Box } from '@mui/system'
import { RepoElement, Repository } from '../../types/repository'
import { columns } from '../../helpers/tableConfig'
import { MuiAlert } from '../MuiAlert'

export default function RepoTable() {
  const { loading, error, data } = useQuery<Repository>(GET_REPO, {
    variables: {
      first: 100,
    },
  })
  const rows = data?.search.repos.map((item: RepoElement) => item.repo) || []

  if (error) return <MuiAlert severity='error' message={error?.message} />

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
