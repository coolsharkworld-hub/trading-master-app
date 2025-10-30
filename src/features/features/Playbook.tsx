import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import ReportItem from '@shared/components/landing/ReportItem'

const playbookBlogData = [
  {
    image: (
      <img
        src='assets/playbook-save-what-works-for-you.webp'
        alt='Feature 1'
        style={{ width: '100%', borderRadius: 8 }}
      />
    ),
    subtitle: 'save what works for you',
    description:
      "bookmark any report with one click. whether it's gap fills, opening range breakouts, or ICT retracements — the reports you rely on most will always be at the right side of your app. no clutter, no distractions, just what's working for you."
  },
  {
    image: (
      <img src='assets/playbook-built-for-speed.webp' alt='Feature 2' style={{ width: '100%', borderRadius: 8 }} />
    ),
    subtitle: 'built for speed',
    description:
      "trading moves fast — hesitation costs money. with TradeMaster's watchlist, you can switch between your favorite tickers instantly, without resetting your filters or setups. your tools should keep up with your decisions. TradeMaster moves as fast as you do, so you never miss an opportunity."
  },
  {
    image: (
      <img
        src='assets/playbook-adapt-with-confidence.webp'
        alt='Feature 3'
        style={{ width: '100%', borderRadius: 8 }}
      />
    ),
    subtitle: 'adapt with confidence',
    description:
      "your edge isn't static — it evolves with the market. with TradeMaster's bookmarks and watchlist, your playbook grows as your strategy sharpens. track what's working, drop what's not, and stay focused on the patterns that give you the highest odds. this isn't just a tool for today — it's a system that grows with you."
  }
]

const PlaybookSection = () => {
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
            build your playbook
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
            mtrademaster makes it easy to organize the strategies that work for you. bookmark your favorite reports,
            create a custom watchlist, and track the patterns you trade best. no more digging through endless tools —
            your personal playbook is just one click away.
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
          {playbookBlogData.map((feature, index) => (
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

export default PlaybookSection
