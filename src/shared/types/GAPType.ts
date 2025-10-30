export interface GapTodaysType {
  symbol: string
  price: number
  gapType: string
  gapSize: number
  gapSizePercentage: number
  target: number
  gapSpike: number
  gapFillPercentage: number
  fillTime: string
  distanceToTarget: number
  gapStatus: string
  gapFillZone: string
  bias: string
  historicalContext: {
    lookbackPeriod: string
    totalGaps: number
    filledGaps: number
    unfilledGaps: number
    fillRate: number
  }
  timestamp: string
}

export interface GapResult {
  type: 'gap_up' | 'gap_down'
  date: string
  gapSize: number
  filled: boolean
}

export interface GapAnalysisReport {
  symbol: string
  summary: {
    totalGaps: number
    gapUpCount: number
    gapDownCount: number
    gapUpFilled: number
    gapUpNotFilled: number
    gapDownFilled: number
    gapDownNotFilled: number
  }
  gaps: GapResult[]
}
