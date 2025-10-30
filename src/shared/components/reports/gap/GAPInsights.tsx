import { TrendingDown, TrendingUp } from '@mui/icons-material'
import { Box, Chip, Grid, Typography } from '@mui/material'

import { Card } from '@shared/components/common'
import { GapAnalysisReport } from '@shared/types/GAPType'
import { tradingColors, tradingRadius, tradingShadows, tradingTransitions } from '@theme/tradingTheme'

interface InsightsProps {
  symbol: string
  fromDate: string
  toDate: string
  data: GapAnalysisReport | null
}

interface InsightRow {
  label: string
  data: {
    count: number
    percent: number
  }
}

export const Insights = ({ symbol, data }: InsightsProps) => {
  const { totalGaps, gapUpCount, gapDownCount, gapUpFilled, gapUpNotFilled, gapDownFilled, gapDownNotFilled } =
    data?.summary || {
      totalGaps: 0,
      gapUpCount: 0,
      gapDownCount: 0,
      gapUpFilled: 0,
      gapUpNotFilled: 0,
      gapDownFilled: 0,
      gapDownNotFilled: 0
    }

  const sections: { type: string; rows: InsightRow[] }[] = [
    {
      type: 'up gap',
      rows: [
        {
          label: 'gap up',
          data: {
            count: gapUpCount,
            percent: gapUpCount ? (gapUpCount / totalGaps) * 100 : 0
          }
        },
        {
          label: 'filled',
          data: {
            count: gapUpFilled,
            percent: gapUpFilled ? (gapUpFilled / gapUpCount) * 100 : 0
          }
        },
        {
          label: 'not filled',
          data: {
            count: gapUpNotFilled,
            percent: gapUpNotFilled ? (gapUpNotFilled / gapUpCount) * 100 : 0
          }
        }
      ]
    },
    {
      type: 'down gap',
      rows: [
        {
          label: 'gap down',
          data: {
            count: gapDownCount,
            percent: gapDownCount ? (gapDownCount / totalGaps) * 100 : 0
          }
        },
        {
          label: 'filled',
          data: {
            count: gapDownFilled,
            percent: gapDownFilled ? (gapDownFilled / gapDownCount) * 100 : 0
          }
        },
        {
          label: 'not filled',
          data: {
            count: gapDownNotFilled,
            percent: gapDownNotFilled ? (gapDownNotFilled / gapDownCount) * 100 : 0
          }
        }
      ]
    }
  ]

  return (
    <Card variant='premium'>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Typography variant='h6' sx={{ fontWeight: 700, color: tradingColors.text.primary }}>
          Gap Analysis Insights
        </Typography>
        <Chip
          label={symbol}
          size='small'
          sx={{
            backgroundColor: tradingColors.overlay.info,
            color: tradingColors.accent.primary,
            border: `1px solid ${tradingColors.border.accent}`,
            fontWeight: 700,
            boxShadow: tradingShadows.glow
          }}
        />
      </Box>

      {sections.map(section => (
        <Box key={section.type} sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2
            }}
          >
            {section.type === 'up gap' ? (
              <TrendingUp sx={{ color: tradingColors.status.success, fontSize: 22 }} />
            ) : (
              <TrendingDown sx={{ color: tradingColors.status.error, fontSize: 22 }} />
            )}
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
                color: section.type === 'up gap' ? tradingColors.status.success : tradingColors.status.error
              }}
            >
              {section.type}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: tradingColors.background.tertiary,
              border: `1px solid ${tradingColors.border.secondary}`,
              borderRadius: tradingRadius.md,
              boxShadow: tradingShadows.sm,
              p: 2,
              transition: tradingTransitions.fast,
              '&:hover': {
                borderColor: tradingColors.border.primary,
                boxShadow: tradingShadows.md
              }
            }}
          >
            <Grid container sx={{ mb: 1.5 }}>
              <Grid size={{ xs: 4 }}>
                <Typography
                  variant='body2'
                  sx={{
                    color: tradingColors.text.muted,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: 11,
                    letterSpacing: '0.05em'
                  }}
                >
                  Category
                </Typography>
              </Grid>
              <Grid size={{ xs: 4 }} textAlign='center'>
                <Typography
                  variant='body2'
                  sx={{
                    color: tradingColors.text.muted,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: 11,
                    letterSpacing: '0.05em'
                  }}
                >
                  Count
                </Typography>
              </Grid>
              <Grid size={{ xs: 4 }} textAlign='center'>
                <Typography
                  variant='body2'
                  sx={{
                    color: tradingColors.text.muted,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: 11,
                    letterSpacing: '0.05em'
                  }}
                >
                  Rate
                </Typography>
              </Grid>
            </Grid>

            {section.rows.map((row, index) => (
              <Grid
                container
                key={row.label}
                sx={{
                  py: 1.5,
                  borderBottom:
                    index < section.rows.length - 1 ? `1px solid ${tradingColors.border.secondary}` : 'none',
                  transition: tradingTransitions.fast,
                  '&:hover': {
                    backgroundColor: tradingColors.overlay.light
                  }
                }}
              >
                <Grid size={{ xs: 4 }}>
                  <Typography
                    sx={{
                      color: tradingColors.text.primary,
                      textTransform: 'capitalize',
                      fontWeight: row.label.includes('gap') ? 700 : 600
                    }}
                  >
                    {row.label}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} textAlign='center'>
                  <Typography sx={{ color: tradingColors.text.primary, fontWeight: 700, fontFamily: 'monospace' }}>
                    {row.data.count}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} textAlign='center'>
                  <Chip
                    label={`${row.data.percent.toFixed(1)}%`}
                    size='small'
                    sx={{
                      backgroundColor:
                        row.data.percent > 50
                          ? tradingColors.overlay.success
                          : row.data.percent > 25
                            ? tradingColors.overlay.warning
                            : tradingColors.overlay.error,
                      color:
                        row.data.percent > 50
                          ? tradingColors.status.success
                          : row.data.percent > 25
                            ? tradingColors.status.warning
                            : tradingColors.status.error,
                      border: `1px solid ${
                        row.data.percent > 50
                          ? tradingColors.border.success
                          : row.data.percent > 25
                            ? tradingColors.border.warning
                            : tradingColors.border.danger
                      }`,
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      minWidth: 60,
                      fontFamily: 'monospace',
                      boxShadow:
                        row.data.percent > 50
                          ? tradingShadows.glowSuccess
                          : row.data.percent > 25
                            ? tradingShadows.glowWarning
                            : tradingShadows.glowDanger
                    }}
                  />
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      ))}
    </Card>
  )
}
