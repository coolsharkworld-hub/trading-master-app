import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import { inPlayBlogData } from '@shared/constants/blogs'

const InPlaySection = () => {
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
            what's in play
          </Typography>
          <Typography
            variant='h6'
            align='center'
            sx={{
              color: 'GrayText',
              fontWeight: 400,
              maxWidth: 700,
              fontSize: { xs: 14, md: 16 },
              mt: 2
            }}
          >
            what's in play shows you which setups are active right now — pulled directly from the reports. you'll see
            which tickers are setting up, where the key levels are, how far price is from the target, and whether the
            bias is long or short. no need to dig — it's all on one page for you, updating in real time.
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

        <Grid container spacing={6} alignItems='center' sx={{ mt: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src='assets/whats-in-play-features-page.webp'
              alt='Reports'
              style={{ width: '100%', borderRadius: 12 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4} divider={<Divider sx={{ bgcolor: '#444' }} />}>
              {inPlayBlogData.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      fontSize: 18,
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      component='span'
                      sx={{
                        color: '#1976d2',
                        fontWeight: 700,
                        mr: 1.5
                      }}
                    >
                      {index + 1}.
                    </Box>
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: 'GrayText',
                      fontSize: 14
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <HorizontalLine />
    </Container>
  )
}

export default InPlaySection
