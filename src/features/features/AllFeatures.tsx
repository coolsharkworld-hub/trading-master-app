import { Box, Container, Stack, Typography } from '@mui/material'

const AllFeatures = () => {
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
      <Stack alignItems='center' maxWidth={800} width='100%'>
        <Box>
          <Typography
            variant='body2'
            align='center'
            sx={{
              fontWeight: 400,
              textTransform: 'uppercase',
              color: '#1976d2',
              fontSize: { xs: 14, md: 16 }
            }}
          >
            EVERYTHING YOU NEED TO TRADE WITH DATA
          </Typography>
          <Typography
            variant='h2'
            align='center'
            sx={{
              fontWeight: 700,
              color: '#fff',
              fontSize: { xs: 32, md: 56 }
            }}
          >
            all the TradeMaster features
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
            from live data reports to data-backed algos, TradeMaster gives you the tools to find high-probability
            setups, stay in sync with the market, and execute with discipline — all in one place
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 10,
            mb: 2,
            width: '100%',
            height: '1px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #000000 0%, #555555 50%, #000000 100%)',
            opacity: 0.8
          }}
        />
      </Stack>
    </Container>
  )
}

export default AllFeatures
