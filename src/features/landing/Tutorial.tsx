import { Box, Button, Container, Divider, Grid, Stack } from '@mui/material'

const marketLogoUrls = [
  '/assets/market-watch.webp',
  '/assets/market-insider.webp',
  '/assets/morning-star.webp',
  '/assets/yahoo-finance.webp',
  '/assets/benzinga.webp'
]

const TutorialSection = () => {
  return (
    <Container
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack spacing={4} alignItems='center' maxWidth={900} width='100%'>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 900,
            overflow: 'hidden',
            boxShadow: 3
          }}
        >
          <img
            src='/assets/combined.png'
            alt='TradeMaster app tutorial'
            style={{
              width: '100%',
              display: 'block',
              borderRadius: 16,
              background: '#black'
            }}
          />
          <Button
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 80,
              p: 0,
              borderRadius: '17px'
            }}
            href='https://google.com'
            target='_blank'
            rel='noopener'
          >
            <img
              src='/assets/play.png'
              alt='TradeMaster app tutorial'
              style={{
                width: '100%',
                display: 'block',
                borderRadius: 16,
                background: '#black'
              }}
            />
          </Button>
        </Box>

        <Grid
          container
          spacing={2}
          justifyContent={{
            xs: 'flex-start',
            sm: 'flex-start',
            md: 'flex-start',
            lg: 'center'
          }}
          sx={{
            width: '100%',
            maxWidth: { lg: 600 }
          }}
        >
          {marketLogoUrls.map((url, index) => (
            <Grid
              key={index}
              size={{
                xs: 4,
                sm: 3,
                md: 3,
                lg: 2.4
              }}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    lg: 120
                  },
                  maxWidth: 120
                }}
              >
                <img
                  src={url}
                  alt={`Market logo ${index + 1}`}
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    background: '#black'
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Divider sx={{ borderColor: '#333', mb: 3 }} />
    </Container>
  )
}

export default TutorialSection
