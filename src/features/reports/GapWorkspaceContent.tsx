import { Box, Button, Grid } from '@mui/material'

import { Card, ErrorMessage, LoadingSpinner } from '@shared/components/common'
import { ChartExplainer, FilledGapChart, GAPStreak, GapTable, Insights, WhatPlay } from '@shared/components/reports/gap'
import { useBreakpoint, useGAP } from '@shared/hooks'
// import TradingViewWidget from '@shared/components/ui/TradingViewWidget'

interface GapWorkspaceContentProps {
  symbol: string
  from: string
  to: string
}

const GapWorkspaceContent = ({ symbol, from, to }: GapWorkspaceContentProps) => {
  const { isMobile } = useBreakpoint()

  const gapData = useGAP({
    symbol,
    fromDate: from,
    toDate: to
  })

  if (gapData.loading) {
    return (
      <Card variant='elevated' sx={{ minHeight: { xs: '40vh', md: '60vh' } }}>
        <LoadingSpinner
          message={`Analyzing ${symbol} gaps and fetching market data for the selected period...`}
          fullHeight
        />
      </Card>
    )
  }

  if (gapData.error) {
    return (
      <Card variant='elevated' sx={{ minHeight: { xs: '40vh', md: '50vh' } }}>
        <ErrorMessage title='Data Loading Failed' message={gapData.error} onRetry={gapData.refresh} fullHeight />
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button variant='contained' onClick={gapData.refresh} size={isMobile ? 'small' : 'medium'}>
            Try {symbol} Instead
          </Button>
        </Box>
      </Card>
    )
  }

  return (
    <>
      {/* <TradingViewWidget height={500} symbol={symbol} autosize={false} /> */}
      <WhatPlay symbol={symbol} />

      <Grid container spacing={2} mt={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <FilledGapChart symbol={symbol} fromDate={from} toDate={to} data={gapData.data} />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Insights symbol={symbol} fromDate={from} toDate={to} data={gapData.data} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <GAPStreak data={gapData.data} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <GapTable symbol={symbol} fromDate={from} toDate={to} data={gapData.data} />
          <ChartExplainer />
        </Grid>
      </Grid>
    </>
  )
}

export default GapWorkspaceContent
