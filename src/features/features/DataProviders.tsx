import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import { providerBlogData } from '@shared/constants/blogs'

const DataProviderSection = () => {
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
            data providers
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
            TradeMaster pulls data directly from the source. our reports are built using exchange-level feeds from
            Nasdaq, CME, Coinbase, and Oanda, so your data reflects exactly what's happening in the market, with nothing
            lost in translation.
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

        <Box sx={{ mt: 8, width: '80%' }}>
          <img
            src='assets/data-providers.webp'
            alt='Data Providers'
            style={{
              width: '100%',
              borderRadius: 12,
              display: 'block',
              margin: '0 auto'
            }}
          />
        </Box>

        <Grid container spacing={6} sx={{ mt: 8 }}>
          {providerBlogData.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box>
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
            </Grid>
          ))}
        </Grid>
      </Stack>
      <HorizontalLine />
    </Container>
  )
}

export default DataProviderSection
