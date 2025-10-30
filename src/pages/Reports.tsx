import { useState } from 'react'

import { Box, Divider, Grid } from '@mui/material'

import moment from 'moment'

import { useBreakpoint } from '@shared/hooks'

import GapWorkspaceContent from '@features/reports/GapWorkspaceContent'
import IBWorkspaceContent from '@features/reports/IBWorkspaceContent'
import ORBWorkspaceContent from '@features/reports/ORBWorkspaceContent'
import ReportsHeader from '@features/reports/ReportsHeader'
import IconsSideBar from '@features/reports/ReportsIconBar'
import { ReportSidebarContent, ReportsSidebar } from '@features/reports/ReportsSidebar'
import RightSidebar from '@features/reports/RightSidebar'

export type ReportType = 'gap' | 'orb' | 'ib' | 'custom'

const ReportsPage = () => {
  const [symbol, setSymbol] = useState('SPY')
  const [dateRange, setDateRange] = useState('1 week')
  const [dateRangeValue, setDateRangeValue] = useState<[Date, Date]>(() => {
    const today = new Date()
    const lastWeek = new Date()
    lastWeek.setDate(today.getDate() - 7)
    return [lastWeek, today]
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [reportType, setReportType] = useState<ReportType>('gap')
  const { isMobile } = useBreakpoint()

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol)
  }

  const handleReportTypeChange = (newReportType: ReportType) => {
    setReportType(newReportType)
    if (!['1 week', '1 month', '3 months', '6 months', '1 year', '5 years'].includes(dateRange)) {
      setDateRange('1 week')
    }
  }

  const renderWorkspaceContent = () => {
    switch (reportType) {
      case 'orb':
        return (
          <ORBWorkspaceContent
            symbol={symbol}
            from={moment(dateRangeValue[0]).format('YYYY-MM-DD')}
            to={moment(dateRangeValue[1]).format('YYYY-MM-DD')}
          />
        )
      case 'ib':
        return (
          <IBWorkspaceContent
            symbol={symbol}
            from={moment(dateRangeValue[0]).format('YYYY-MM-DD')}
            to={moment(dateRangeValue[1]).format('YYYY-MM-DD')}
          />
        )
      case 'gap':
      default:
        return (
          <GapWorkspaceContent
            symbol={symbol}
            from={moment(dateRangeValue[0]).format('YYYY-MM-DD')}
            to={moment(dateRangeValue[1]).format('YYYY-MM-DD')}
          />
        )
    }
  }

  return (
    <Box bgcolor='background.default' minHeight='100vh' color='text.primary'>
      <ReportsHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} reportType={reportType} />

      <ReportsSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        symbol={symbol}
        dateRange={dateRange}
        reportType={reportType}
        handleSymbolChange={handleSymbolChange}
        setDateRange={setDateRange}
        setReportType={handleReportTypeChange}
        dateRangeValue={dateRangeValue}
        setDateRangeValue={setDateRangeValue}
      />

      <Grid container spacing={2} sx={{ p: { xs: 1, md: 2 } }}>
        {!isMobile && (
          <>
            <Grid size={{ lg: 2 }}>
              <ReportSidebarContent
                symbol={symbol}
                reportType={reportType}
                handleSymbolChange={handleSymbolChange}
                setReportType={handleReportTypeChange}
                dateRangeValue={dateRangeValue}
                setDateRangeValue={setDateRangeValue}
              />
            </Grid>
            <Divider orientation='vertical' flexItem />
          </>
        )}

        <Grid
          size={{ xs: 12, lg: 7.6 }}
          sx={{
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          {renderWorkspaceContent()}
        </Grid>
        {!isMobile && (
          <>
            <Divider orientation='vertical' flexItem />
            <Grid size={{ lg: 1.5 }}>
              <RightSidebar />
            </Grid>
            <Divider orientation='vertical' flexItem />
            <Grid
              size={{ lg: 0.5 }}
              sx={{
                justifyContent: 'center'
              }}
            >
              <IconsSideBar />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default ReportsPage
