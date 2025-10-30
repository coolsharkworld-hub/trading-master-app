import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import ReportItem from '@shared/components/landing/ReportItem'

const reportsFeatureBlogData = [
  {
    image: (
      <img src='assets/reports-what-is-a-report.webp' alt='Feature 1' style={{ width: '100%', borderRadius: 8 }} />
    ),
    subtitle: 'what is a report?',
    description:
      "a report is a breakdown of how price has behaved in similar situations in the past. each one focuses on a specific pattern — like a gap fill or a breakout — and shows how often it leads to continuation, reversal, or chop. the data helps you trade what's likely, not what feels right."
  },
  {
    image: (
      <img
        src='assets/reports-customize-every-report.webp'
        alt='Feature 2'
        style={{ width: '100%', borderRadius: 8 }}
      />
    ),
    subtitle: 'customize every report',
    description:
      'choose your session, set your date range, and filter by factors like day of week, size, or candle type. every report adapts to your style, so the stats reflect how you actually trade — not just what works in theory.'
  },
  {
    image: (
      <img
        src='assets/reports-built-for-changing-markets.webp'
        alt='Feature 3'
        style={{ width: '100%', borderRadius: 8 }}
      />
    ),
    subtitle: 'built for changing markets',
    description:
      "every report pulls in new data at the end of each trading day. the data covers the current market, not a backtest from months or years ago. stay in sync with what's working now, not last quarter or last year."
  }
]

const ReportsSection = () => {
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
            reports
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
            a report is a historical analysis of how price behaves in specific market conditions: each report is built
            around a trading concept — like gap fills, opening range breakouts, or initial balance breaks — and shows
            how price tends to behave after it triggers. the goal is to spot repeatable setups with edge, so you're
            trading with data, not emotion.
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
          {reportsFeatureBlogData.map((feature, index) => (
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

export default ReportsSection
