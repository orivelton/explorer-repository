import { GridRenderCellParams } from '@mui/x-data-grid'
import { FaStar } from 'react-icons/fa'
import { PiGitForkBold } from 'react-icons/pi'

export const columns = [
  {
    field: 'name',
    headerName: 'Name',
    filterable: true,
    width: 300,
    renderCell: ({ row: { name, url, description } }: GridRenderCellParams) => (
      <a href={url} title={description}>
        {name}
      </a>
    ),
  },
  {
    field: 'stargazerCount',
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
    filterable: true,
    sortable: true,
    renderHeader: () => (
      <strong>
        <PiGitForkBold /> Forks
      </strong>
    ),
  },
]
