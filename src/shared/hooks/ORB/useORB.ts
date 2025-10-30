import { useEffect, useState } from 'react'

import { orbService } from '@shared/services/orb'
import { ORBAnalysisResult } from '@shared/types/ORBType'

interface UseORBDataProps {
  symbol: string
  fromDate: string
  toDate: string
  orMinutes: number
}

export interface UseORBDataReturn {
  data: ORBAnalysisResult | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

export const useORB = ({ symbol, fromDate, toDate, orMinutes }: UseORBDataProps) => {
  const [data, setData] = useState<ORBAnalysisResult | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    if (!symbol || !fromDate || !toDate || !orMinutes) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const orbData = await orbService.getORB(symbol, fromDate, toDate, orMinutes)
      setData(orbData)
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to fetch ORB data'
      console.error('🔴 [useORB] Error:', errorMessage)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [symbol, fromDate, toDate, orMinutes])

  return { data, loading, error, refresh: fetchData }
}
