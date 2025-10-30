import { Box, Typography } from '@mui/material'

import { Card } from '@shared/components/common'
import { IBAnalysisResult } from '@shared/types/IBType'
import { tradingColors, tradingRadius } from '@theme/tradingTheme'

interface IBChartProps {
  symbol: string
  data: IBAnalysisResult | null
}

export const IBChart = ({ symbol, data }: IBChartProps) => {
  const { singleBreaks, doubleBreaks, noBreaks, totalDays } = data?.summary || {
    singleBreaks: { count: 0, percentage: 0 },
    doubleBreaks: { count: 0, percentage: 0 },
    noBreaks: { count: 0, percentage: 0 },
    totalDays: 0
  }

  const count = singleBreaks.count + doubleBreaks.count + noBreaks.count

  const chartSegments = [
    {
      label: 'Single Break',
      value: singleBreaks.count,
      percentage: singleBreaks.percentage,
      color: tradingColors.accent.cyan
    },
    {
      label: 'Double Break',
      value: doubleBreaks.count,
      percentage: doubleBreaks.percentage,
      color: tradingColors.warning
    },
    { label: 'No Break', value: noBreaks.count, percentage: noBreaks.percentage, color: tradingColors.text.muted }
  ].filter(seg => seg.value > 0)

  const createDonutSegment = (percentage: number, color: string, offset: number) => {
    const strokeDasharray = `${percentage} ${100 - percentage}`
    const strokeDashoffset = -offset

    return {
      strokeDasharray,
      strokeDashoffset,
      stroke: color,
      fill: 'transparent',
      strokeWidth: 8,
      r: 45,
      cx: 60,
      cy: 60
    }
  }

  let cumulativeOffset = 0

  return (
    <Card variant='elevated'>
      <Typography sx={{ color: tradingColors.text.primary, fontSize: { xs: 16, md: 20 }, fontWeight: 700, mb: 2 }}>
        IB Chart - {symbol}
      </Typography>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 3
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width={120} height={120} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={60} cy={60} r={45} fill='transparent' stroke={tradingColors.border.secondary} strokeWidth={2} />

            {chartSegments.map((segment, index) => {
              const segmentProps = createDonutSegment(segment.percentage, segment.color, cumulativeOffset)
              cumulativeOffset += segment.percentage

              return segment.percentage > 0 ? (
                <circle
                  key={index}
                  {...segmentProps}
                  style={{
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.5))'
                  }}
                />
              ) : null
            })}
          </svg>

          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: tradingColors.text.primary }}>
              {count}
            </Typography>
            <Typography sx={{ fontSize: 10, color: tradingColors.text.muted }}>Total Days</Typography>
          </Box>
        </Box>

        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {chartSegments.map((segment, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 1.5,
                  backgroundColor: tradingColors.background.secondary,
                  borderRadius: tradingRadius.md,
                  border: `1px solid ${tradingColors.border.secondary}`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: tradingColors.background.tertiary,
                    transform: 'translateX(4px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: segment.color,
                      boxShadow: `0 0 8px ${segment.color}50`
                    }}
                  />
                  <Typography sx={{ fontSize: 12, color: tradingColors.text.primary, fontWeight: 600 }}>
                    {segment.label}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ fontSize: 11, color: tradingColors.text.secondary }}>
                    {segment.value} days
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: segment.color,
                      minWidth: 45,
                      textAlign: 'right'
                    }}
                  >
                    {segment.percentage.toFixed(2)}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: tradingColors.background.secondary,
              borderRadius: tradingRadius.md,
              border: `1px solid ${tradingColors.border.secondary}`
            }}
          >
            <Typography
              sx={{ fontSize: 11, color: tradingColors.text.muted, mb: 1, fontWeight: 600, letterSpacing: 1 }}
            >
              ANALYSIS PERIOD
            </Typography>
            {/* <Typography sx={{ fontSize: 12, color: tradingColors.text.primary, mb: 0.5, fontWeight: 600 }}>
              {chartData.timeRange.from === chartData.timeRange.to
                ? `Single Day: ${new Date(chartData.timeRange.from).toLocaleDateString()}`
                : `${new Date(chartData.timeRange.from).toLocaleDateString()} - ${new Date(chartData.timeRange.to).toLocaleDateString()}`}
            </Typography> */}
            <Typography sx={{ fontSize: 10, color: tradingColors.text.secondary }}>{totalDays} trading days</Typography>

            {count > 1 && (
              <Typography sx={{ fontSize: 10, color: tradingColors.text.secondary, mt: 1 }}>
                Most Common:{' '}
                {chartSegments.reduce((prev, current) => (prev.percentage > current.percentage ? prev : current)).label}{' '}
                (
                {chartSegments
                  .reduce((prev, current) => (prev.percentage > current.percentage ? prev : current))
                  .percentage.toFixed(2)}
                %)
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
