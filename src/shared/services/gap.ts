import { GapAnalysisReport, GapTodaysType } from '@shared/types/GAPType'
import axios from './axios'

export const gapService = {
  getGap: (symbol: string, from: string, to: string): Promise<GapAnalysisReport> => {
    return axios({
      method: 'GET',
      url: `/gap`,
      params: { symbol, from, to },
      errorMessage: 'Failed to fetch gap analysis data'
    })
  },

  getGapToday: (symbol: string): Promise<GapTodaysType> => {
    return axios({
      method: 'GET',
      url: `/gap/today`,
      params: { symbol },
      errorMessage: "Failed to fetch today's gaps data"
    })
  }
}
