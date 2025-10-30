import { useEffect, useState } from 'react'

import { gapService } from '@shared/services/gap'
import { GapTodaysType } from '@shared/types/GAPType'

interface useGapTodayProps {
  symbol: string
}

export const useGapToday = ({ symbol }: useGapTodayProps) => {
  const [todayData, setTodayData] = useState<GapTodaysType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!symbol) return

      setLoading(true)
      setError(null)

      try {
        const data = await gapService.getGapToday(symbol)
        setTodayData(data)
      } catch (err: any) {
        console.error('Error fetching today gaps data:', err)
        setError(err.message || 'Failed to fetch today gaps data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [symbol])

  return { todayData, loading, error }
}
