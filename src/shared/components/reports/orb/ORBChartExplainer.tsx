import { useState } from 'react'

import { Info } from '@mui/icons-material'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { tradingColors, tradingRadius, tradingShadows } from '@theme/tradingTheme'

const images = ['/assets/orb-double-break.webp', '/assets/orb-opening-range.webp']

export const ORBChartExplainer = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Box
      sx={{
        mt: 3,
        p: { xs: 2.5, md: 3.5 },
        borderRadius: tradingRadius.lg,
        border: `1px solid ${tradingColors.border.primary}`,
        background: tradingColors.background.secondary,
        boxShadow: tradingShadows.md,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Info sx={{ color: tradingColors.accent.primary, fontSize: 20 }} />
        <Typography sx={{ color: tradingColors.text.primary, fontSize: { xs: 16, md: 20 }, fontWeight: 700 }}>
          ORB Chart Explainer
        </Typography>
      </Box>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        sx={{
          mb: 2,
          borderBottom: `1px solid ${tradingColors.border.secondary}`,
          '& .MuiTab-root': {
            color: tradingColors.text.secondary,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              color: tradingColors.text.primary
            }
          },
          '& .Mui-selected': {
            color: tradingColors.accent.primary
          },
          '& .MuiTabs-indicator': {
            backgroundColor: tradingColors.accent.primary
          }
        }}
      >
        {['ORB: double break', 'ORB: opening range breakout'].map((label, idx) => (
          <Tab key={idx} label={label} />
        ))}
      </Tabs>

      <Box
        component='img'
        src={images[tabIndex]}
        alt={`Chart ${tabIndex + 1}`}
        sx={{
          width: '100%',
          borderRadius: tradingRadius.md,
          objectFit: 'contain',
          border: `1px solid ${tradingColors.border.secondary}`,
          boxShadow: tradingShadows.sm
        }}
      />
    </Box>
  )
}
