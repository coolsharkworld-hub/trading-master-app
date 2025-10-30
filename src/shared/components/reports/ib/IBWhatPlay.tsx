import { AccessTime, PlayArrow, ShowChart } from '@mui/icons-material'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { Card } from '@shared/components/common'
import { tradingColors } from '@theme/tradingTheme'
import { useEffect, useState } from 'react'

interface IBWhatPlayProps {
  symbol: string
}

export const IBWhatPlay = ({ symbol }: IBWhatPlayProps) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    })
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZoneName: 'short'
        })
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card
      variant='elevated'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mb: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <PlayArrow sx={{ color: tradingColors.accent.primary }} />
        <Typography variant='h6' sx={{ fontWeight: 700, color: tradingColors.text.primary }}>
          Initial Balance Analysis
        </Typography>
        <Chip
          label={symbol}
          size='small'
          sx={{
            backgroundColor: tradingColors.accent.primary,
            color: tradingColors.text.primary,
            fontWeight: 700,
            border: `1px solid ${tradingColors.border.info}`
          }}
        />
      </Box>

      <Stack
        spacing={1}
        sx={{
          my: 2,
          p: 2,
          backgroundColor: tradingColors.background.tertiary,
          borderRadius: 1,
          border: `1px solid ${tradingColors.border.secondary}`
        }}
      >
        <Stack sx={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Typography variant='body2' sx={{ color: tradingColors.text.secondary, fontWeight: 600 }}>
            Historical IB Pattern Analysis
          </Typography>
          <Chip
            icon={<ShowChart sx={{ fontSize: 14, color: `${tradingColors.text.primary} !important` }} />}
            label='Historical Data'
            size='small'
            sx={{
              backgroundColor: tradingColors.background.panel,
              color: tradingColors.text.secondary,
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          />
        </Stack>

        <Stack sx={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Typography variant='body2' sx={{ color: tradingColors.text.muted, fontWeight: 500 }}>
            Powered by{' '}
            <Typography component='span' sx={{ color: tradingColors.accent.primary, fontWeight: 700 }}>
              TradeMaster
            </Typography>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTime sx={{ fontSize: 14, color: tradingColors.text.muted }} />
            <Typography
              variant='caption'
              sx={{ color: tradingColors.text.muted, fontFamily: 'monospace', fontWeight: 600 }}
            >
              {currentTime}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 1,
          backgroundColor: tradingColors.background.primary,
          border: `1px solid ${tradingColors.border.primary}`,
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ textAlign: 'center', width: '100%', py: 3 }}>
          <ShowChart sx={{ fontSize: 48, color: tradingColors.accent.primary, mb: 2, opacity: 0.8 }} />
          <Typography variant='h6' sx={{ mb: 2, fontWeight: 700, color: tradingColors.text.primary }}>
            Initial Balance Pattern Analysis
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: tradingColors.text.secondary, fontWeight: 500, maxWidth: '400px', mx: 'auto', mb: 2 }}
          >
            The Initial Balance (IB) strategy tracks price movement during the first hour of trading to identify
            breakout opportunities.
          </Typography>
          <Stack direction='row' spacing={1} justifyContent='center' flexWrap='wrap' sx={{ gap: 1 }}>
            <Chip
              label='Breakout Above'
              size='small'
              sx={{ bgcolor: tradingColors.market.bullish, color: tradingColors.text.primary }}
            />
            <Chip
              label='Breakdown Below'
              size='small'
              sx={{ bgcolor: tradingColors.market.bearish, color: tradingColors.text.primary }}
            />
            <Chip
              label='Inside Range'
              size='small'
              sx={{ bgcolor: tradingColors.background.panel, color: tradingColors.text.secondary }}
            />
          </Stack>
        </Box>
      </Box>
    </Card>
  )
}
