import { useEffect, useState } from 'react'

import { gapService } from '@shared/services/gap'
import { GapAnalysisReport } from '@shared/types/GAPType'

interface UseGAPDataProps {
  symbol: string
  fromDate: string
  toDate: string
}

export interface UseGAPDataReturn {
  data: GapAnalysisReport | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

export const useGAP = ({ symbol, fromDate, toDate }: UseGAPDataProps) => {
  const [data, setData] = useState<GapAnalysisReport | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    if (!symbol || !fromDate || !toDate) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const gapData = await gapService.getGap(symbol, fromDate, toDate)
      setData(gapData)
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to fetch GAP data'
      console.error('🔴 [useGAPData] Error:', errorMessage)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [symbol, fromDate, toDate])

  return { data, loading, error, refresh: fetchData }
}
