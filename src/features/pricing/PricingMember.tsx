import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { CheckCircleOutlineOutlined as CheckIcon, LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import { Box, Button, Container, Divider, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import { tradingColors } from '@theme/tradingTheme'

const PricingMember = () => {
  const [tab, setTab] = useState<'monthly' | 'yearly'>('monthly')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTab(newValue as 'monthly' | 'yearly')
  }

  const price = tab === 'monthly' ? 39 : 49

  const proFeatures = [
    'works on futures, stocks, forex, and crypto',
    '100+ data-driven reports & playbooks',
    "live setups in real time 'what's in play?",
    'live screener with bias indicators',
    'video explainers for every report',
    '5+ years historical data',
    '35 TradingView indicators',
    '12 NinjaTrader indicators',
    'bookmarks, watchlists, custom sessions',
    'custom report and indicator requests',
    'built-in economic calendar',
    '24/7 support + monthly mentorship calls',
    'discord community (4k+ traders)'
  ]

  return (
    <Container
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'black'
      }}
    >
      <Stack spacing={1} alignItems='center' maxWidth={800} width='100%'>
        <Typography
          variant='body2'
          align='center'
          sx={{
            fontWeight: 400,
            textTransform: 'uppercase',
            color: tradingColors.primary,
            fontSize: { xs: 14, md: 16 }
          }}
        >
          less than the profits of one trade
        </Typography>
        <Typography
          variant='h2'
          align='center'
          sx={{
            fontWeight: 700,
            color: tradingColors.text.primary,
            fontSize: { xs: 32, md: 56 }
          }}
        >
          where profitable trading begins
        </Typography>
        <Typography
          variant='h6'
          align='center'
          sx={{
            color: 'GrayText',
            fontWeight: 400,
            fontSize: { xs: 16, md: 20 }
          }}
        >
          only if you're serious about trading
        </Typography>
        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          sx={{
            minHeight: '32px',
            borderRadius: '8px',
            p: 0.5,
            zIndex: 5,
            border: '1px solid gray',
            backgroundColor: tradingColors.background.secondary,
            color: tradingColors.text.primary,

            '& .MuiTab-root': {
              textTransform: 'capitalize',
              fontSize: 16,
              fontWeight: 500,
              color: tradingColors.text.primary,
              minHeight: '40px',
              minWidth: '120px'
            },
            '& .Mui-selected': {
              backgroundColor: tradingColors.primary,
              borderRadius: '8px',
              color: tradingColors.text.primary
            },
            '& .MuiTabs-indicator': {
              display: 'none'
            }
          }}
        >
          <Tab label='Monthly' value='monthly' />
          <Tab label='Yearly' value='yearly' />
        </Tabs>
        <Box
          sx={{
            bgcolor: tradingColors.primary,
            borderRadius: 2,
            px: 3,
            py: 1,
            maxWidth: 200,
            mx: 'auto',
            zIndex: 2,
            position: 'relative',
            top: -12
          }}
        >
          <Typography
            variant='body1'
            sx={{
              color: tradingColors.text.primary,
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Save 20% yearly
          </Typography>
        </Box>
      </Stack>

      <Grid
        container
        spacing={6}
        sx={{
          mt: 6,
          maxWidth: 1200,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 3,
              width: '100%',
              mx: 'auto',
              p: 4
            }}
          >
            <Stack spacing={1} alignItems='center'>
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 80, md: 140, lg: 250 },
                  background: `linear-gradient(180deg, ${tradingColors.text.primary}, ${tradingColors.background.primary})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center'
                }}
              >
                ${price}
              </Typography>
            </Stack>
            <Typography
              variant='h6'
              align='center'
              sx={{
                color: 'gray',
                fontWeight: 400,
                fontSize: { xs: 16, md: 18 },
                mt: 1
              }}
            >
              per {tab}
            </Typography>
            <Button
              component={RouterLink}
              to='/auth/login'
              variant='contained'
              size='large'
              sx={{
                bgcolor: tradingColors.primary,
                color: tradingColors.text.primary,
                fontWeight: 500,
                borderRadius: 1,
                px: 6,
                mt: 3,
                textTransform: 'lowercase',
                boxShadow: 'none',
                '&:hover': { bgcolor: tradingColors.primaryDark }
              }}
            >
              get started
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              borderRadius: 4,
              p: 4,
              color: tradingColors.text.primary,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              border: `1px solid ${tradingColors.border.accent}`,
              height: '100%',
              background: tradingColors.background.tertiary
            }}
          >
            <Typography variant='h5' sx={{ fontWeight: 700, mb: 2, fontSize: 20, textAlign: 'left' }} align='center'>
              essential features
            </Typography>
            <Divider sx={{ bgcolor: tradingColors.border.accent, mb: 3 }} />

            <Stack spacing={1.5} sx={{ flexGrow: 1, mb: 1 }}>
              {proFeatures.map((feature, idx) => (
                <Stack key={idx} direction='row' spacing={1.5} alignItems='center'>
                  <CheckIcon sx={{ color: tradingColors.accent.primary }} />
                  <Typography variant='body2' sx={{ fontSize: 16, fontWeight: 500 }}>
                    {feature}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <LockOutlinedIcon sx={{ color: 'grayText' }} />
              <Typography variant='body1' sx={{ color: 'GrayText', fontSize: 16, fontWeight: 500 }}>
                algos not included |{' '}
                <span
                  onClick={() => window.open('https://www.edgeful.com/features/algos', '_blank')}
                  style={{
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  learn more
                </span>
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <HorizontalLine />
    </Container>
  )
}

export default PricingMember
