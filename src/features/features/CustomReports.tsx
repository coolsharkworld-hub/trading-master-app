import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import { CustomReportsBlogData } from '@shared/constants/blogs'

const CustomReportsSection = () => {
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
            custom built reports
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
            TradeMaster isn't just a set of tools — it's a platform built by traders, for traders. most of the reports
            you see today started as user requests. whether you need a new report to match your strategy or want to
            tweak an existing one, we'll build it for you. you trade your edge — we'll back it with data.
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
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            <Stack spacing={4} divider={<Divider sx={{ bgcolor: '#444' }} />}>
              {CustomReportsBlogData.map((item, index) => (
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
            <img src='assets/custom-built-reports.webp' alt='Reports' style={{ width: '100%', borderRadius: 12 }} />
          </Grid>
        </Grid>
      </Stack>
      <HorizontalLine />
    </Container>
  )
}

export default CustomReportsSection
