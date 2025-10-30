import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import { Card } from '@shared/components/common'
import { tradingColors, tradingRadius } from '@theme/tradingTheme'
import { StreakLegendItem } from './StreakLegendItem'

export interface StreakItem {
  date: string
  pattern: string
}

export interface BaseStreakProps {
  title: string
  subtitle?: string
  items: StreakItem[]
  colorsForPatterns: { [key: string]: string }
}

export const BaseStreak = ({ title, subtitle, items, colorsForPatterns }: BaseStreakProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card variant='elevated'>
      {subtitle && (
        <Typography
          sx={{
            color: tradingColors.text.muted,
            fontSize: { xs: 12, sm: 14 },
            fontWeight: 600,
            textTransform: 'uppercase'
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Typography
        sx={{
          color: tradingColors.text.primary,
          fontWeight: 700,
          mb: { xs: 1, sm: 2 },
          fontSize: { xs: 16, sm: 20 }
        }}
      >
        {title}
      </Typography>

      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 1 : 2}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          flex: 1
        }}
      >
        {items.map((item, index) => (
          <Stack
            key={index}
            spacing={1}
            alignItems='center'
            sx={{
              flex: 1,
              flexDirection: isMobile ? 'row' : 'column',
              justifyContent: isMobile ? 'space-between' : 'center'
            }}
          >
            <Box
              sx={{
                width: isMobile ? '60%' : '100%',
                height: isMobile ? 12 : 20,
                borderRadius: tradingRadius.sm,
                backgroundColor: colorsForPatterns[item.pattern],
                border: `1px solid ${tradingColors.border.secondary}`,
                minHeight: isMobile ? 12 : 20,
                transition: 'all 0.2s ease',
                '&:hover': {
                  opacity: 0.8
                }
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 12 },
                color: tradingColors.text.secondary,
                minWidth: isMobile ? '35%' : 'auto',
                textAlign: isMobile ? 'right' : 'center'
              }}
            >
              {item.date}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Stack
        direction='row'
        sx={{
          gap: { xs: 1, sm: 2 },
          mt: { xs: 1, sm: 2 },
          mx: 'auto',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {Object.keys(colorsForPatterns).map((item: string) => (
          <StreakLegendItem key={item} color={colorsForPatterns[item]} label={item.replace('_', ' ')} />
        ))}
      </Stack>
    </Card>
  )
}
