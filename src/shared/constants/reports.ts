export const selectOptions = [
  {
    id: 'asset',
    label: 'choose Asset',
    items: ['stock', 'forex', 'crypto', 'futures']
  },
  {
    id: 'symbol',
    label: 'choose Symbol',
    items: [
      // ETFs
      'SPY',
      'QQQ',
      'IWM',
      'DIA',
      'VOO',
      // Tech Stocks
      'AAPL',
      'MSFT',
      'GOOGL',
      'AMZN',
      'META',
      'NVDA',
      'TSLA',
      'AMD',
      'INTC',
      // Other Popular Stocks
      'JPM',
      'JNJ',
      'V',
      'WMT',
      'XOM',
      'DIS',
      'NFLX',
      'BA',
      'PYPL',
      'ADBE'
    ]
  },
  {
    id: 'report_type',
    label: 'choose report type',
    items: [
      'most popular',
      'all reports',
      'price action',
      'volume',
      'indicators',
      'scalper',
      'day trader',
      'swing trader'
    ]
  },
  {
    id: 'report',
    label: 'choose report',
    items: ['gap fill', 'IB:initial balance breakout', 'ORB:opening range breakout', 'opening candle continuation']
  },
  {
    id: 'dataRange',
    label: 'Select Date Range',
    items: ['1 week', '1 month', '3 months', '6 months', 'YTD', '1 year', '2 years', '3 years', '5 years']
  },
  {
    id: 'timeframe',
    label: 'Select Timeframe',
    items: ['Daily']
  },
  {
    id: 'session',
    label: 'Choose session',
    items: ['New York:9:30am-4:00pm', 'London:3:00am-11:30am', 'Tokyo:7:00pm-2:00am']
  },
  {
    id: 'subReport',
    label: 'Choose SubReport',
    items: ['standard', 'by size', 'by weekday', 'by close', 'by spike', 'by full time']
  },
  {
    id: 'customize',
    label: 'Select Benchmark',
    items: ['S&P 500', 'NASDAQ 100', 'Dow Jones', 'Russell 2000']
  }
]

export const watchListData = [
  {
    category: 'Stock',
    description: 'Stock',
    items: ['AAPL', 'SPY', 'TSLA', 'MSFT']
  },
  {
    category: 'Futures',
    description: 'Futures',
    items: ['NQ']
  },
  {}
]
