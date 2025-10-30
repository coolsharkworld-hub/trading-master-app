import { useState } from 'react'

import { Box, Popover, Typography } from '@mui/material'

interface HoverPopoverProps {
  children: React.ReactNode
  description: string
}

const HoverPopover = ({ children, description }: HoverPopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleMouseLeave = () => setAnchorEl(null)

  const open = Boolean(anchorEl)

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        disableRestoreFocus
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { p: 2, bgcolor: 'black', color: '#fff', maxWidth: 250 }
        }}
      >
        <Typography variant='body2'>{description}</Typography>
      </Popover>
    </Box>
  )
}

export default HoverPopover
