const CORE_BLACK = '#0A0E14'
const CORE_DARK = '#141B24'
const CORE_GRAY = '#2D3748'
const CORE_SILVER = '#A0AEC0'
const CORE_WHITE = '#E2E8F0'

const TRADING_GREEN = '#10B981'
const TRADING_RED = '#EF4444'
const TRADING_CYAN = '#06B6D4'
const TRADING_BLUE = '#3B82F6'
const TRADING_TEAL = '#14B8A6'
const TRADING_AZURE = '#0EA5E9'

export const tradingColors = {
  background: {
    primary: CORE_BLACK,
    secondary: CORE_DARK,
    tertiary: '#1A2332',
    level2: CORE_DARK,
    level3: '#1A2332',
    panel: '#0F1419',
    modal: CORE_DARK,
    input: '#1F2937',
    hover: '#252F3F',
    surface: CORE_DARK
  },

  border: {
    primary: `${CORE_GRAY}99`,
    secondary: `${CORE_GRAY}66`,
    accent: TRADING_CYAN,
    success: TRADING_GREEN,
    danger: TRADING_RED,
    warning: '#F59E0B',
    info: TRADING_AZURE,
    subtle: `${CORE_GRAY}33`
  },

  text: {
    primary: CORE_WHITE,
    secondary: CORE_SILVER,
    tertiary: '#718096',
    muted: '#4A5568',
    disabled: '#2D3748',
    inverse: CORE_BLACK,
    accent: TRADING_CYAN
  },

  accent: {
    primary: TRADING_BLUE,
    secondary: TRADING_CYAN,
    tertiary: TRADING_TEAL,
    gold: '#F59E0B',
    silver: CORE_SILVER,
    cyan: TRADING_CYAN,
    purple: '#8B5CF6'
  },

  market: {
    bullish: TRADING_GREEN,
    bearish: TRADING_RED,
    neutral: CORE_SILVER,
    volume: TRADING_CYAN,
    price: CORE_WHITE,
    bullishMuted: 'rgba(16, 185, 129, 0.15)',
    bearishMuted: 'rgba(239, 68, 68, 0.15)'
  },

  chart: {
    bull: TRADING_GREEN,
    bear: TRADING_RED,
    grid: 'rgba(45, 55, 72, 0.1)',
    axis: 'rgba(113, 128, 150, 0.3)',
    crosshair: 'rgba(160, 174, 192, 0.5)',
    volume: 'rgba(6, 182, 212, 0.3)',
    ma50: TRADING_AZURE,
    ma200: '#F59E0B',
    background: CORE_BLACK
  },

  status: {
    success: TRADING_GREEN,
    error: TRADING_RED,
    warning: '#F59E0B',
    info: TRADING_AZURE,
    pending: CORE_SILVER,
    active: TRADING_GREEN,
    inactive: '#4A5568'
  },

  overlay: {
    light: 'rgba(226, 232, 240, 0.03)',
    medium: 'rgba(226, 232, 240, 0.05)',
    heavy: 'rgba(226, 232, 240, 0.08)',
    success: 'rgba(16, 185, 129, 0.08)',
    error: 'rgba(239, 68, 68, 0.08)',
    warning: 'rgba(245, 158, 11, 0.08)',
    info: 'rgba(14, 165, 233, 0.08)'
  },

  primary: TRADING_BLUE,
  primaryDark: '#2563EB',
  success: TRADING_GREEN,
  error: TRADING_RED,
  warning: '#F59E0B',
  info: TRADING_AZURE,
  danger: TRADING_RED,

  surface: {
    paper: CORE_DARK,
    elevated: '#1A2332'
  },

  doubleBreak: '#8B5CF6',
  teal: TRADING_TEAL,
  cyan: TRADING_CYAN,
  azure: TRADING_AZURE
}

export const tradingShadows = {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.5)',
  sm: '0 2px 4px rgba(0, 0, 0, 0.5)',
  md: '0 4px 8px rgba(0, 0, 0, 0.5)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.5)',
  lg: '0 6px 12px rgba(0, 0, 0, 0.5)',
  xl: '0 8px 16px rgba(0, 0, 0, 0.5)',
  '2xl': '0 12px 24px rgba(0, 0, 0, 0.5)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
  innerLg: 'inset 0 3px 6px rgba(0, 0, 0, 0.5)',
  glow: 'none',
  glowSuccess: 'none',
  glowDanger: 'none',
  glowWarning: 'none',
  premium: '0 4px 8px rgba(0, 0, 0, 0.5)',
  elevated: '0 2px 4px rgba(0, 0, 0, 0.5)',
  floating: '0 4px 8px rgba(0, 0, 0, 0.5)'
}

export const tradingSpacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '3rem',
  '5xl': '4rem'
}

export const tradingRadius = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.625rem',
  '2xl': '0.75rem',
  full: '9999px'
}

export const tradingTransitions = {
  fastest: 'none',
  fast: 'none',
  normal: 'none',
  slow: 'none',
  color: 'none',
  transform: 'none',
  all: 'none',
  bounce: 'none'
}

export const tradingGradients = {
  background: tradingColors.background.primary,
  panel: tradingColors.background.panel,
  card: tradingColors.background.secondary,
  cardElevated: tradingColors.background.secondary,
  primary: tradingColors.accent.primary,
  success: tradingColors.market.bullish,
  danger: tradingColors.market.bearish,
  warning: tradingColors.status.warning,
  premium: tradingColors.background.secondary,
  info: tradingColors.accent.primary,
  overlay: 'transparent',
  overlayTop: 'transparent',
  shimmer: 'transparent',
  glow: 'transparent',
  glowSuccess: 'transparent',
  borderAccent: 'transparent',
  borderSuccess: 'transparent',
  borderDanger: 'transparent',
  borderTop: 'transparent',
  mesh: 'transparent'
}

export const tradingTypography = {
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", "Droid Sans Mono", monospace',
    display: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  fontSize: {
    xs: '0.6875rem',
    sm: '0.8125rem',
    base: '0.875rem',
    md: '0.9375rem',
    lg: '1rem',
    xl: '1.125rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    '4xl': '2rem'
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em'
  }
}

export const tradingCardStyles = {
  elevated: {
    background: tradingColors.background.secondary,
    border: `1px solid ${tradingColors.border.primary}`,
    borderRadius: tradingRadius.lg,
    boxShadow: tradingShadows.md,
    transition: 'none',
    position: 'relative' as const,
    overflow: 'hidden' as const
  },
  flat: {
    background: tradingColors.background.tertiary,
    border: `1px solid ${tradingColors.border.secondary}`,
    borderRadius: tradingRadius.md,
    transition: 'none'
  },
  panel: {
    background: tradingColors.background.panel,
    border: `1px solid ${tradingColors.border.primary}`,
    borderRadius: tradingRadius.lg,
    boxShadow: 'none'
  },
  glass: {
    background: tradingColors.background.secondary,
    border: `1px solid ${tradingColors.border.secondary}`,
    borderRadius: tradingRadius.lg,
    boxShadow: tradingShadows.sm
  },
  premium: {
    background: tradingColors.background.secondary,
    border: `1px solid ${tradingColors.border.primary}`,
    borderRadius: tradingRadius.lg,
    boxShadow: tradingShadows.md,
    position: 'relative' as const,
    overflow: 'hidden' as const
  }
}

export const createTradingHover = (_options?: {
  borderColor?: string
  shadow?: string
  transform?: string
  scale?: number
  glow?: boolean
}) => ({})

export const glassEffect = {
  background: tradingColors.background.tertiary,
  border: `1px solid ${tradingColors.border.secondary}`,
  boxShadow: tradingShadows.sm
}

export const tradingMetricStyles = {
  positive: {
    color: tradingColors.market.bullish,
    backgroundColor: tradingColors.overlay.success,
    borderColor: tradingColors.border.success,
    fontWeight: 600
  },
  negative: {
    color: tradingColors.market.bearish,
    backgroundColor: tradingColors.overlay.error,
    borderColor: tradingColors.border.danger,
    fontWeight: 600
  },
  neutral: {
    color: tradingColors.text.secondary,
    backgroundColor: tradingColors.overlay.light,
    borderColor: tradingColors.border.secondary,
    fontWeight: 500
  }
}

export const modernColors = tradingColors
export const modernShadows = tradingShadows
export const modernBorderRadius = tradingRadius
export const modernTransitions = tradingTransitions
export const modernGradients = tradingGradients
export const createHoverState = createTradingHover
