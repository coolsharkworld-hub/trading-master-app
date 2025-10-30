import { Badge, Box, IconButton, Stack, Tooltip } from '@mui/material'

import AlgosIcon from '@shared/icons/AlgosIcon'
import { BookmarkIcon, DiscordIcon, HelpIcon, NinjaTraderIcon, TradingViewIcon } from '@shared/icons/Icons'

const iconList = [
  { icon: AlgosIcon, label: 'Algorithm' },
  { icon: BookmarkIcon, label: 'Bookmark' },
  { icon: TradingViewIcon, label: 'TradingView' },
  { icon: NinjaTraderIcon, label: 'NinjaTrader' },
  { icon: DiscordIcon, label: 'Discord' },
  { icon: HelpIcon, label: 'Help' }
]

const IconsSideBar = () => {
  return (
    <Box
      sx={{
        bgcolor: 'surface.primary',
        p: 1,
        flexDirection: 'column',
        borderLeft: '1px solid',
        borderColor: 'divider',
        height: '100%'
      }}
    >
      <Stack direction='column' spacing={1.5}>
        {iconList.map(({ icon: IconComponent, label }, index) => (
          <Tooltip title={label} key={label} placement='left' arrow>
            <IconButton
              sx={{
                color: 'text.secondary',
                width: 40,
                height: 40,
                borderRadius: 2,
                transition: 'all 0.2s',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'surface.secondary',
                  transform: 'scale(1.1)'
                }
              }}
            >
              {index === 1 ? (
                <Badge badgeContent={3} color='primary'>
                  <IconComponent />
                </Badge>
              ) : (
                <IconComponent />
              )}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  )
}

export default IconsSideBar
