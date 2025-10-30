import { ibColorsForPatterns } from '@shared/constants/color'
import { IBAnalysisResult } from '@shared/types/IBType'
import { BaseStreak, StreakItem } from '../../common/BaseStreak'

interface IBStreakProps {
  data: IBAnalysisResult | null
}

export const IBStreak = ({ data }: IBStreakProps) => {
  const details = data?.details || []
  const items: StreakItem[] = details
    .map(ib => ({
      date: ib.date,
      pattern: ib.pattern
    }))
    .slice(-5)

  return <BaseStreak title='Last 5 days' subtitle='streaks' items={items} colorsForPatterns={ibColorsForPatterns} />
}
