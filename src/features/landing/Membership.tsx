import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Stack, Tab, Tabs, Typography } from '@mui/material'

const Membership = () => {
  const [tab, setTab] = useState<'monthly' | 'yearly'>('monthly')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTab(newValue as 'monthly' | 'yearly')
  }

  const price = tab === 'monthly' ? 39 : 49

  return (
    <Container
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'black'
      }}
    >
      <Box
        sx={{
          mt: 10,
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
          less than the profits of one trade
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
          where profitable trading begins
        </Typography>
        <Typography
          variant='h6'
          align='center'
          sx={{
            color: 'GrayText',
            fontWeight: 400,
            fontSize: { xs: 16, md: 20 }
          }}
        >
          only if you're serious about trading
        </Typography>

        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          sx={{
            minHeight: '32px',
            borderRadius: '8px',
            p: 0.5,
            zIndex: 5,
            border: '1px solid gray',
            backgroundColor: '#111114',
            '& .MuiTab-root': {
              textTransform: 'capitalize',
              fontSize: 16,
              fontWeight: 500,
              color: '#fff',
              minHeight: '40px',
              minWidth: '120px'
            },
            '& .Mui-selected': {
              backgroundColor: '#1976d2',
              borderRadius: '8px',
              color: '#fff'
            },
            '& .MuiTabs-indicator': {
              display: 'none'
            }
          }}
        >
          <Tab label='Monthly' value='monthly' />
          <Tab label='Yearly' value='yearly' />
        </Tabs>

        <Box
          sx={{
            bgcolor: '#1976d2',
            borderRadius: 2,
            px: 3,
            py: 1,
            maxWidth: 200,
            mx: 'auto',
            zIndex: 2,
            position: 'relative',
            top: -12
          }}
        >
          <Typography
            variant='body1'
            sx={{
              color: '#fff',
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Save 20% yearly
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            width: '100%',
            maxWidth: 360,
            mx: 'auto'
          }}
        >
          <Stack spacing={1} alignItems='center'>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 700,
                fontSize: { xs: 80, md: 350 },
                background: 'linear-gradient(180deg, #f0f0f0, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ${price}
            </Typography>
          </Stack>
          <Typography
            variant='h6'
            align='center'
            sx={{
              color: 'gray',
              fontWeight: 400,
              fontSize: { xs: 16, md: 18 },
              mt: 1
            }}
          >
            per {tab}
          </Typography>
          <Button
            component={RouterLink}
            to='/auth/login'
            variant='contained'
            size='large'
            sx={{
              bgcolor: '#1976d2',
              color: '#fff',
              fontWeight: 500,
              borderRadius: 1,
              px: 6,
              mt: 3,
              textTransform: 'lowercase',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#1565c0' }
            }}
          >
            get started
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}

export default Membership
