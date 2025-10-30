import { ORBAnalysisResult } from '@shared/types/ORBType'
import axios from './axios'

export const orbService = {
  getORB: async (symbol: string, from: string, to: string, orMinutes: number = 30): Promise<ORBAnalysisResult> => {
    return axios({
      method: 'GET',
      url: `/orb`,
      params: { symbol, from, to, orMinutes },
      errorMessage: 'Failed to fetch ORB analysis data'
    })
  }
}
