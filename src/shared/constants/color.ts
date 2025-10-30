import { tradingColors } from '@theme/tradingTheme'

export const orbColorsForPatterns: { [key: string]: string } = {
  breakout: tradingColors.success,
  breakdown: tradingColors.danger,
  double_break: tradingColors.warning,
  no_break: tradingColors.text.muted
}

export const ibColorsForPatterns: { [key: string]: string } = {
  single_break: tradingColors.success,
  double_break: tradingColors.warning,
  no_break: tradingColors.text.muted
}

export const gapColorsForPatterns: { [key: string]: string } = {
  filled: tradingColors.success,
  not_filled: tradingColors.text.muted
}
