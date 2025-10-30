import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import { algosBlogData } from '@shared/constants/blogs'

const AlgosSection = () => {
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
            the algos
          </Typography>
          <Typography
            variant='h2'
            align='center'
            sx={{
              fontWeight: 400,
              color: '#3532fcff',
              fontSize: { xs: 24, md: 40 }
            }}
          >
            upgrade required
          </Typography>
          <Typography
            variant='h6'
            align='center'
            sx={{
              color: 'white',
              fontWeight: 400,
              maxWidth: 600,
              fontSize: { xs: 14, md: 16 },
              mt: 2
            }}
          >
            TradeMaster's algos are fully built strategies — not indicators — and now fully automated. they
            automatically enter and exit trades for you based on your rules. you set size, risk, sessions, and targets.
            TradeMaster handles execution. three strategies — gap fill, orb, and initial balance — ready out of the box
            and fully customizable. no coding, no overthinking. just disciplined, data-driven execution.
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
          learn more
        </Button>

        <Grid container spacing={6} alignItems='center' sx={{ mt: 8 }}>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            <Stack spacing={4} divider={<Divider sx={{ bgcolor: '#444' }} />}>
              {algosBlogData.map((item, index) => (
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
                      0{index + 1}
                    </Box>
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#ccc',
                      fontSize: 14
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <img src='assets/algos-features-page.webp' alt='Reports' style={{ width: '100%', borderRadius: 12 }} />
          </Grid>
        </Grid>
      </Stack>
      <HorizontalLine />
    </Container>
  )
}

export default AlgosSection
