import { useEffect, useState } from 'react'

import { ibService } from '@shared/services/ib'
import { IBAnalysisResult } from '@shared/types/IBType'

interface UseIBDataProps {
  symbol: string
  fromDate: string
  toDate: string
}

export interface UseIBDataReturn {
  data: IBAnalysisResult | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

export const useIB = ({ symbol, fromDate, toDate }: UseIBDataProps) => {
  const [data, setData] = useState<IBAnalysisResult | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    if (!symbol || !fromDate || !toDate) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const ibData = await ibService.getIB(symbol, fromDate, toDate)
      setData(ibData)
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to fetch IB data'
      console.error('🔴 [useIB] Error:', errorMessage)
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
