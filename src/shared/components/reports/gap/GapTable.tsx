import React from 'react'

import { Typography } from '@mui/material'

import { BaseDataTable, BaseTableColumn } from '@shared/components/common'
import { GapAnalysisReport } from '@shared/types/GAPType'
import { tradingColors } from '@theme/tradingTheme'

interface GapTableProps {
  symbol: string
  fromDate: string
  toDate: string

  data: GapAnalysisReport | null
}

const columns: BaseTableColumn[] = [
  {
    field: 'date',
    label: 'Date',
    sortable: true,
    filterable: true
  },
  {
    field: 'gapSize',
    label: 'Gap Size',
    sortable: true,
    filterable: true,
    renderCell: value => (
      <Typography
        sx={{
          fontSize: 12,
          color: Number(value) > 0 ? tradingColors.status.success : tradingColors.status.error
        }}
        fontWeight={600}
      >
        ${value.toFixed(2)}
      </Typography>
    )
  },
  {
    field: 'type',
    label: 'Gap Type',
    sortable: true,
    filterable: true,
    renderCell: value => (
      <Typography
        sx={{
          color: value === 'gap_up' ? tradingColors.status.success : tradingColors.status.error,
          fontWeight: 600,
          fontSize: 12,
          textTransform: 'capitalize'
        }}
      >
        {value.replace('_', ' ')}
      </Typography>
    )
  },
  {
    field: 'filled',
    label: 'Status',
    sortable: true,
    filterable: true,
    renderCell: value => (
      <Typography
        sx={{
          color: value ? tradingColors.status.success : tradingColors.text.muted,
          fontWeight: 600,
          fontSize: 12
        }}
      >
        {value ? 'Filled' : 'Not Filled'}
      </Typography>
    )
  }
]

export const GapTable: React.FC<GapTableProps> = ({ symbol, data }) => {
  return (
    <BaseDataTable
      data={data?.gaps || []}
      columns={columns}
      title='Gap Data Table'
      symbol={symbol}
      defaultSortField='date'
    />
  )
}
