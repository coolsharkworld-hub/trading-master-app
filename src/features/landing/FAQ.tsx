import React, { useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from '@mui/material'

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  subtitle: string
  title: string
  faqs: FaqItem[]
}

const FaqSection: React.FC<Props> = ({ subtitle, title, faqs }) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Container
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          mt: 2,
          mb: 10,
          width: '100%',
          height: '1px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #000000 0%, #555555 50%, #000000 100%)',
          opacity: 0.8
        }}
      />

      <Stack spacing={1} alignItems='center' maxWidth={800} width='100%'>
        <Typography
          variant='body2'
          align='center'
          sx={{
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#1976d2',
            fontSize: { xs: 14, md: 16 }
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant='h2'
          align='center'
          sx={{
            fontWeight: 700,
            color: '#fff',
            fontSize: { xs: 32, md: 56 }
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Stack spacing={1} sx={{ width: '100%', maxWidth: 800, mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ backgroundColor: 'black' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography
                sx={{
                  width: '100%',
                  flexShrink: 0,
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'grayText', pl: 2 }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  )
}

export default FaqSection
