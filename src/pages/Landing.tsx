import { Box } from '@mui/material'

import LandingSection from '@features/landing/About'
import Community from '@features/landing/Community'
import DataProvider from '@features/landing/DataProvider'
import EmailSignup from '@features/landing/EmailSignup'
import FaqSection from '@features/landing/FAQ'
import Feedback from '@features/landing/Feedback'
import HeroSection from '@features/landing/Hero'
import Membership from '@features/landing/Membership'
import Newsletter from '@features/landing/Newsletter'
import TutorialSection from '@features/landing/Tutorial'
import {
  communitySections,
  dataProviderSection,
  faqs,
  feedbackData,
  newsletterSections,
  sections
} from '@shared/constants/landing'

const LandingPage = () => {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <HeroSection />
      <TutorialSection />
      {sections.map((section, index) => (
        <LandingSection key={index} {...section} />
      ))}
      <Membership />
      {communitySections.map((section, idx) => (
        <Community key={idx} {...section} />
      ))}
      <Feedback
        subtitle='Testimonials'
        title='join thousands of traders.'
        description="say goodbye to blown accounts - you've found your edge."
        cards={feedbackData}
      />
      {newsletterSections.map((section, idx) => (
        <Newsletter key={idx} {...section} />
      ))}
      {dataProviderSection.map((section, idx) => (
        <DataProvider key={idx} {...section} />
      ))}
      <FaqSection subtitle='FAQS' title='frequently asked questions' faqs={faqs} />
      <EmailSignup />
    </Box>
  )
}

export default LandingPage
