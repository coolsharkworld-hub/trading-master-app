import { orbColorsForPatterns } from '@shared/constants/color'
import { ORBAnalysisResult } from '@shared/types/ORBType'
import { BaseStreak, StreakItem } from '../../common/BaseStreak'

interface StreakProps {
  data: ORBAnalysisResult | null
}

export const ORBStreak = ({ data }: StreakProps) => {
  const details = data?.details || []
  const items: StreakItem[] = details
    .map(orb => ({
      date: orb.date,
      pattern: orb.pattern
    }))
    .slice(-5)

  return <BaseStreak title='Last 5 days' subtitle='streaks' items={items} colorsForPatterns={orbColorsForPatterns} />
}
