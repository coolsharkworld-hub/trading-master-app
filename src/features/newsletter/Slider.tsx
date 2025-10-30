import { Box, Container, Typography } from '@mui/material'

import { testimonialsRow1, testimonialsRow2 } from '@shared/constants/testimonials'

const TestimonialSlider = () => {
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
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          py: 5,
          bgcolor: '#000'
        }}
      >
        <Box
          className='marquee'
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'marqueeLeft 35s linear infinite',
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {testimonialsRow1.map((t, i) => (
            <Box
              key={i}
              sx={{
                border: '1px solid #fff',
                p: 2,
                mx: 1,
                maxWidth: '250px',
                borderRadius: 2,
                color: '#fff',
                flexShrink: 0
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>{t.name}</Typography>
              <Typography sx={{ fontSize: 12 }}>{t.text}</Typography>
            </Box>
          ))}
        </Box>

        <Box
          className='marquee'
          sx={{
            display: 'flex',
            width: 'max-content',
            mt: 4,
            animation: 'marqueeRight 35s linear infinite',
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {testimonialsRow2.map((t, i) => (
            <Box
              key={i}
              sx={{
                border: '1px solid #fff',
                p: 2,
                mx: 1,
                borderRadius: 2,
                maxWidth: '250px',
                color: '#fff',
                flexShrink: 0
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>{t.name}</Typography>
              <Typography sx={{ fontSize: 12 }}>{t.text}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '25%',
            background: 'linear-gradient(to right, #000, transparent)'
          }}
        />

        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '25%',
            background: 'linear-gradient(to left, #000, transparent)'
          }}
        />
      </Box>
    </Container>
  )
}

export default TestimonialSlider
