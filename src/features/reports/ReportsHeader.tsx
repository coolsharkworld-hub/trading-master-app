import {
  BookmarkOutlined as BookmarkOutlinedIcon,
  Close as CloseIcon,
  KeyboardArrowLeftOutlined as KeyboardArrowLeftOutlinedIcon,
  Menu as MenuIcon,
  PlayArrowOutlined as PlayArrowOutlinedIcon
} from '@mui/icons-material'
import { memo, useMemo } from 'react'

import { AppBar, Button, Chip, IconButton, Stack, Toolbar, Typography } from '@mui/material'

import { ReportType } from '@pages/Reports'
import { useBreakpoint } from '@shared/hooks'

const REPORT_CONFIG = {
  gap: {
    title: 'Gap Fill Analysis',
    description: 'Analyze gap fill patterns and trading opportunities'
  },
  orb: {
    title: 'Opening Range Breakout',
    description: 'Track opening range breakouts and intraday momentum'
  },
  ib: {
    title: 'Initial Balance Analysis',
    description: 'Analyze initial balance patterns and trading opportunities'
  },
  custom: {
    title: 'Custom Report',
    description: 'Custom market analysis and reporting'
  },
  undefined: {
    title: 'Market Analysis',
    description: 'Advanced market analysis tools'
  }
} as const

const ACTION_BUTTONS = [
  { icon: KeyboardArrowLeftOutlinedIcon, label: 'Home', variant: 'outlined' as const },
  { icon: BookmarkOutlinedIcon, label: 'Bookmarks', variant: 'outlined' as const },
  { icon: PlayArrowOutlinedIcon, label: 'How to Use', variant: 'contained' as const }
] as const

interface ReportsHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  reportType: ReportType
}

const ReportsHeader = memo(({ sidebarOpen, setSidebarOpen, reportType }: ReportsHeaderProps) => {
  const reportInfo = useMemo(() => REPORT_CONFIG[reportType], [reportType])
  const { isMobile } = useBreakpoint()

  const buttonSize = isMobile ? 'small' : 'medium'
  const titleVariant = isMobile ? 'subtitle1' : 'h6'

  return (
    <AppBar position='sticky' sx={{ color: 'text.primary', bgcolor: 'background.default' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          gap: { xs: 1, md: 2 },
          py: 1
        }}
      >
        <Stack direction='row' alignItems='center' spacing={{ xs: 1, md: 2 }}>
          <IconButton
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={{ color: 'white', display: { lg: 'none' } }}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Stack>
            <Typography variant={titleVariant} fontWeight={600}>
              {reportInfo.title}
            </Typography>
            <Typography variant='caption' color='text.secondary' sx={{ display: { xs: 'none', lg: 'block' } }}>
              {reportInfo.description}
            </Typography>
          </Stack>
        </Stack>

        <Chip label={reportType.toUpperCase()} size='small' color='primary' />

        <Stack direction='row' spacing={1}>
          {ACTION_BUTTONS.map(({ icon: Icon, label, variant }) => (
            <Button key={label} variant={variant} color='primary' size={buttonSize}>
              <Icon sx={{ mr: isMobile ? 0 : 1 }} />
              {!isMobile && label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
})

export default ReportsHeader
