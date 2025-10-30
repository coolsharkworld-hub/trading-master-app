import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

interface Props {
  subtitle: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  imageUrlDesktop?: string
  imageUrlMobile?: string
}

const Community = ({
  subtitle,
  title,
  description,
  buttonText = 'get started',
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
        <Button
          component={RouterLink}
          to={buttonLink}
          variant='contained'
          size='large'
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            fontWeight: 500,
            borderRadius: 1,
            px: 6,
            py: 0.5,
            textTransform: 'lowercase',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          {buttonText}
        </Button>
      </Stack>

      {imageUrl && (
        <Box
          sx={{
            mt: 4,
            width: '100%',
            maxWidth: 400,
            maxHeight: 300,
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

export default Community
