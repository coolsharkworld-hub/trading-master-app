import { Analytics, DoubleArrow, TrendingUp } from '@mui/icons-material'
import { Box, Chip, Stack, Typography } from '@mui/material'

import { Card } from '@shared/components/common'
import { IBAnalysisResult } from '@shared/types/IBType'
import { tradingColors } from '@theme/tradingTheme'

interface IBInsightsProps {
  symbol: string
  data: IBAnalysisResult | null
}

export const IBInsights = ({ symbol, data }: IBInsightsProps) => {
  const getMetricColor = (key: string) => {
    if (key === 'singleBreak') return tradingColors.info
    if (key === 'doubleBreak') return tradingColors.doubleBreak
    if (key === 'noBreak') return tradingColors.text.muted
    return tradingColors.text.muted
  }

  const getMetricIcon = (key: string) => {
    if (key === 'singleBreak') return <TrendingUp />
    if (key === 'doubleBreak') return <DoubleArrow />
    if (key === 'noBreak') return <Analytics />
    return <Analytics />
  }

  const { totalDays, doubleBreaks, singleBreaks, noBreaks } = data?.summary || {
    singleBreaks: { count: 0, percentage: 0 },
    doubleBreaks: { count: 0, percentage: 0 },
    noBreaks: { count: 0, percentage: 0 },
    totalDays: 0
  }

  const rows = [
    { label: 'Single Break', key: 'singleBreak', value: singleBreaks.percentage, count: singleBreaks.count },
    { label: 'Double Break', key: 'doubleBreak', value: doubleBreaks.percentage, count: doubleBreaks.count },
    { label: 'No Break', key: 'noBreak', value: noBreaks.percentage, count: noBreaks.count }
  ]

  return (
    <Card variant='premium'>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Analytics sx={{ color: tradingColors.accent.primary, fontSize: 24 }} />
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 700, color: tradingColors.text.primary }}>
            IB Analysis Insights
          </Typography>
          <Typography variant='caption' sx={{ color: tradingColors.text.muted, fontWeight: 600 }}>
            {symbol} | {totalDays} trading days analyzed
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: tradingColors.background.tertiary,
          borderRadius: 1,
          border: `1px solid ${tradingColors.border.secondary}`,
          p: 2
        }}
      >
        <Stack direction='row' sx={{ mb: 2, pb: 1, borderBottom: `1px solid ${tradingColors.border.secondary}` }}>
          <Box sx={{ flex: 2 }}>
            <Typography
              variant='body2'
              sx={{ color: tradingColors.text.muted, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }}
            >
              Pattern
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography
              variant='body2'
              sx={{ color: tradingColors.text.muted, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }}
            >
              Count
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography
              variant='body2'
              sx={{ color: tradingColors.text.muted, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }}
            >
              Rate
            </Typography>
          </Box>
        </Stack>

        {rows.map((row, index) => (
          <Stack
            key={row.key}
            direction='row'
            sx={{
              py: 1.5,
              borderBottom: index < rows.length - 1 ? `1px solid ${tradingColors.border.subtle}` : 'none',
              alignItems: 'center'
            }}
          >
            <Box sx={{ flex: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ color: getMetricColor(row.key), display: 'flex', alignItems: 'center' }}>
                {getMetricIcon(row.key)}
              </Box>
              <Typography sx={{ color: tradingColors.text.primary, fontWeight: 600 }}>{row.label}</Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography sx={{ color: tradingColors.text.primary, fontWeight: 700, fontFamily: 'monospace' }}>
                {row.count}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Chip
                label={`${row.value.toFixed(1)}%`}
                size='small'
                sx={{
                  backgroundColor: getMetricColor(row.key),
                  color: tradingColors.text.primary,
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  minWidth: 60,
                  fontFamily: 'monospace'
                }}
              />
            </Box>
          </Stack>
        ))}

        <Stack
          direction='row'
          sx={{ pt: 2, mt: 2, borderTop: `2px solid ${tradingColors.border.primary}`, alignItems: 'center' }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography sx={{ fontWeight: 700, color: tradingColors.text.primary }}>Total Days</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography sx={{ fontWeight: 700, color: tradingColors.text.primary, fontFamily: 'monospace' }}>
              {Math.round(totalDays)}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Chip
              label='100%'
              size='small'
              sx={{
                backgroundColor: tradingColors.accent.primary,
                color: tradingColors.text.primary,
                fontWeight: 700,
                minWidth: 60,
                fontFamily: 'monospace'
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Card>
  )
}
