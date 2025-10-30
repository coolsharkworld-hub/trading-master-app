import { MouseEvent, useState } from 'react'

import { Remove, TableChart } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  MenuItem,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography
} from '@mui/material'

import { tradingColors, tradingRadius, tradingShadows } from '@theme/tradingTheme'
import { ErrorMessage } from '../ErrorMessage'
import { LoadingSpinner } from '../LoadingSpinner'
import { TableHeader } from './TableHeader'
import { BaseTableProps, FilterOperator, FilterValue, SortOrder } from './types'

export function BaseDataTable<T extends Record<string, any>>({
  data,
  columns,
  title,
  symbol,
  loading = false,
  error = null,
  defaultSortField,
  defaultSortOrder = 'desc',
  containerHeight = 700,
  onFilterChange,
  onSortChange
}: BaseTableProps<T>) {
  const [sortField, setSortField] = useState(defaultSortField || '')
  const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder)
  const [filterValues, setFilterValues] = useState<Record<string, FilterValue>>({})
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [currentFilterField, setCurrentFilterField] = useState<string | null>(null)
  const [tempInputValue, setTempInputValue] = useState('')
  const [tempOperator, setTempOperator] = useState<FilterOperator>('=')

  const handleSort = (field: string) => {
    const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'
    setSortField(field)
    setSortOrder(newOrder)
    onSortChange?.(field, newOrder)
  }

  const handleFilterClick = (event: MouseEvent<HTMLElement>, field: string) => {
    setAnchorEl(event.currentTarget)
    setCurrentFilterField(field)
    const existingFilter = filterValues[field]
    setTempInputValue(existingFilter?.value || '')
    setTempOperator(existingFilter?.operator || '=')
  }

  const handleApplyFilter = () => {
    if (currentFilterField) {
      const newFilters = {
        ...filterValues,
        [currentFilterField]: { operator: tempOperator, value: tempInputValue }
      }
      setFilterValues(newFilters)
      onFilterChange?.(newFilters)
    }
    setAnchorEl(null)
    setCurrentFilterField(null)
    setTempInputValue('')
    setTempOperator('=')
  }

  const clearAllFilters = () => {
    setFilterValues({})
    onFilterChange?.({})
  }

  if (loading || error || !data) {
    return (
      <Box
        sx={{
          p: 4,
          mt: 3,
          borderRadius: tradingRadius.lg,
          background: tradingColors.background.secondary,
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: tradingShadows.md
        }}
      >
        {loading && <LoadingSpinner message='Loading table data...' />}
        {error && <ErrorMessage message={error} severity='error' />}
        {!data && <ErrorMessage message='No table data available' severity='warning' />}
      </Box>
    )
  }

  // Apply filters to data
  const filteredData = data.filter(row =>
    Object.entries(filterValues).every(([field, filter]) => {
      if (!filter) return true

      const val = (row[field] ?? '').toString()
      const inputVal = filter.value ?? ''

      switch (filter.operator) {
        case '=':
          return val.toLowerCase() === inputVal.toLowerCase()
        case '!=':
          return val.toLowerCase() !== inputVal.toLowerCase()
        case '>':
          return Number(val) > Number(inputVal)
        case '<':
          return Number(val) < Number(inputVal)
        case 'blank':
          return val === ''
        case 'notblank':
          return val !== ''
        default:
          return true
      }
    })
  )

  // Sort the filtered data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0

    let aVal = a[sortField]
    let bVal = b[sortField]

    // Handle date fields
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      // Try parsing as date first
      const dateA = new Date(aVal).getTime()
      const dateB = new Date(bVal).getTime()

      if (!isNaN(dateA) && !isNaN(dateB)) {
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
      }

      // If not dates, compare as strings
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }

    // Handle numeric values
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    }

    // Default string comparison
    return sortOrder === 'asc' ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal))
  })

  const activeFilterCount = Object.keys(filterValues).length

  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: tradingRadius.lg,
        background: tradingColors.background.secondary,
        border: `1px solid ${tradingColors.border.primary}`,
        boxShadow: tradingShadows.md,
        display: 'flex',
        flexDirection: 'column',
        height: containerHeight,
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2.5,
          pb: 2.5,
          borderBottom: `1px solid ${tradingColors.border.secondary}`
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: tradingRadius.md,
              // background: tradingColors.background.tertiary,
              border: `1px solid ${tradingColors.border.secondary}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TableChart sx={{ fontSize: 20, color: tradingColors.text.accent }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: tradingColors.text.primary,
                fontSize: { xs: 16, md: 20 },
                fontWeight: 700,
                letterSpacing: '0.01em'
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: tradingColors.text.muted,
                fontSize: { xs: 11, md: 12 }
              }}
            >
              {data.length} records
            </Typography>
          </Box>
        </Box>
        <Chip
          label={symbol}
          size='medium'
          sx={{
            background: tradingColors.background.tertiary,
            color: tradingColors.text.primary,
            fontWeight: 700,
            fontSize: 14,
            height: 34,
            px: 1.5,
            border: `1px solid ${tradingColors.border.secondary}`
          }}
        />
      </Box>

      <TableContainer
        sx={{
          flex: 1,
          overflow: 'auto',
          borderRadius: tradingRadius.md,
          border: `1px solid ${tradingColors.border.secondary}`,
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: tradingColors.background.primary,
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: tradingColors.border.primary,
            borderRadius: '4px',
            '&:hover': {
              background: tradingColors.border.accent
            }
          }
        }}
      >
        <Table size='small' stickyHeader>
          <TableHeader
            columns={columns}
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={handleSort}
            onFilter={handleFilterClick}
          />

          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  sx={{
                    textAlign: 'center',
                    py: 6,
                    color: tradingColors.text.muted,
                    borderBottom: 'none'
                  }}
                >
                  <Remove sx={{ fontSize: 40, opacity: 0.3, mb: 1 }} />
                  <Typography sx={{ fontSize: 14, fontWeight: 500 }}>No data matches your filters</Typography>
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': {
                      backgroundColor: tradingColors.background.secondary,
                      transition: 'background-color 0.2s ease'
                    },
                    '&:last-child td': {
                      borderBottom: 'none'
                    }
                  }}
                >
                  {columns.map(column => (
                    <TableCell
                      key={column.field}
                      sx={{
                        color: tradingColors.text.primary,
                        fontSize: 13,
                        fontWeight: 500,
                        borderBottom: `1px solid ${tradingColors.border.subtle}`
                      }}
                    >
                      {column.renderCell ? column.renderCell(row[column.field]) : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {activeFilterCount > 0 && (
        <Box
          sx={{
            mt: 2,
            p: 1.5,
            borderRadius: tradingRadius.sm,
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: `1px solid ${tradingColors.border.accent}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              color: tradingColors.text.accent,
              fontSize: 12,
              fontWeight: 600
            }}
          >
            {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active
          </Typography>
          <Button
            size='small'
            onClick={clearAllFilters}
            sx={{
              color: tradingColors.text.accent,
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(59, 130, 246, 0.15)'
              }
            }}
          >
            Clear All
          </Button>
        </Box>
      )}

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              p: 2,
              borderRadius: tradingRadius.md,
              background: tradingColors.background.secondary,
              border: `1px solid ${tradingColors.border.primary}`,
              boxShadow: tradingShadows.xl,
              minWidth: 250
            }
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <TextField
            select
            size='small'
            label='Operator'
            value={tempOperator}
            onChange={e => setTempOperator(e.target.value as FilterOperator)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: tradingColors.text.primary,
                '& fieldset': {
                  borderColor: tradingColors.border.primary
                }
              },
              '& .MuiInputLabel-root': {
                color: tradingColors.text.muted
              }
            }}
          >
            <MenuItem value='='>=</MenuItem>
            <MenuItem value='!='>!=</MenuItem>
            <MenuItem value='>'>&gt;</MenuItem>
            <MenuItem value='<'>&lt;</MenuItem>
            <MenuItem value='blank'>Blank</MenuItem>
            <MenuItem value='notblank'>Not Blank</MenuItem>
          </TextField>

          <TextField
            size='small'
            label='Value'
            value={tempInputValue}
            onChange={e => setTempInputValue(e.target.value)}
            disabled={tempOperator === 'blank' || tempOperator === 'notblank'}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: tradingColors.text.primary,
                '& fieldset': {
                  borderColor: tradingColors.border.primary
                }
              },
              '& .MuiInputLabel-root': {
                color: tradingColors.text.muted
              }
            }}
          />

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            <Button
              onClick={() => setAnchorEl(null)}
              size='small'
              sx={{
                color: tradingColors.text.muted,
                '&:hover': {
                  backgroundColor: tradingColors.background.tertiary
                }
              }}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              onClick={handleApplyFilter}
              size='small'
              sx={{
                backgroundColor: tradingColors.primary,
                '&:hover': {
                  backgroundColor: tradingColors.primaryDark
                }
              }}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  )
}
