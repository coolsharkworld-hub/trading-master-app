import React from 'react'

import { ArrowDownward, ArrowUpward, FilterList } from '@mui/icons-material'
import { Box, IconButton, TableCell, TableHead, TableRow } from '@mui/material'

import { tradingColors } from '@theme/tradingTheme'
import { BaseTableColumn, SortOrder } from './types'

interface TableHeaderProps {
  columns: BaseTableColumn[]
  sortField: string
  sortOrder: SortOrder
  onSort: (field: string) => void
  onFilter: (event: React.MouseEvent<HTMLElement>, field: string) => void
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns, sortField, sortOrder, onSort, onFilter }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell
            key={column.field}
            sx={{
              py: 2,
              width: column.width
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: column.sortable ? 'pointer' : 'default',
                  '&:hover': column.sortable ? { color: tradingColors.text.accent } : {}
                }}
                onClick={() => column.sortable && onSort(column.field)}
              >
                {column.label}
                {column.sortable && sortField === column.field && (
                  <Box component='span' sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
                    {sortOrder === 'asc' ? (
                      <ArrowUpward sx={{ fontSize: 16 }} />
                    ) : (
                      <ArrowDownward sx={{ fontSize: 16 }} />
                    )}
                  </Box>
                )}
              </Box>
              {column.filterable && (
                <IconButton
                  size='small'
                  onClick={e => onFilter(e, column.field)}
                  sx={{
                    color: tradingColors.text.muted,
                    '&:hover': { color: tradingColors.text.accent }
                  }}
                >
                  <FilterList sx={{ fontSize: 16 }} />
                </IconButton>
              )}
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
