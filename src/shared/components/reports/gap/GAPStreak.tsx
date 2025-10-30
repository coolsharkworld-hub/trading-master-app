import { Box, Stack } from '@mui/material'

import { gapColorsForPatterns } from '@shared/constants/color'
import { GapAnalysisReport } from '@shared/types/GAPType'
import { BaseStreak } from '../../common/BaseStreak'

interface StreakProps {
  data: GapAnalysisReport | null
}

export const GAPStreak = ({ data }: StreakProps) => {
  const items = data?.gaps || []
  const gapUps = items
    .filter(gap => gap.type === 'gap_up')
    .slice(-5)
    .map(ib => ({
      date: ib.date,
      pattern: ib.filled ? 'filled' : 'not_filled'
    }))
  const gapDowns = items
    .filter(gap => gap.type === 'gap_down')
    .slice(-5)
    .map(ib => ({
      date: ib.date,
      pattern: ib.filled ? 'filled' : 'not_filled'
    }))

  return (
    <Stack direction={{ xs: 'column', md: 'column', lg: 'row' }} gap={{ xs: 2, md: 2, lg: 3 }}>
      {gapUps.length ? (
        <Box sx={{ width: '100%' }}>
          <BaseStreak title='last 5 gaps up' items={gapUps} colorsForPatterns={gapColorsForPatterns} />
        </Box>
      ) : (
        <></>
      )}
      {gapDowns.length ? (
        <Box sx={{ width: '100%' }}>
          <BaseStreak title='last 5 gaps down' items={gapDowns} colorsForPatterns={gapColorsForPatterns} />
        </Box>
      ) : (
        <></>
      )}
    </Stack>
  )
}
