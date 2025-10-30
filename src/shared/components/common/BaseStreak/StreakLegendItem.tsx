import { Box, Stack, Typography } from '@mui/material'
import { tradingColors } from '@theme/tradingTheme'

interface StreakLegendItemProps {
  color: string
  label: string
}

export const StreakLegendItem = ({ color, label }: StreakLegendItemProps) => {
  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <Box
        sx={{
          width: { xs: 8, sm: 10 },
          height: { xs: 8, sm: 10 },
          borderRadius: '50%',
          bgcolor: color
        }}
      />
      <Typography
        sx={{ fontSize: { xs: 11, sm: 14 }, color: tradingColors.text.secondary, textTransform: 'capitalize' }}
      >
        {label}
      </Typography>
    </Stack>
  )
}
