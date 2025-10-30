import { Analytics, DoubleArrow, TrendingDown, TrendingUp } from '@mui/icons-material'
import { Box, Chip, Stack, Typography } from '@mui/material'

import { Card } from '@shared/components/common'
import { ORBAnalysisResult } from '@shared/types/ORBType'
import { tradingColors } from '@theme/tradingTheme'

interface InsightsProps {
  symbol: string
  data: ORBAnalysisResult | null
}

interface InsightRow {
  label: string
  data: {
    count: number
    percent: number
  }
  icon?: React.ReactNode
  color?: string
}

export const ORBInsights = ({ symbol, data }: InsightsProps) => {
  const { breakouts, breakdowns, doubleBreaks, noBreaks, totalDays } = data?.summary || {
    breakouts: { count: 0, percentage: 0 },
    breakdowns: { count: 0, percentage: 0 },
    doubleBreaks: { count: 0, percentage: 0 },
    noBreaks: { count: 0, percentage: 0 },
    totalDays: 0
  }

  const rows: InsightRow[] = [
    {
      label: 'Breakouts',
      data: { count: breakouts.count, percent: breakouts.percentage },
      icon: <TrendingUp />,
      color: tradingColors.market.bullish
    },
    {
      label: 'Breakdowns',
      data: { count: breakdowns.count, percent: breakdowns.percentage },
      icon: <TrendingDown />,
      color: tradingColors.market.bearish
    },
    {
      label: 'Double Breaks',
      data: { count: doubleBreaks.count, percent: doubleBreaks.percentage },
      icon: <DoubleArrow />,
      color: tradingColors.doubleBreak
    },
    {
      label: 'No Breaks',
      data: { count: noBreaks.count, percent: noBreaks.percentage },
      icon: <Analytics />,
      color: tradingColors.text.muted
    }
  ]

  return (
    <Card variant='premium'>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Analytics sx={{ color: tradingColors.accent.primary, fontSize: 24 }} />
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 700, color: tradingColors.text.primary }}>
            ORB Analysis Insights
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
            key={row.label}
            direction='row'
            sx={{
              py: 1.5,
              borderBottom: index < rows.length - 1 ? `1px solid ${tradingColors.border.subtle}` : 'none',
              alignItems: 'center'
            }}
          >
            <Box sx={{ flex: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ color: row.color, display: 'flex', alignItems: 'center' }}>{row.icon}</Box>
              <Typography sx={{ color: tradingColors.text.primary, fontWeight: 600 }}>{row.label}</Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography sx={{ color: tradingColors.text.primary, fontWeight: 700, fontFamily: 'monospace' }}>
                {row.data.count}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Chip
                label={`${row.data.percent.toFixed(1)}%`}
                size='small'
                sx={{
                  backgroundColor: row.color,
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
              {totalDays}
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

export default ORBInsights
