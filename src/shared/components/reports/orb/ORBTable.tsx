import React from 'react'

import { Typography } from '@mui/material'

import { BaseDataTable, BaseTableColumn } from '@shared/components/common'
import { orbColorsForPatterns } from '@shared/constants/color'
import { ORBAnalysisResult } from '@shared/types/ORBType'

interface ORBTableProps {
  symbol: string
  data: ORBAnalysisResult | null
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
          color: orbColorsForPatterns[value],
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

export const ORBTable: React.FC<ORBTableProps> = ({ data, symbol }) => {
  return (
    <BaseDataTable
      data={data?.details || []}
      columns={columns}
      title='ORB Data Table'
      symbol={symbol}
      defaultSortField='date'
    />
  )
}
