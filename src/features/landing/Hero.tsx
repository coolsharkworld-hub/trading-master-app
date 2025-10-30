import { Link as RouterLink } from 'react-router-dom'

import { Button, Container, Stack, Typography } from '@mui/material'

const HeroSection = () => {
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
      <Stack spacing={3} alignItems='center' maxWidth={800} width='100%'>
        <Typography
          variant='h2'
          align='center'
          sx={{
            fontWeight: 700,
            color: '#1976d2',
            fontSize: { xs: 36, md: 56 }
          }}
        >
          trade with data
        </Typography>
        <Typography
          variant='h2'
          align='center'
          sx={{
            fontWeight: 700,
            color: '#fff',
            fontSize: { xs: 32, md: 48 }
          }}
        >
          not your emotions
        </Typography>
        <Typography
          variant='h6'
          align='center'
          sx={{
            color: '#fff',
            fontWeight: 400,
            fontSize: { xs: 16, md: 20 },
            mb: 2
          }}
        >
          technical analysis, made simple. the only tool you need to become consistent. we instantly give you an edge so
          you can focus on making money.
        </Typography>
        <Button
          component={RouterLink}
          to='/auth/login'
          variant='contained'
          size='large'
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 2,
            px: 5,
            textTransform: 'lowercase',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          get started
        </Button>
      </Stack>
    </Container>
  )
}

export default HeroSection
