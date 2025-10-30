import { CheckCircleOutlineOutlined as CheckIcon, ErrorOutlineOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { tradingColors } from '@theme/tradingTheme'

const sections = [
  {
    title: 'data & analytics',
    items: [
      'stocks, futures, forex, crypto',
      'report library (100+)',
      "what's in play?",
      'live data screener',
      'explainer video library',
      '5+ years of historical data',
      'custom look-back periods',
      'report table breakdowns'
    ]
  },
  {
    title: 'integrations & add-ons',
    items: [
      '4 fully automated algos - break & prop plug-in',
      'private discord - algo users',
      'TradingView indicators (35+)',
      'NinjaTrader indicators (12+)',
      'stay sharp weekly newsletter',
      'economic calendar'
    ]
  },
  {
    title: 'customization & personalization',
    items: [
      'custom bookmarks',
      'custom watchlists',
      'custom built report requests',
      'custom built TradingView indicators',
      'custom market sessions',
      'custom report inputs'
    ]
  },
  {
    title: 'mentorship & support',
    items: [
      '24/7 customer support email',
      'discord community(4k+ members)',
      'help session calls(1/month)',
      'mentorship calls(1/month)',
      'weekly discord streams'
    ]
  }
]

const Breakdown = () => {
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
      </Stack>

      <Stack spacing={8} mt={6} maxWidth={700} width='100%'>
        {sections.map((section, idx) => (
          <Box key={idx}>
            <Typography variant='h5' sx={{ fontWeight: 700, color: tradingColors.text.primary, mb: 1 }}>
              {section.title}
            </Typography>
            <Divider sx={{ bgcolor: tradingColors.border.primary, mt: 3, mb: 2 }} />

            <Stack spacing={1}>
              {section.items.map((item, i) => (
                <Box key={i}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      sx={{
                        color: tradingColors.text.secondary,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item}
                      <ErrorOutlineOutlined sx={{ color: 'white', fontSize: 18, ml: 0.5 }} />
                    </Typography>
                    <CheckIcon sx={{ color: tradingColors.accent.primary }} />
                  </Box>

                  {i < section.items.length - 1 && (
                    <Divider sx={{ bgcolor: tradingColors.border.primary, mt: 2, mb: 2 }} />
                  )}
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default Breakdown
