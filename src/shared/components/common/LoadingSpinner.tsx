import { Box, CircularProgress, Typography, keyframes } from '@mui/material'
import { tradingColors } from '@theme/tradingTheme'

interface LoadingSpinnerProps {
  message?: string
  size?: number
  fullHeight?: boolean
}

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = ({ message = 'Loading...', size = 40, fullHeight = false }: LoadingSpinnerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: fullHeight ? '60vh' : '200px',
        gap: 3,
        textAlign: 'center',
        py: 4
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size + 20,
          height: size + 20
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: size + 20,
            height: size + 20,
            borderRadius: '50%',
            border: `2px solid ${tradingColors.border.secondary}`,
            animation: `${pulse} 2s ease-in-out infinite`
          }}
        />

        <CircularProgress
          size={size}
          thickness={3}
          sx={{
            color: tradingColors.accent.primary,
            animationDuration: '1s',
            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            width: size - 10,
            height: size - 10,
            borderRadius: '50%',
            border: `1px solid ${tradingColors.border.accent}`,
            animation: `${rotate} 3s linear infinite reverse`,
            opacity: 0.3
          }}
        />
      </Box>

      {message && (
        <Box>
          <Typography
            sx={{
              color: tradingColors.text.secondary,
              fontSize: { xs: 13, md: 14 },
              fontWeight: 500,
              maxWidth: 300,
              mb: 0.5,
              animation: `${pulse} 2s ease-in-out infinite`
            }}
          >
            {message}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              justifyContent: 'center',
              mt: 1
            }}
          >
            {[0, 1, 2].map(i => (
              <Box
                key={i}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: tradingColors.accent.primary,
                  animation: `${pulse} 1.4s ease-in-out ${i * 0.2}s infinite`
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}
