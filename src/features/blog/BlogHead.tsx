import { Link as RouterLink } from 'react-router-dom'

import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { tradingColors } from '@theme/tradingTheme'

const BlogHead = () => {
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
      <Stack spacing={1} alignItems='center' maxWidth={800} width='100%'>
        <Typography
          variant='body2'
          align='center'
          sx={{
            fontWeight: 700,
            color: 'white',
            fontSize: { xs: 20, md: 48 }
          }}
        >
          stay sharp blog
        </Typography>
        <Stack sx={{ width: '60%' }}>
          <Stack direction='row' spacing={1} sx={{ width: '100%' }}>
            <TextField
              sx={{
                flex: 1,
                backgroundColor: '#151518',
                borderRadius: '5px',
                height: '40px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray'
                  },
                  '&:hover fieldset': {
                    borderColor: '#aaa'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#2564eeff'
                  }
                },
                '& .MuiInputBase-input': {
                  height: '40px',
                  padding: '0 12px',
                  fontSize: '14px',
                  color: 'gray'
                }
              }}
              id='outlined-email'
              placeholder='Your email address'
              variant='outlined'
              type='email'
            />

            <Button
              component={RouterLink}
              to={'/auth/login'}
              variant='contained'
              size='large'
              sx={{
                flex: 1,
                bgcolor: '#2564eeff',
                color: '#fff',
                fontWeight: 500,
                borderRadius: '5px',
                px: 6,
                py: 1,
                textTransform: 'lowercase',
                boxShadow: 'none',
                height: '40px',
                '&:hover': { bgcolor: tradingColors.primaryDark }
              }}
            >
              get free strategies
            </Button>
          </Stack>
        </Stack>

        <Typography
          variant='h6'
          align='center'
          sx={{
            color: 'white',
            fontWeight: 400,
            pt: 5,
            fontSize: { xs: 14, md: 16 }
          }}
        >
          weekly data-backed trading strategies and step-by-step breakdowns from TradeMaster. learn how to build
          consistent systems with actionable reports, setups, and stats.
        </Typography>
      </Stack>
    </Container>
  )
}

export default BlogHead
