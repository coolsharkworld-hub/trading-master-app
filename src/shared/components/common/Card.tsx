import { Box, BoxProps } from '@mui/material'
import { tradingColors, tradingGradients, tradingRadius, tradingShadows } from '@theme/tradingTheme'
import { ReactNode } from 'react'

interface CardProps extends Omit<BoxProps, 'component'> {
  children: ReactNode
  variant?: 'elevated' | 'flat' | 'panel' | 'glass' | 'premium'
  interactive?: boolean
  glowOnHover?: boolean
  noPadding?: boolean
}

export const Card = ({
  children,
  variant = 'elevated',
  interactive = false,
  glowOnHover = false,
  noPadding = false,
  sx = {},
  ...props
}: CardProps) => {
  const getBackgroundConfig = () => {
    switch (variant) {
      case 'elevated':
        return {
          background: tradingGradients.cardElevated,
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: tradingShadows.elevated
        }
      case 'flat':
        return {
          background: tradingColors.background.tertiary,
          border: `1px solid ${tradingColors.border.secondary}`,
          boxShadow: tradingShadows.none
        }
      case 'panel':
        return {
          background: tradingColors.background.panel,
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: tradingShadows.inner
        }
      case 'glass':
        return {
          background: 'rgba(17, 21, 26, 0.5)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: `1px solid ${tradingColors.border.secondary}`,
          boxShadow: tradingShadows.md
        }
      case 'premium':
        return {
          background: tradingGradients.cardElevated,
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: `${tradingShadows.lg}, ${tradingShadows.glow}`
        }
      default:
        return {
          background: tradingGradients.cardElevated,
          border: `1px solid ${tradingColors.border.primary}`,
          boxShadow: tradingShadows.elevated
        }
    }
  }

  const bgConfig = getBackgroundConfig()

  return (
    <Box
      sx={{
        ...bgConfig,
        borderRadius: tradingRadius.lg,
        padding: noPadding ? 0 : { xs: 2, sm: 2.5, md: 3 },
        transition: 'none',
        position: 'relative',
        overflow: 'hidden',
        cursor: interactive ? 'pointer' : 'default',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
