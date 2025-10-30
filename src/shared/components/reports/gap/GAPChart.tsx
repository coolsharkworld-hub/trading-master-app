import { BarChart, TrendingDown, TrendingUp } from '@mui/icons-material'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { Card } from '@shared/components/common'
import { GapAnalysisReport } from '@shared/types/GAPType'
import { tradingColors, tradingGradients, tradingRadius, tradingShadows, tradingTransitions } from '@theme/tradingTheme'

interface FilledGapChartProps {
  symbol: string
  fromDate: string
  toDate: string
  data: GapAnalysisReport | null
}

export const ChartColumn = ({ filled, label, total }: { filled: number; label: string; total: number }) => {
  return (
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 200,
          height: 300,
          borderRadius: tradingRadius.md,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column-reverse',
          backgroundColor: tradingColors.background.primary,
          position: 'relative',
          mx: 'auto',
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: tradingShadows.inner
        }}
      >
        {filled ? (
          <Box
            sx={{
              height: `${filled}%`,
              width: '100%',
              background: tradingGradients.success,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: tradingTransitions.slow,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: tradingColors.status.success,
                boxShadow: tradingShadows.glowSuccess
              }
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                color: tradingColors.text.primary,
                fontWeight: 700,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {filled.toFixed(0)}%
            </Typography>
          </Box>
        ) : (
          <></>
        )}

        {100 - filled ? (
          <Box
            sx={{
              height: `${100 - filled}%`,
              width: '100%',
              background: tradingColors.background.tertiary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                color: tradingColors.text.secondary,
                fontWeight: 700
              }}
            >
              {(100 - filled).toFixed(0)}%
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Typography
        sx={{
          color: tradingColors.text.secondary,
          fontSize: 14,
          mt: 1.5,
          fontWeight: 700,
          textTransform: 'capitalize'
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          color: tradingColors.text.muted,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'monospace'
        }}
      >
        {total} gaps total
      </Typography>
    </Box>
  )
}

export const FilledGapChart = ({ symbol, fromDate, toDate, data }: FilledGapChartProps) => {
  const { totalGaps, gapUpCount, gapDownCount, gapUpFilled, gapDownFilled } = data?.summary || {
    totalGaps: 0,
    gapUpCount: 0,
    gapDownCount: 0,
    gapUpFilled: 0,
    gapDownFilled: 0
  }

  return (
    <Card variant='elevated'>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: tradingRadius.md,
              background: tradingColors.overlay.info,
              border: `1px solid ${tradingColors.border.accent}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: tradingShadows.glow
            }}
          >
            <BarChart sx={{ color: tradingColors.accent.primary, fontSize: 22 }} />
          </Box>
          <Box>
            <Typography variant='h6' sx={{ fontWeight: 700, color: tradingColors.text.primary }}>
              Gap Fill Analysis Chart
            </Typography>
            <Typography variant='caption' sx={{ color: tradingColors.text.muted, fontWeight: 600 }}>
              {symbol} | Market Hours: 9:30 AM - 4:00 PM ET
            </Typography>
          </Box>
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
            mt: 2
          }}
        >
          <Chip
            label={`${totalGaps} Total Gaps`}
            size='small'
            sx={{
              backgroundColor: tradingColors.overlay.info,
              color: tradingColors.accent.primary,
              border: `1px solid ${tradingColors.border.accent}`,
              fontWeight: 700,
              boxShadow: tradingShadows.glow
            }}
          />
          <Typography
            variant='caption'
            sx={{ color: tradingColors.text.tertiary, fontWeight: 600, fontFamily: 'monospace' }}
          >
            {fromDate} - {toDate}
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: { xs: 2, md: 3 },
            justifyContent: 'center',
            mb: 3,
            pl: { xs: 4, md: 6 }
          }}
        >
          <Stack
            direction='column-reverse'
            justifyContent='space-between'
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 12 },
              height: 300,
              width: { xs: 20, md: 40 }
            }}
          >
            {[0, 25, 50, 75, 100].map(val => (
              <Typography
                key={val}
                sx={{
                  fontSize: { xs: 10, md: 12 },
                  color: tradingColors.text.muted,
                  textAlign: 'right',
                  width: '100%',
                  fontWeight: 700,
                  fontFamily: 'monospace'
                }}
              >
                {val}%
              </Typography>
            ))}
          </Stack>

          {gapUpCount && <ChartColumn filled={(gapUpFilled / gapUpCount) * 100} label='Gap Up' total={gapUpCount} />}
          {gapDownCount && (
            <ChartColumn filled={(gapDownFilled / gapDownCount) * 100} label='Gap Down' total={gapDownCount} />
          )}
        </Box>

        <Stack
          direction='row'
          sx={{
            gap: 3,
            mt: 3,
            justifyContent: 'center',
            p: 2,
            backgroundColor: tradingColors.overlay.light,
            borderRadius: tradingRadius.sm,
            border: `1px solid ${tradingColors.border.secondary}`
          }}
        >
          <Stack direction='row' alignItems='center' spacing={1}>
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: tradingGradients.success,
                boxShadow: tradingShadows.glowSuccess
              }}
            />
            <Typography variant='body2' sx={{ color: tradingColors.text.primary, fontWeight: 600 }}>
              Filled
            </Typography>
          </Stack>

          <Stack direction='row' alignItems='center' spacing={1}>
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                bgcolor: tradingColors.background.tertiary,
                border: `1px solid ${tradingColors.border.primary}`
              }}
            />
            <Typography variant='body2' sx={{ color: tradingColors.text.primary, fontWeight: 600 }}>
              Not Filled
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: 3,
          p: 2.5,
          backgroundColor: tradingColors.background.tertiary,
          border: `1px solid ${tradingColors.border.secondary}`,
          borderRadius: tradingRadius.md,
          boxShadow: tradingShadows.inner
        }}
      >
        <Stack direction='row' spacing={2} justifyContent='center' flexWrap='wrap'>
          <Chip
            icon={<TrendingUp sx={{ fontSize: 16 }} />}
            label={`${gapUpCount} Up Gaps`}
            size='small'
            sx={{
              backgroundColor: tradingColors.overlay.success,
              color: tradingColors.status.success,
              border: `1px solid ${tradingColors.border.success}`,
              fontWeight: 700,
              boxShadow: tradingShadows.glowSuccess
            }}
          />
          <Chip
            icon={<TrendingDown sx={{ fontSize: 16 }} />}
            label={`${gapDownCount} Down Gaps`}
            size='small'
            sx={{
              backgroundColor: tradingColors.overlay.error,
              color: tradingColors.status.error,
              border: `1px solid ${tradingColors.border.danger}`,
              fontWeight: 700,
              boxShadow: tradingShadows.glowDanger
            }}
          />
        </Stack>
      </Box>
    </Card>
  )
}
