import { School, TrendingDown, TrendingUp } from '@mui/icons-material'
import { Box, Chip, Tab, Tabs, Typography } from '@mui/material'
import { Card } from '@shared/components/common'
import { useState } from 'react'

const images = [
  '/assets/gap-up.webp',
  '/assets/gap-down.webp',
  '/assets/gap-up-filled.webp',
  '/assets/gap-down-filled.webp',
  '/assets/gap-up-not-filled.webp',
  '/assets/gap-down-not-filled.webp'
]

const labels = ['gap up', 'gap down', 'gap up filled', 'gap down filled', 'gap up not filled', 'gap down not filled']

const getIcon = (index: number) => {
  if (index === 0 || index === 2 || index === 4) {
    return <TrendingUp sx={{ fontSize: 16 }} />
  }
  return <TrendingDown sx={{ fontSize: 16 }} />
}

export const ChartExplainer = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Card
      variant='elevated'
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <School sx={{ color: 'primary.main', fontSize: 24 }} />
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            Gap Pattern Guide
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            Visual examples of gap types and outcomes
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant='scrollable'
          scrollButtons='auto'
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              textTransform: 'capitalize',
              minHeight: 48,
              fontSize: '0.875rem'
            },
            '& .Mui-selected': {
              color: 'primary.main',
              fontWeight: 600
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
              height: 3
            }
          }}
        >
          {labels.map((label, idx) => (
            <Tab
              key={idx}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {getIcon(idx)}
                  {label}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: 'surface.secondary',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box
          component='img'
          src={images[tabIndex]}
          alt={labels[tabIndex]}
          sx={{
            width: '100%',
            display: 'block',
            objectFit: 'contain'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16
          }}
        >
          <Chip
            icon={getIcon(tabIndex)}
            label={labels[tabIndex]}
            size='small'
            sx={{
              fontWeight: 600,
              textTransform: 'capitalize',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0,0,0,0.7)'
            }}
          />
        </Box>
      </Box>
    </Card>
  )
}
