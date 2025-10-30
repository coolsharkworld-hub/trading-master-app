import { Box, Button, Grid } from '@mui/material'

import { Card, ErrorMessage, LoadingSpinner } from '@shared/components/common'
import { IBChart, IBChartExplainer, IBInsights, IBStreak, IBTable } from '@shared/components/reports/ib'
import { useBreakpoint, useIB } from '@shared/hooks'

interface IBWorkspaceContentProps {
  symbol: string
  from: string
  to: string
}

const IBWorkspaceContent = ({ symbol, from, to }: IBWorkspaceContentProps) => {
  const { isMobile } = useBreakpoint()

  const ibData = useIB({
    symbol,
    fromDate: from,
    toDate: to
  })

  if (ibData.loading) {
    return (
      <Card variant='elevated' sx={{ minHeight: { xs: '40vh', md: '60vh' } }}>
        <LoadingSpinner
          message={`Analyzing ${symbol} Initial Balance patterns and breakout data for the selected period...`}
          fullHeight
        />
      </Card>
    )
  }

  if (ibData.error) {
    return (
      <Card variant='elevated' sx={{ minHeight: { xs: '40vh', md: '50vh' } }}>
        <ErrorMessage
          title='Initial Balance Data Loading Failed'
          message={ibData.error}
          onRetry={ibData.refresh}
          fullHeight
        />
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button variant='contained' onClick={ibData.refresh} size={isMobile ? 'small' : 'medium'}>
            Try {symbol} Instead
          </Button>
        </Box>
      </Card>
    )
  }

  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <IBChart symbol={symbol} data={ibData.data} />
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>
        <IBInsights symbol={symbol} data={ibData.data} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <IBStreak data={ibData.data} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <IBTable symbol={symbol} data={ibData.data} />
        <IBChartExplainer />
      </Grid>
    </Grid>
  )
}

export default IBWorkspaceContent
