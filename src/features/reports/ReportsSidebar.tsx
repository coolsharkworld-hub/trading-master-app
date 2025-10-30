import { memo, useMemo, type FC, type ReactElement } from 'react'

import { AccessTime, Assessment, BarChart, DataUsage, ShowChart, TrendingUp } from '@mui/icons-material'
import { Box, Drawer, MenuItem, Stack, TextField, Typography } from '@mui/material'

import { CustomProvider, DateRangePicker } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

import { ReportType } from '@pages/Reports'
import { Card } from '@shared/components/common'
import { selectOptions } from '@shared/constants/reports'

interface ReportTypeOption {
  value: ReportType
  label: string
  description: string
}

const DRAWER_WIDTH = 320

const REPORT_TYPE_OPTIONS: readonly ReportTypeOption[] = [
  {
    value: 'gap',
    label: 'Gap Fill Analysis',
    description: 'Analyze gap patterns & fill rates'
  },
  {
    value: 'orb',
    label: 'Opening Range Breakout',
    description: 'Track opening range momentum'
  },
  { value: 'ib', label: 'Initial Balance', description: 'Initial balance analysis' },
  { value: 'custom', label: 'Custom Report', description: 'Build custom analysis' }
] as const

const REPORT_ICONS: Record<ReportType, ReactElement> = {
  gap: <Assessment />,
  orb: <TrendingUp />,
  ib: <DataUsage />,
  custom: <BarChart />
}

const PRO_TIP_TEXT: Record<ReportType, string> = {
  gap: 'Gap analysis works best with 1-3 month periods for reliable patterns.',
  orb: 'ORB analysis focuses on opening range breakouts over time.',
  ib: 'Initial Balance analysis tracks early session trading ranges.',
  custom: 'Custom reports allow flexible analysis parameters.'
}

const symbolOptions = selectOptions.find(opt => opt.id === 'symbol')?.items || []

const getDateRange = (type: string): [Date, Date] => {
  const today = new Date()
  const start = new Date()

  switch (type) {
    case '1week':
      start.setDate(today.getDate() - 7)
      break
    case '1month':
      start.setMonth(today.getMonth() - 1)
      break
    case '3months':
      start.setMonth(today.getMonth() - 3)
      break
    case '6months':
      start.setMonth(today.getMonth() - 6)
      break
    case 'ytd':
      start.setMonth(0, 1)
      break
    case '1year':
      start.setFullYear(today.getFullYear() - 1)
      break
    case '2years':
      start.setFullYear(today.getFullYear() - 2)
      break
    case '3years':
      start.setFullYear(today.getFullYear() - 3)
      break
    case '5years':
      start.setFullYear(today.getFullYear() - 5)
      break
  }

  return [start, today]
}

const RANGE_SHORTCUTS = [
  {
    label: '1 Week',
    value: getDateRange('1week')
  },
  {
    label: '1 Month',
    value: getDateRange('1month')
  },
  {
    label: '3 Months',
    value: getDateRange('3months')
  },
  {
    label: '6 Months',
    value: getDateRange('6months')
  },
  {
    label: 'YTD',
    value: getDateRange('ytd')
  },
  {
    label: '1 Year',
    value: getDateRange('1year')
  },
  {
    label: '2 Years',
    value: getDateRange('2years')
  },
  {
    label: '3 Years',
    value: getDateRange('3years')
  },
  {
    label: '5 Years',
    value: getDateRange('5years')
  }
]

interface ReportsSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  symbol: string
  dateRange: string
  reportType: ReportType
  handleSymbolChange: (symbol: string) => void
  setDateRange: (range: string) => void
  setReportType: (type: ReportType) => void
  dateRangeValue: [Date, Date]
  setDateRangeValue: (value: [Date, Date]) => void
}

interface ReportSidebarContentProps {
  symbol: string
  reportType: ReportType
  handleSymbolChange: (symbol: string) => void
  setReportType: (type: ReportType) => void
  dateRangeValue: [Date, Date]
  setDateRangeValue: (value: [Date, Date]) => void
}

export const ReportSidebarContent: FC<ReportSidebarContentProps> = memo(
  ({ symbol, reportType, handleSymbolChange, setReportType, dateRangeValue, setDateRangeValue }) => {
    const reportIcon = useMemo(() => REPORT_ICONS[reportType], [reportType])

    return (
      <Card variant='elevated' sx={{ height: '100%', overflowY: 'auto', p: 3 }}>
        <Stack direction='row' alignItems='center' gap={2} mb={3}>
          <Assessment color='primary' />
          <Typography variant='h6'>Report Configuration</Typography>
        </Stack>

        <Stack spacing={3}>
          <Box>
            <Stack alignItems='center' direction='row' gap={1} mb={1}>
              {reportIcon}
              <Typography variant='subtitle2' color='text.secondary' fontWeight={600}>
                Analysis Type
              </Typography>
            </Stack>
            <TextField
              select
              size='small'
              fullWidth
              value={reportType}
              onChange={e => setReportType(e.target.value as ReportType)}
              variant='outlined'
            >
              {REPORT_TYPE_OPTIONS.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box>
            <Stack alignItems='center' direction='row' gap={1} mb={1}>
              <ShowChart sx={{ fontSize: 18 }} />
              <Typography variant='subtitle2' color='text.secondary' fontWeight={600}>
                Symbol Selection
              </Typography>
            </Stack>
            <TextField
              select
              size='small'
              fullWidth
              value={symbol}
              onChange={e => handleSymbolChange(e.target.value)}
              variant='outlined'
            >
              {symbolOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box>
            <Stack alignItems='center' direction='row' gap={1} mb={1}>
              <AccessTime sx={{ fontSize: 18 }} />
              <Typography variant='subtitle2' color='text.secondary' fontWeight={600}>
                Time Period
              </Typography>
            </Stack>
            <CustomProvider theme='dark'>
              <DateRangePicker
                format='MM/dd/yyyy'
                value={[dateRangeValue[0], dateRangeValue[1]] as [Date, Date]}
                onChange={(value: [Date, Date] | null) => {
                  if (value) {
                    setDateRangeValue([value[0], value[1]])
                  }
                }}
                ranges={RANGE_SHORTCUTS}
                placeholder='Select Date Range'
                style={{ width: '100%' }}
                showOneCalendar
              />
            </CustomProvider>
          </Box>

          <Box
            sx={{
              p: 2,
              backgroundColor: 'surface.secondary',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Typography variant='caption' color='text.secondary' fontWeight={600}>
              💡 Pro Tip
            </Typography>
            <Typography variant='caption' component='p' mt={0.5}>
              {PRO_TIP_TEXT[reportType]}
            </Typography>
          </Box>
        </Stack>
      </Card>
    )
  }
)

export const ReportsSidebar: FC<ReportsSidebarProps> = memo(
  ({
    sidebarOpen,
    setSidebarOpen,
    symbol,
    reportType,
    handleSymbolChange,
    setReportType,
    dateRangeValue,
    setDateRangeValue
  }) => (
    <Drawer
      variant='temporary'
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: DRAWER_WIDTH,
          bgcolor: 'surface.primary',
          borderRight: '1px solid',
          borderRightColor: 'divider'
        }
      }}
    >
      <ReportSidebarContent
        symbol={symbol}
        reportType={reportType}
        handleSymbolChange={handleSymbolChange}
        setReportType={setReportType}
        dateRangeValue={dateRangeValue}
        setDateRangeValue={setDateRangeValue}
      />
    </Drawer>
  )
)
