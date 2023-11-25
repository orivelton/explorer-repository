import React from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useQuery } from '@apollo/client'
import { GET_REPO } from '../../graphql/query'
import { Box } from '@mui/system'
import { RepoElement, Repository } from '../../types/repository'
import { Alert } from '@mui/material'
import { FaStar } from 'react-icons/fa'
import { PiGitForkBold } from 'react-icons/pi'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    filterable: true,
    width: 300,
    renderCell: ({ row }: GridRenderCellParams) => {
      return (
        <a href={row.url} title={row.description}>
          {row.name}
        </a>
      )
    },
  },
  {
    field: 'stargazerCount',
    type: 'number',
    filterable: true,
    sortable: true,
    renderHeader: () => (
      <strong>
        <FaStar /> Stars
      </strong>
    ),
  },
  {
    field: 'forkCount',
    headerName: 'Forks',
    type: 'number',
    filterable: true,
    sortable: true,
    renderHeader: () => (
      <strong>
        <PiGitForkBold /> Forks
      </strong>
    ),
  },
]

export default function RepoTable() {
  const { loading, error, data } = useQuery<Repository>(GET_REPO, {
    variables: {
      page: 10,
    },
  })

  const rows = data?.search.repos.map((item: RepoElement) => item.repo) || []

  return (
    <Box>
      {error ? (
        <Alert sx={{ mb: 2 }} severity='error'>
          {error?.message}
        </Alert>
      ) : null}

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
