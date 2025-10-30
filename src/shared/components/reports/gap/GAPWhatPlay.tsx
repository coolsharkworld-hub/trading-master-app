import { useEffect, useState } from 'react'

import { Box, Chip, Stack, Tooltip, Typography } from '@mui/material'

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

import { useGapToday } from '@shared/hooks'
import { tradingColors, tradingGradients, tradingRadius, tradingShadows, tradingTransitions } from '@theme/tradingTheme'

interface WhatPlayProps {
  symbol: string
}

export const WhatPlay = ({ symbol }: WhatPlayProps) => {
  const { todayData, loading, error } = useGapToday({ symbol })
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

  if (loading) {
    return (
      <Box
        sx={{
          p: 4,
          borderRadius: tradingRadius.lg,
          border: `1px solid ${tradingColors.border.primary}`,
          background: tradingGradients.cardElevated,
          boxShadow: tradingShadows.elevated,
          textAlign: 'center'
        }}
      >
        <Typography color={tradingColors.text.secondary} sx={{ fontSize: 14, fontWeight: 500 }}>
          Loading today's gaps...
        </Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box
        sx={{
          p: 4,
          borderRadius: tradingRadius.lg,
          border: `1px solid ${tradingColors.border.danger}`,
          background: tradingGradients.cardElevated,
          boxShadow: tradingShadows.elevated,
          textAlign: 'center'
        }}
      >
        <Typography color={tradingColors.status.error} sx={{ fontSize: 14, fontWeight: 600 }}>
          Error: {error}
        </Typography>
      </Box>
    )
  }

  return (
    <Box>
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: tradingRadius.lg,
          border: `1px solid ${tradingColors.border.primary}`,
          background: tradingGradients.cardElevated,
          boxShadow: tradingShadows.elevated,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          transition: tradingTransitions.normal,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <TrendingUpIcon sx={{ color: tradingColors.accent.primary, fontSize: { xs: 20, md: 22 } }} />
          <Typography
            sx={{
              color: tradingColors.text.primary,
              fontSize: { xs: 16, md: 19 },
              fontWeight: 700,
              letterSpacing: '0.01em'
            }}
          >
            What's in Play?
          </Typography>
        </Box>

        <Stack
          sx={{
            gap: 1.5,
            p: 2.5,
            borderRadius: tradingRadius.md,
            backgroundColor: tradingColors.overlay.light,
            border: `1px solid ${tradingColors.border.secondary}`
          }}
        >
          <Stack
            sx={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                sx={{
                  color: tradingColors.text.primary,
                  fontSize: { xs: 13, md: 15 },
                  fontWeight: 600
                }}
              >
                Gap Fill Analysis
              </Typography>
              <Chip
                label={symbol}
                size='small'
                sx={{
                  backgroundColor: tradingColors.overlay.info,
                  color: tradingColors.accent.primary,
                  fontWeight: 700,
                  fontSize: 12,
                  border: `1px solid ${tradingColors.border.accent}`,
                  height: 24
                }}
              />
            </Box>
            <Chip
              icon={<BedtimeOutlinedIcon sx={{ fontSize: 14, color: tradingColors.status.info + ' !important' }} />}
              label='Post Market'
              size='small'
              sx={{
                backgroundColor: tradingColors.overlay.info,
                color: tradingColors.status.info,
                fontSize: 11,
                fontWeight: 600,
                border: `1px solid ${tradingColors.border.info}`,
                height: 24
              }}
            />
          </Stack>

          <Stack
            sx={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}
          >
            <Typography
              sx={{
                color: tradingColors.text.tertiary,
                fontSize: { xs: 11, md: 13 },
                fontWeight: 500
              }}
            >
              Powered by <span style={{ color: tradingColors.accent.primary, fontWeight: 700 }}>TradeMaster</span>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeOutlinedIcon sx={{ fontSize: 14, color: tradingColors.text.muted }} />
              <Typography
                sx={{
                  color: tradingColors.text.muted,
                  fontSize: { xs: 11, md: 12 },
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}
              >
                {currentTime}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Box
          sx={{
            p: { xs: 2.5, md: 3.5 },
            borderRadius: tradingRadius.md,
            backgroundColor: tradingColors.background.primary,
            border: `1px solid ${tradingColors.border.secondary}`,
            boxShadow: tradingShadows.inner,
            minHeight: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: tradingGradients.borderAccent
            }
          }}
        >
          {todayData ? (
            <Stack spacing={3} sx={{ width: '100%' }}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: tradingRadius.md,
                  backgroundColor: tradingColors.overlay.light,
                  border: `1px solid ${tradingColors.border.secondary}`,
                  transition: tradingTransitions.fast,
                  '&:hover': {
                    backgroundColor: tradingColors.overlay.medium,
                    border: `1px solid ${tradingColors.border.primary}`,
                    transform: 'translateY(-1px)'
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
                    gap: { xs: 2, md: 3 }
                  }}
                >
                  {[
                    {
                      label: 'Price',
                      value: `$${todayData.price}`,
                      tooltip: 'current fair market value price'
                    },
                    { label: 'Gap Type', value: todayData.gapType, tooltip: 'Type of gap detected' },
                    {
                      label: 'Gap Size',
                      value: `${todayData.gapSize?.toFixed(2) || '0.00'}%`,
                      tooltip: 'Percentage size of the gap',
                      isPercentage: true
                    },
                    {
                      label: 'Target',
                      value: `$${todayData.target}`,
                      tooltip: `target is the previous day's close if fill percentage is 100%`
                    },
                    {
                      label: 'Gap Spike',
                      value: `${todayData.gapSpike?.toFixed(2) || '0.00'}%`,
                      tooltip:
                        'how far price moves away from the gap fill. this is calculated from the open to the high/low of day before filling the gap. once the gap fills, this becomes static.',
                      isPercentage: true
                    },
                    {
                      label: 'Gap Fill %',
                      value: `${todayData.gapFillPercentage?.toFixed(2) || '0.00'}%`,
                      tooltip:
                        'percentage of the gap that has been filled calculated as the maximum distance price has moved toward the gap fill target this percentage can only increase, not decrease',
                      isPercentage: true,
                      isSuccess: true
                    },
                    {
                      label: 'Fill Time',
                      value: todayData.fillTime
                        ? new Date(todayData.fillTime).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                        : '—',
                      tooltip: 'the 1m candle time when the gap was filled this is static once the gap fills',
                      isSuccess: true
                    },
                    {
                      label: 'Distance to target',
                      value: `$${todayData.distanceToTarget}`,
                      tooltip: `how far away is price from target? current price - target`
                    },
                    {
                      label: 'Gap Status',
                      value: todayData.gapStatus,
                      tooltip: `has the gap filled yet? the gap either fills or doesn't, once the gap fills, this is no longer in play`,
                      isSuccess: true
                    },
                    {
                      label: 'Gap Fill Zone',
                      value: todayData.gapFillZone,
                      tooltip: `above PSC means price closed above the previous closing price & below PSC means price closed below the previous closing price.`
                    },
                    {
                      label: 'Bias',
                      value: todayData.bias,
                      tooltip: `bias is based on where the likelihood of price filling the gap is. if the past 6 months have seen more filled gaps than unfilled gaps, the bias is bearish. if the past 6 months have seen more unfilled gaps than filled gaps, the bias is bullish.`
                    }
                  ].map((field, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        textAlign: 'center',
                        p: 1.5,
                        borderRadius: tradingRadius.sm,
                        backgroundColor: tradingColors.background.primary,
                        border: `1px solid ${tradingColors.border.subtle}`,
                        transition: tradingTransitions.fast,
                        '&:hover': {
                          backgroundColor: tradingColors.background.tertiary,
                          borderColor: tradingColors.border.secondary
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 0.5 }}>
                        <Typography
                          sx={{
                            color: tradingColors.text.muted,
                            fontSize: { xs: 11, md: 12 },
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em'
                          }}
                        >
                          {field.label}
                        </Typography>
                        <Tooltip title={field.tooltip} arrow placement='top'>
                          <HelpOutlineOutlinedIcon
                            sx={{
                              fontSize: 12,
                              color: tradingColors.text.muted,
                              cursor: 'help',
                              opacity: 0.5,
                              '&:hover': { opacity: 1 }
                            }}
                          />
                        </Tooltip>
                      </Box>
                      <Typography
                        sx={{
                          color: field.isSuccess ? tradingColors.status.success : tradingColors.text.primary,
                          fontWeight: 700,
                          fontSize: { xs: 14, md: 16 },
                          fontFamily: field.isPercentage ? 'monospace' : 'inherit',
                          letterSpacing: field.isPercentage ? '0.02em' : 'normal'
                        }}
                      >
                        {field.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Stack>
          ) : (
            <Box sx={{ textAlign: 'center', width: '100%', py: 3 }}>
              <BedtimeOutlinedIcon
                sx={{
                  fontSize: { xs: 40, md: 48 },
                  color: tradingColors.text.muted,
                  mb: 2,
                  opacity: 0.4
                }}
              />
              <Typography
                sx={{
                  color: tradingColors.text.secondary,
                  mb: 1.5,
                  fontSize: { xs: 18, md: 22 },
                  fontWeight: 700
                }}
              >
                Market is Closed
              </Typography>
              <Typography
                sx={{
                  color: tradingColors.text.muted,
                  fontSize: { xs: 12, md: 14 },
                  maxWidth: 300,
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontWeight: 500
                }}
              >
                Check back during market hours (9:30 AM - 4:00 PM ET)
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
