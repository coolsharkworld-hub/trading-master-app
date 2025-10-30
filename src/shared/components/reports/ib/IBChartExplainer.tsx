import { Info } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { tradingColors, tradingRadius, tradingShadows } from '@theme/tradingTheme'

const patterns = [
  {
    title: 'IB Breakout (Above)',
    color: tradingColors.success,
    description:
      'Price breaks and holds above the IB high, indicating bullish momentum and potential upward continuation.'
  },
  {
    title: 'IB Breakdown (Below)',
    color: tradingColors.danger,
    description:
      'Price breaks and holds below the IB low, indicating bearish momentum and potential downward continuation.'
  },
  {
    title: 'Double Break',
    color: tradingColors.warning,
    description: 'Price breaks the same IB level twice in the same direction, indicating strong momentum confirmation.'
  },
  {
    title: 'Inside IB Day',
    color: tradingColors.text.muted,
    description:
      'Price remains within the IB range all day, suggesting consolidation or lack of directional conviction.'
  }
]

const applications = [
  {
    title: 'Support & Resistance',
    description:
      'IB high and low often act as key levels where price may find support or resistance throughout the session.'
  },
  {
    title: 'Breakout Trading',
    description:
      'Breaks above/below IB levels can signal strong directional moves, offering entry opportunities with defined risk.'
  },
  {
    title: 'Range Trading',
    description: 'On inside IB days, traders can fade the extremes and trade the range between IB high and low.'
  },
  {
    title: 'Market Context',
    description:
      'IB size relative to recent days can indicate expected volatility and help size positions appropriately.'
  }
]

const metrics = [
  'IB Size %: Larger IBs often lead to trending days',
  'Extension %: How far price moves beyond IB levels',
  'Volume Profile: High volume in IB indicates acceptance',
  'Time Factor: Earlier breaks tend to be more significant'
]

export const IBChartExplainer = () => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3.5 },
        mt: 3,
        borderRadius: tradingRadius.lg,
        border: `1px solid ${tradingColors.border.primary}`,
        background: tradingColors.background.secondary,
        boxShadow: tradingShadows.md
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <Info sx={{ color: tradingColors.accent.primary, fontSize: 20 }} />
        <Typography sx={{ color: tradingColors.text.primary, fontSize: { xs: 16, md: 20 }, fontWeight: 700 }}>
          Understanding Initial Balance (IB) Analysis
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography sx={{ color: tradingColors.text.primary, fontSize: 14, fontWeight: 'bold', mb: 1 }}>
            What is Initial Balance?
          </Typography>
          <Typography sx={{ color: tradingColors.text.secondary, fontSize: 13, lineHeight: 1.6 }}>
            Initial Balance (IB) represents the high and low price range established during the first hour of regular
            trading (typically 9:30 AM - 10:30 AM ET). This concept, developed by Peter Steidlmayer as part of Market
            Profile theory, helps identify key support and resistance levels for the trading day.
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: tradingColors.text.primary, fontSize: 14, fontWeight: 'bold', mb: 2 }}>
            IB Patterns & Their Meanings
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
            {patterns.map((pattern, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  backgroundColor: tradingColors.background.secondary,
                  borderRadius: tradingRadius.md,
                  border: `1px solid ${tradingColors.border.secondary}`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    border: `1px solid ${tradingColors.border.accent}`,
                    boxShadow: tradingShadows.sm
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: pattern.color
                    }}
                  />
                  <Typography sx={{ color: tradingColors.text.primary, fontSize: 12, fontWeight: 'bold' }}>
                    {pattern.title}
                  </Typography>
                </Box>
                <Typography sx={{ color: tradingColors.text.secondary, fontSize: 11, lineHeight: 1.4 }}>
                  {pattern.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography sx={{ color: tradingColors.text.primary, fontSize: 14, fontWeight: 'bold', mb: 2 }}>
            Trading Applications
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {applications.map((app, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: tradingColors.accent.primary,
                    flexShrink: 0,
                    mt: 1
                  }}
                />
                <Box>
                  <Typography sx={{ color: tradingColors.text.primary, fontSize: 12, fontWeight: 'bold', mb: 0.5 }}>
                    {app.title}
                  </Typography>
                  <Typography sx={{ color: tradingColors.text.secondary, fontSize: 11, lineHeight: 1.4 }}>
                    {app.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography sx={{ color: tradingColors.text.primary, fontSize: 14, fontWeight: 'bold', mb: 1 }}>
            Key Metrics to Watch
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 1
            }}
          >
            {metrics.map((metric, index) => (
              <Typography key={index} sx={{ color: tradingColors.text.secondary, fontSize: 11, lineHeight: 1.5 }}>
                • {metric}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            p: 2,
            backgroundColor: tradingColors.background.secondary,
            borderRadius: tradingRadius.md,
            border: `1px solid ${tradingColors.border.secondary}`
          }}
        >
          <Typography sx={{ color: tradingColors.text.muted, fontSize: 10, lineHeight: 1.4, fontStyle: 'italic' }}>
            ⚠️ Disclaimer: Initial Balance analysis is one tool among many and should be used in conjunction with other
            technical and fundamental analysis methods. Past performance does not guarantee future results. Always
            manage risk appropriately and never risk more than you can afford to lose.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
