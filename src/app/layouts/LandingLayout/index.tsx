import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, CircularProgress } from '@mui/material'

import { Footer } from '@shared/components/layout/Footer'
import { Header } from '@shared/components/layout/Header'

export const LandingLayout = () => {
  return (
    <Box>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  )
}
