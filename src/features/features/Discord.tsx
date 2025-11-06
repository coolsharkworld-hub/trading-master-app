import { Link as RouterLink } from 'react-router-dom'

import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'

import HorizontalLine from '@shared/components/landing/CustomDivider'
import { discordBlogData } from '@shared/constants/blogs'

const DiscordSection = () => {
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
      <Stack alignItems='center' maxWidth={1000} width='100%'>
        <Box>
          <Typography
            variant='h2'
            align='center'
            sx={{
              fontWeight: 700,
              color: '#fff',
              fontSize: { xs: 24, md: 40 }
            }}
          >
            discord community
          </Typography>
          <Typography
            variant='h6'
            align='center'
            sx={{
              color: 'white',
              fontWeight: 400,
              maxWidth: 600,
              fontSize: { xs: 14, md: 16 },
              mt: 2
            }}
          >
            TradeMaster's discord isn't just another chatroom — it's your daily connection to real traders, live trades,
            and exclusive insight. join our free community for live streams, platform updates, and Q&As with the
            TradeMaster team. and if you use our algos, you unlock a private room built for only the best traders.
          </Typography>
        </Box>

        <Button
          component={RouterLink}
          to='/auth/login'
          variant='contained'
          size='large'
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 1,
            px: 5,
            mt: 2,
            textTransform: 'lowercase',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          start
        </Button>

        <Grid container spacing={6} alignItems='center' sx={{ mt: 8 }}>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            <Stack spacing={4} divider={<Divider sx={{ bgcolor: '#444' }} />}>
              {discordBlogData.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      fontSize: 18,
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      component='span'
                      sx={{
                        color: '#1976d2',
                        fontWeight: 700,
                        mr: 1.5
                      }}
                    >
                      0{index + 1}
                    </Box>
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#ccc',
                      fontSize: 14
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <img src='assets/discord-community.webp' alt='Reports' style={{ width: '100%', borderRadius: 12 }} />
          </Grid>
        </Grid>
      </Stack>
      <HorizontalLine />
    </Container>
  )
}

export default DiscordSection
