import { Box } from '@mui/material'

import TestimonialSlider from '@features/newsletter/Slider'
import Strategy, { StrategySectionProps } from '@features/newsletter/Strategy'

const strategySections: StrategySectionProps[] = [
  {
    subtitle: 'stay sharp',
    title: 'newsletter',
    description: 'get A+ trading strategies in your inbox every Saturday morning',
    imageUrlDesktop: 'assets/newsletter-banner.webp',
    imageUrlMobile: 'assets/newsletter-banner.webp',
    buttonText: 'get trading strategies',
    buttonLink: '/community'
  }
]

const NewsletterPage = () => {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      {strategySections.map((section, idx) => (
        <Strategy key={idx} {...section} />
      ))}
      <TestimonialSlider />
    </Box>
  )
}

export default NewsletterPage
