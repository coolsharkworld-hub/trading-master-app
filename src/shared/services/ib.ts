import { IBAnalysisResult } from '@shared/types/IBType'
import axios from './axios'

export const ibService = {
  getIB: async (symbol: string, from: string, to: string): Promise<IBAnalysisResult> => {
    try {
      const data = await axios<IBAnalysisResult>({
        method: 'GET',
        url: '/ib',
        params: { symbol, from, to },
        errorMessage: 'Failed to fetch IB analysis data'
      })

      return data
    } catch (error: any) {
      console.error('🔴 [IB Service] Error fetching IB analysis:', error.message)
      if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
        throw new Error('Backend server is not running. Please start the backend server on port 3003.')
      }
      throw error
    }
  }
}
