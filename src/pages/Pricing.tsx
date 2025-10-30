import { Box } from '@mui/material'

import Breakdown from '@features/pricing/Breakdown'
import PricingMember from '@features/pricing/PricingMember'

const PricingPage = () => {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <PricingMember />
      <Breakdown />
    </Box>
  )
}

export default PricingPage
