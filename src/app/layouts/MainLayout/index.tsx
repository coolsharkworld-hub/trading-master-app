import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, CircularProgress } from '@mui/material'

export const MainLayout = () => {
  return (
    <Box>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Box>
  )
}
