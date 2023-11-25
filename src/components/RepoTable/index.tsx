import React from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useQuery } from '@apollo/client'
import { GET_REPO } from '../../graphql/query'
import { Box } from '@mui/system'

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
    headerName: 'Stars',
    type: 'number',
    filterable: true,
    sortable: true,
  },
  {
    field: 'forkCount',
    headerName: 'Forks',
    type: 'number',
    filterable: true,
    sortable: true,
  },
]

export default function RepoTable() {
  const { loading, error, data } = useQuery(GET_REPO, {
    variables: {
      page: 10,
    },
  })

  const rows = data?.search.repos.map((item: any) => item.repo) || []

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
