import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'

interface Props {
  subtitle: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  imageUrlDesktop?: string
  imageUrlMobile?: string
}

const Newsletter = ({
  subtitle,
  title,
  description,
  buttonText = 'give me access to stay sharp',
  buttonLink = '/auth/login',
  imageUrlDesktop,
  imageUrlMobile
}: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const imageUrl = isMobile ? imageUrlMobile : imageUrlDesktop

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
      <Box
        sx={{
          mt: 2,
          mb: 10,
          width: '100%',
          height: '1px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #000000 0%, #555555 50%, #000000 100%)',
          opacity: 0.8
        }}
      />

      <Stack spacing={1} alignItems='center' maxWidth={800} width='100%'>
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
          {subtitle}
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
          {title}
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
          {description}
        </Typography>
        <Stack sx={{ width: '50%', gap: 1 }}>
          <TextField
            sx={{
              width: '100%',
              backgroundColor: '#151518',
              borderRadius: '5px',
              height: '48px',
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
                height: '48px',
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
            to={buttonLink}
            variant='contained'
            size='large'
            sx={{
              width: '100%',
              bgcolor: '#2564eeff',
              color: '#fff',
              fontWeight: 500,
              borderRadius: '5px',
              px: 6,
              py: 1,
              textTransform: 'lowercase',
              boxShadow: 'none',
              height: '48px',
              '&:hover': { bgcolor: '#1565c0' }
            }}
          >
            {buttonText}
          </Button>
        </Stack>
      </Stack>

      {imageUrl && (
        <Box
          sx={{
            mt: 4,
            width: '70%',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 3
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 16
            }}
          />
        </Box>
      )}
    </Container>
  )
}

export default Newsletter
