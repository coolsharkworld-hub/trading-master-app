import { Box, CardContent, Grid, Card as MuiCard, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import { Card } from '@shared/components/common'
import { ORBAnalysisResult } from '@shared/types/ORBType'
import { tradingColors, tradingRadius } from '@theme/tradingTheme'

interface ORBChartProps {
  symbol: string
  fromDate: string
  toDate: string
  data: ORBAnalysisResult | null
  orMinutes?: number
}

interface ORBChartColumnProps {
  value: number
  label: string
  color: string
  count: number
  subLabel?: string
}

export const ORBChartColumn = ({ value, label, color, count, subLabel }: ORBChartColumnProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ textAlign: 'center', flex: 1, minWidth: 80 }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 120,
          height: 200,
          borderRadius: tradingRadius.md,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column-reverse',
          backgroundColor: tradingColors.background.tertiary,
          position: 'relative',
          mx: 'auto',
          border: `1px solid ${tradingColors.border.secondary}`
        }}
      >
        <Box
          sx={{
            height: `${value}%`,
            width: '100%',
            bgcolor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'height 0.5s ease',
            minHeight: value > 0 ? '20px' : '0px'
          }}
        >
          {value > 0 && (
            <Typography
              sx={{
                fontSize: 10,
                color: 'white',
                fontWeight: 600
              }}
            >
              {value.toFixed(0)}%
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            height: `${100 - value}%`,
            width: '100%',
            bgcolor: tradingColors.background.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {value === 0 && (
            <Typography
              sx={{
                fontSize: 10,
                color: tradingColors.text.muted,
                fontWeight: 600
              }}
            >
              N/A
            </Typography>
          )}
        </Box>
      </Box>
      <Typography
        sx={{
          color: tradingColors.text.secondary,
          fontSize: 12,
          mt: 1,
          fontWeight: isMobile ? 400 : 500
        }}
      >
        {label}
      </Typography>
      {subLabel && (
        <Typography
          sx={{
            color: isMobile ? 'darkgray' : 'lightgray',
            fontSize: 10,
            mt: 0.5
          }}
        >
          {subLabel}
        </Typography>
      )}
      <Typography
        sx={{
          color: isMobile ? 'darkgray' : 'lightgray',
          fontSize: 10
        }}
      >
        {count} occurrences
      </Typography>
    </Box>
  )
}

export const ORBChart = ({ data, symbol, fromDate, toDate }: ORBChartProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const { breakouts, breakdowns, doubleBreaks, noBreaks } = data?.summary || {
    breakouts: { count: 0, percentage: 0 },
    breakdowns: { count: 0, percentage: 0 },
    doubleBreaks: { count: 0, percentage: 0 },
    noBreaks: { count: 0, percentage: 0 }
  }

  const getChartData = () => {
    const charts = []

    if (breakouts.count > 0) {
      charts.push({
        value: breakouts.percentage,
        label: 'Breakouts',
        subLabel: 'Above OR High',
        color: tradingColors.success,
        count: breakouts.count
      })
    }

    if (breakdowns.count > 0) {
      charts.push({
        value: breakdowns.percentage,
        label: 'Breakdowns',
        subLabel: 'Below OR Low',
        color: tradingColors.danger,
        count: breakdowns.count
      })
    }

    if (doubleBreaks.count > 0) {
      charts.push({
        value: doubleBreaks.percentage,
        label: 'Double Breaks',
        subLabel: 'Same Direction Twice',
        color: tradingColors.warning,
        count: doubleBreaks.count
      })
    }

    if (noBreaks.count > 0) {
      charts.push({
        value: noBreaks.percentage,
        label: 'No Breaks',
        subLabel: 'Inside OR',
        color: tradingColors.info,
        count: noBreaks.count
      })
    }

    return charts
  }

  const displayChartData = getChartData()
  const hasCharts = displayChartData.length > 0

  const totalOccurrences = breakouts.count + breakdowns.count + doubleBreaks.count + noBreaks.count

  return (
    <Card variant='elevated'>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            color: tradingColors.text.muted,
            fontSize: { xs: 12, sm: 14 },
            mb: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
        >
          ORB Analysis
        </Typography>
        <Typography
          sx={{
            color: tradingColors.text.primary,
            fontSize: { xs: 14, sm: 18 },
            mb: 1,
            fontWeight: 700
          }}
        >
          Opening Range Breakout | {symbol} | 9:30 am - 10:00 am
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 0 }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 11, sm: 13 },
              color: tradingColors.text.secondary
            }}
          >
            built by <span style={{ color: tradingColors.accent.primary, fontWeight: 600 }}>TradeMaster</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 11, sm: 13 },
              color: tradingColors.text.muted
            }}
          >
            {/* {summary.timeRange.firstDate} - {summary.timeRange.lastDate} */}
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {hasCharts ? (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: { xs: 1, md: 2 },
                justifyContent: 'center',
                mb: 3,
                flexWrap: isTablet ? 'wrap' : 'nowrap',
                pl: { xs: 4, md: 6 }
              }}
            >
              <Stack
                direction='column-reverse'
                justifyContent='space-between'
                sx={{
                  position: 'absolute',
                  left: { xs: 8, md: 12 },
                  height: 200,
                  width: { xs: 20, md: 40 }
                }}
              >
                {[0, 25, 50, 75, 100].map(val => (
                  <Typography
                    key={val}
                    sx={{
                      fontSize: { xs: 10, md: 12 },
                      color: isMobile ? 'darkgray' : 'gray',
                      textAlign: 'right',
                      width: '100%'
                    }}
                  >
                    {val}%
                  </Typography>
                ))}
              </Stack>

              {displayChartData.map((chart, index) => (
                <ORBChartColumn
                  key={index}
                  value={chart.value}
                  label={chart.label}
                  subLabel={chart.subLabel}
                  color={chart.color}
                  count={chart.count}
                />
              ))}
            </Box>

            <Stack
              direction='row'
              sx={{
                gap: 2,
                mt: 3,
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              {displayChartData.map((chart, index) => (
                <Stack key={index} direction='row' alignItems='center' spacing={1}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: chart.color
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: isMobile ? 'lightgray' : 'white'
                    }}
                  >
                    {chart.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography color='gray' sx={{ fontSize: 14 }}>
              No ORB activity detected in selected period
            </Typography>
            <Typography color={tradingColors.text.muted} sx={{ fontSize: 12, mt: 1 }}>
              Try a different date range or symbol
            </Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            color: tradingColors.text.muted,
            fontSize: 14,
            textAlign: 'center',
            mb: 2,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
        >
          ORB Statistics
        </Typography>

        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid size={{ xs: 6 }}>
            <MuiCard
              sx={{
                bgcolor: tradingColors.background.secondary,
                border: `1px solid ${tradingColors.border.secondary}`,
                borderRadius: tradingRadius.md
              }}
            >
              <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant='caption' color={tradingColors.text.muted} display='block' fontWeight={600}>
                  Total Days
                </Typography>
                <Typography variant='body2' color={tradingColors.text.primary} sx={{ fontWeight: 600 }}>
                  {Math.ceil((new Date(toDate).getTime() - new Date(fromDate).getTime()) / (1000 * 60 * 60 * 24))} days
                </Typography>
              </CardContent>
            </MuiCard>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <MuiCard
              sx={{
                bgcolor: tradingColors.background.secondary,
                border: `1px solid ${tradingColors.border.secondary}`,
                borderRadius: tradingRadius.md
              }}
            >
              <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant='caption' color={tradingColors.text.muted} display='block' fontWeight={600}>
                  Total Occurrences
                </Typography>
                <Typography variant='body2' color={tradingColors.text.primary} sx={{ fontWeight: 600 }}>
                  {totalOccurrences}
                </Typography>
              </CardContent>
            </MuiCard>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <MuiCard
              sx={{
                bgcolor: tradingColors.background.secondary,
                border: `1px solid ${tradingColors.border.secondary}`,
                borderRadius: tradingRadius.md
              }}
            >
              <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant='caption' color={tradingColors.text.muted} display='block' fontWeight={600}>
                  Breakout Rate
                </Typography>
                <Typography variant='body2' color={tradingColors.success} sx={{ fontWeight: 600 }}>
                  {breakouts.percentage.toFixed(2)}%
                </Typography>
              </CardContent>
            </MuiCard>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <MuiCard
              sx={{
                bgcolor: tradingColors.background.secondary,
                border: `1px solid ${tradingColors.border.secondary}`,
                borderRadius: tradingRadius.md
              }}
            >
              <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant='caption' color={tradingColors.text.muted} display='block' fontWeight={600}>
                  No Break Rate
                </Typography>
                <Typography variant='body2' color={tradingColors.info} sx={{ fontWeight: 600 }}>
                  {noBreaks.percentage.toFixed(2)}%
                </Typography>
              </CardContent>
            </MuiCard>
          </Grid>
        </Grid>

        <Box
          sx={{
            border: `1px solid ${tradingColors.border.secondary}`,
            borderRadius: tradingRadius.md,
            p: 1.5,
            backgroundColor: tradingColors.background.secondary
          }}
        >
          <Typography
            sx={{
              color: tradingColors.text.muted,
              fontSize: 12,
              textAlign: 'center',
              mb: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1
            }}
          >
            Pattern Summary
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{ xs: 6 }}>
              <Typography
                sx={{
                  color: tradingColors.success,
                  fontSize: 11,
                  textAlign: 'center',
                  fontWeight: 600
                }}
              >
                Breakouts: {breakouts.count}
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography
                sx={{
                  color: tradingColors.danger,
                  fontSize: 11,
                  textAlign: 'center',
                  fontWeight: 600
                }}
              >
                Breakdowns: {breakdowns.count}
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography
                sx={{
                  color: tradingColors.warning,
                  fontSize: 11,
                  textAlign: 'center',
                  fontWeight: 600
                }}
              >
                Double Breaks: {doubleBreaks.count}
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography
                sx={{
                  color: tradingColors.info,
                  fontSize: 11,
                  textAlign: 'center',
                  fontWeight: 600
                }}
              >
                No Breaks: {noBreaks.count}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  )
}
