import { ErrorOutline, Refresh, WarningAmber } from '@mui/icons-material'
import { AlertProps, Box, Button, Typography, keyframes } from '@mui/material'
import { tradingColors, tradingRadius, tradingShadows } from '@theme/tradingTheme'

interface ErrorMessageProps extends Omit<AlertProps, 'severity'> {
  title?: string
  message: string
  onRetry?: () => void
  fullHeight?: boolean
  severity?: 'error' | 'warning' | 'info'
}

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
`

export const ErrorMessage = ({
  title = 'Something went wrong',
  message,
  onRetry,
  fullHeight = false,
  severity = 'error',
  sx = {},
  ...props
}: ErrorMessageProps) => {
  const getSeverityConfig = () => {
    switch (severity) {
      case 'warning':
        return {
          icon: WarningAmber,
          color: tradingColors.status.warning,
          bgColor: tradingColors.overlay.warning,
          borderColor: tradingColors.border.warning
        }
      case 'info':
        return {
          icon: ErrorOutline,
          color: tradingColors.status.info,
          bgColor: tradingColors.overlay.info,
          borderColor: tradingColors.border.info
        }
      default:
        return {
          icon: ErrorOutline,
          color: tradingColors.status.error,
          bgColor: tradingColors.overlay.error,
          borderColor: tradingColors.border.danger
        }
    }
  }

  const config = getSeverityConfig()
  const IconComponent = config.icon

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: fullHeight ? '60vh' : '200px',
        textAlign: 'center',
        p: { xs: 3, md: 4 }
      }}
      {...props}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 450,
          gap: 2.5,
          p: 4,
          borderRadius: tradingRadius.lg,
          background: tradingColors.background.secondary,
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: tradingShadows.lg,
          animation: severity === 'error' ? `${shake} 0.5s ease-in-out` : 'none'
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: config.bgColor,
            border: `2px solid ${config.borderColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `2px solid ${config.color}`,
              animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
              opacity: 0.5
            },
            '@keyframes ping': {
              '0%': {
                transform: 'scale(1)',
                opacity: 1
              },
              '75%, 100%': {
                transform: 'scale(1.5)',
                opacity: 0
              }
            }
          }}
        >
          <IconComponent
            sx={{
              fontSize: 36,
              color: config.color,
              filter: `drop-shadow(0 0 8px ${config.color})`
            }}
          />
        </Box>

        <Box>
          <Typography
            variant='h6'
            sx={{
              color: config.color,
              fontWeight: 700,
              fontSize: { xs: 18, md: 20 },
              mb: 1
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: tradingColors.text.secondary,
              fontSize: { xs: 13, md: 14 },
              lineHeight: 1.6,
              maxWidth: 350
            }}
          >
            {message}
          </Typography>
        </Box>

        {onRetry && (
          <Button
            variant='outlined'
            startIcon={<Refresh />}
            onClick={onRetry}
            sx={{
              mt: 1,
              borderColor: config.color,
              color: config.color,
              px: 3,
              py: 1,
              borderRadius: tradingRadius.md,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: 14,
              '&:hover': {
                borderColor: config.color,
                backgroundColor: config.bgColor,
                transform: 'translateY(-2px)',
                boxShadow: `0 4px 12px ${config.bgColor}`
              },
              transition: 'all 0.2s ease'
            }}
          >
            Try Again
          </Button>
        )}
      </Box>
    </Box>
  )
}
