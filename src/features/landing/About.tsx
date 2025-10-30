import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { tradingColors } from '@theme/tradingTheme'

interface Props {
  subtitle: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  videoUrlDesktop?: string
  videoUrlMobile?: string
}

const LandingSection = ({
  subtitle,
  title,
  description,
  buttonText = 'get started',
  buttonLink = '/auth/login',
  videoUrlDesktop,
  videoUrlMobile
}: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const videoUrl = isMobile ? videoUrlMobile : videoUrlDesktop

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
          background: `linear-gradient(90deg, ${tradingColors.background.primary} 0%, ${tradingColors.background.tertiary} 50%, ${tradingColors.background.primary} 100%)`,
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
            color: tradingColors.primary,
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
            bgcolor: tradingColors.primary,
            color: tradingColors.text.primary,
            fontWeight: 500,
            borderRadius: 1,
            px: 6,
            py: 0.5,
            textTransform: 'lowercase',
            boxShadow: 'none',
            '&:hover': { bgcolor: tradingColors.primaryDark }
          }}
        >
          {buttonText}
        </Button>
      </Stack>

      {videoUrl && (
        <Box
          sx={{
            mt: 4,
            width: '100%',
            maxWidth: 800,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3
          }}
        >
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 16
            }}
          />
        </Box>
      )}
    </Container>
  )
}

export default LandingSection
