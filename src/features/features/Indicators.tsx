import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import ReportItem from '@shared/components/landing/ReportItem'

const featureData = [
  {
    image: (
      <img src='assets/tradingview-indicators-2.webp' alt='Feature 1' style={{ width: '100%', borderRadius: 8 }} />
    ),
    subtitle: 'plot key levels instantly',
    description:
      "no more guessing where the gap fill is or drawing ib by hand. TradeMaster's indicators automatically plot every key level for you — market sessions, gaps, IB/ORB ranges, retracement levels, pivot points, and more. everything updates in real time, so you can stay focused on execution instead of charting."
  },
  {
    image: (
      <img src='assets/tradingview-indicators-1.webp' alt='Feature 2' style={{ width: '100%', borderRadius: 8 }} />
    ),
    subtitle: 'customize every report',
    description:
      "your strategy isn't generic — your indicators shouldn't be either. TradeMaster lets you control everything: session times, extension levels, midpoints, gap logic, colors, and more. want to plot london reversals only? or highlight sunday gaps before NY opens? no problem. this isn't decoration — it's your edge, visualized with surgical precision."
  },
  {
    image: (
      <img src='assets/tradingview-no-more-mistakes.webp' alt='Feature 3' style={{ width: '100%', borderRadius: 8 }} />
    ),
    subtitle: 'no more mistakes',
    description:
      "second-guessing your levels. TradeMaster's indicators automatically plot the correct levels every single time — no more referencing the wrong candle or drawing lines in the wrong spot. your charts are accurate down to the tick."
  }
]

const IndicatorsSection = () => {
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
      <Stack alignItems='center' maxWidth={1000} width='100%'>
        <Box>
          <Typography
            variant='h2'
            align='center'
            sx={{
              fontWeight: 700,
              color: '#fff',
              fontSize: { xs: 24, md: 40 }
            }}
          >
            tradingview indicators
          </Typography>
          <Typography
            variant='h6'
            align='center'
            sx={{
              color: 'GrayText',
              fontWeight: 400,
              maxWidth: 600,
              fontSize: { xs: 14, md: 16 },
              mt: 2
            }}
          >
            most traders draw levels by hand. we don't. every key level you'll ever need — is automatically plotted for
            you on TradingView. these indicators are built to match the reports in TradeMaster, so what you see in the
            data is exactly what you see on your charts. whether you trade new york, london, or asia, your levels will
            sync to your session, your timeframes, and your style. 35+ indicators — no extra work, no guesswork, no
            missing levels.
          </Typography>
        </Box>
        <Button
          component={RouterLink}
          to='/auth/login'
          variant='contained'
          size='large'
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 1,
            px: 5,
            mt: 2,
            textTransform: 'lowercase',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          get started
        </Button>
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {featureData.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <ReportItem
                image={feature.image}
                subtitle={feature.subtitle}
                description={feature.description}
                index={index}
              />
            </Grid>
          ))}
        </Grid>

        <HorizontalLine />
      </Stack>
    </Container>
  )
}

export default IndicatorsSection
