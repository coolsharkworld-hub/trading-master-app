import React from 'react'

import { Typography } from '@mui/material'

import { BaseDataTable, BaseTableColumn } from '@shared/components/common'

import { ibColorsForPatterns } from '@shared/constants/color'
import { IBAnalysisResult } from '@shared/types/IBType'

interface IBTableProps {
  symbol: string
  data: IBAnalysisResult | null
}

const columns: BaseTableColumn[] = [
  {
    field: 'date',
    label: 'Date',
    sortable: true,
    filterable: true
  },
  {
    field: 'pattern',
    label: 'Breakout Type',
    sortable: true,
    filterable: true,
    renderCell: (value: string) => (
      <Typography
        sx={{
          color: ibColorsForPatterns[value],
          fontWeight: 600,
          fontSize: 12,
          textTransform: 'capitalize'
        }}
      >
        {value.replace('_', ' ')}
      </Typography>
    )
  }
]

export const IBTable: React.FC<IBTableProps> = ({ symbol, data }) => {
  return (
    <BaseDataTable
      data={data?.details || []}
      columns={columns}
      title='IB Data Table'
      symbol={symbol}
      defaultSortField='date'
    />
  )
}
