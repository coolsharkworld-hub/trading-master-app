import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import HomeIcon from '@mui/icons-material/Home'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box
      sx={{
        bgcolor: 'black',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)'
      }}
    >
      <Paper
        sx={{
          p: 6,
          maxWidth: 600,
          width: '100%',
          bgcolor: 'transparent',
          background: 'linear-gradient(180deg, #212327 0%, #222222 100%)',
          border: '1px solid #333',
          borderRadius: 3,
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #1976d2, #d32f2f, #1976d2)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' }
            }
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: 120,
            height: 120,
            margin: '0 auto 2rem',
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #d32f2f, #1976d2, #d32f2f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spin 4s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: '#212327',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #333'
              }}
            >
              <SearchOffIcon sx={{ fontSize: 48, color: '#d32f2f' }} />
            </Box>
          </Box>
        </Box>

        <Typography
          variant='h1'
          sx={{
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #d32f2f 0%, #1976d2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          404
        </Typography>

        <Typography
          variant='h4'
          sx={{
            mb: 2,
            fontWeight: 600,
            color: 'white'
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          color='gray'
          sx={{
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            maxWidth: 400,
            margin: '0 auto'
          }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </Typography>

        {location.pathname && (
          <Paper
            sx={{
              p: 2,
              mb: 4,
              bgcolor: '#111',
              border: '1px solid #333',
              borderRadius: 2
            }}
          >
            <Typography variant='body2' color='gray' sx={{ mb: 1 }}>
              Attempted URL:
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontFamily: 'monospace',
                color: '#ff6b6b',
                wordBreak: 'break-all'
              }}
            >
              {location.pathname}
            </Typography>
          </Paper>
        )}

        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} justifyContent='center'>
          <Button
            variant='contained'
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              backgroundColor: '#333',
              color: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#444'
              }
            }}
          >
            Go Back
          </Button>

          <Button
            variant='contained'
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#1565c0'
              }
            }}
          >
            Home Page
          </Button>
        </Stack>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #333' }}>
          <Typography variant='body2' color='gray' sx={{ mb: 2 }}>
            Need help?
          </Typography>
          <Stack direction='row' spacing={3} justifyContent='center' flexWrap='wrap'>
            <Button variant='text' size='small' onClick={() => navigate('/reports')} sx={{ color: '#1976d2' }}>
              Gap Analysis
            </Button>
            <Button variant='text' size='small' onClick={() => navigate('/watchlist')} sx={{ color: '#1976d2' }}>
              Watchlist
            </Button>
            <Button variant='text' size='small' onClick={() => navigate('/bookmarks')} sx={{ color: '#1976d2' }}>
              Bookmarks
            </Button>
          </Stack>
        </Box>
      </Paper>

      <Box
        sx={{
          position: 'fixed',
          top: '10%',
          left: '10%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #1976d2 0%, transparent 70%)',
          opacity: 0.1,
          animation: 'move 20s ease-in-out infinite',
          '@keyframes move': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(100px, 50px)' }
          }
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: '20%',
          right: '15%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #d32f2f 0%, transparent 70%)',
          opacity: 0.1,
          animation: 'move 25s ease-in-out infinite reverse'
        }}
      />
    </Box>
  )
}

export default NotFoundPage
