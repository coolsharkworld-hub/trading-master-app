import { Box } from '@mui/material'

import AlgosSection from '@features/features/Algos'
import AllFeatures from '@features/features/AllFeatures'
import CustomReportsSection from '@features/features/CustomReports'
import DataProviderSection from '@features/features/DataProviders'
import DiscordSection from '@features/features/Discord'
import IndicatorsSection from '@features/features/Indicators'
import InPlaySection from '@features/features/InPlay'
import MentorshipSection from '@features/features/Mentorship'
import PlaybookSection from '@features/features/Playbook'
import ReportsSection from '@features/features/Reports'
import ScreenerSection from '@features/features/Screener'
import EmailSignup from '@features/landing/EmailSignup'

const FeaturesPage = () => {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <AllFeatures />
      <ReportsSection />
      <InPlaySection />
      <ScreenerSection />
      <IndicatorsSection />
      <CustomReportsSection />
      <PlaybookSection />
      <MentorshipSection />
      <DiscordSection />
      <DataProviderSection />
      <AlgosSection />
      <EmailSignup />
    </Box>
  )
}

export default FeaturesPage
