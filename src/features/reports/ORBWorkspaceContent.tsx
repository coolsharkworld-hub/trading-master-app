import { useState } from 'react'

import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'

import { Card, ErrorMessage, LoadingSpinner } from '@shared/components/common'
import { ORBChart, ORBChartExplainer, ORBInsights, ORBStreak, ORBTable } from '@shared/components/reports/orb'
import { useORB } from '@shared/hooks'
import { tradingColors } from '@theme/tradingTheme'

interface ORBWorkspaceContentProps {
  symbol: string
  from: string
  to: string
}

const minutesOptions = [5, 15, 30]

const ORBWorkspaceContent = ({ symbol, from, to }: ORBWorkspaceContentProps) => {
  const [orMinutes, setOrMinutes] = useState<number>(15)
  const orbData = useORB({
    orMinutes,
    symbol,
    fromDate: from,
    toDate: to
  })

  if (orbData.loading) {
    return (
      <Card variant='elevated' sx={{ minHeight: { xs: '40vh', md: '60vh' } }}>
        <LoadingSpinner
          message={`Analyzing ${symbol} Opening Range Breakout patterns and market data for the selected period...`}
          fullHeight
        />
      </Card>
    )
  }

  if (orbData.error) {
    return (
      <Card variant='elevated' sx={{ minHeight: { xs: '40vh', md: '50vh' } }}>
        <ErrorMessage
          title='Opening Range Breakout Data Loading Failed'
          message={orbData.error}
          onRetry={orbData.refresh}
          fullHeight
        />
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button variant='contained' onClick={orbData.refresh}>
            Try {symbol} Instead
          </Button>
        </Box>
      </Card>
    )
  }

  return (
    <>
      <Card variant='elevated' sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant='body2' sx={{ fontWeight: 700, color: tradingColors.text.primary }}>
            Opening Range Duration
          </Typography>
          <Typography variant='caption' sx={{ color: tradingColors.text.secondary }}>
            Minute-level analysis with accurate double break detection
          </Typography>
        </Box>
        <Stack direction='row' gap={1}>
          {minutesOptions.map(minutes => (
            <Chip
              key={minutes}
              label={`${minutes}min`}
              size='small'
              onClick={() => setOrMinutes(minutes)}
              sx={{
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: orMinutes === minutes ? tradingColors.accent.purple : tradingColors.background.level2,
                color: orMinutes === minutes ? tradingColors.text.primary : tradingColors.text.secondary,
                '&:hover': {
                  backgroundColor: orMinutes === minutes ? tradingColors.accent.purple : tradingColors.background.level3
                }
              }}
            />
          ))}
        </Stack>
      </Card>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ORBChart symbol={symbol} fromDate={from} toDate={to} data={orbData.data} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ORBInsights symbol={symbol} data={orbData.data} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ORBStreak data={orbData.data} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ORBTable data={orbData.data} symbol={symbol} />
          <ORBChartExplainer />
        </Grid>
      </Grid>
    </>
  )
}

export default ORBWorkspaceContent
