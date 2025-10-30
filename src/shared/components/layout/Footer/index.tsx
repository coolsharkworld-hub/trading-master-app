import { Link as RouterLink } from 'react-router-dom'

import {
  Instagram as InstagramIcon,
  MusicNote as MusicNoteIcon,
  Reddit as RedditIcon,
  SportsEsports as SportsEsportsIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material'

import { Box, Container, Divider, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material'

const footerLinks = [
  { label: 'privacy policy', to: '/privacy' },
  { label: 'terms of service', to: '/terms' },
  { label: 'disclaimer', to: '/disclaimer' }
]

const socialIcons = [
  { icon: <YouTubeIcon />, url: 'https://youtube.com' },
  { icon: <TwitterIcon />, url: 'https://twitter.com' },
  { icon: <InstagramIcon />, url: 'https://instagram.com' },
  { icon: <RedditIcon />, url: 'https://reddit.com' },
  { icon: <MusicNoteIcon />, url: 'https://tiktok.com' },
  { icon: <SportsEsportsIcon />, url: 'https://discord.com' }
]

export const Footer = () => (
  <Box component='footer' sx={{ bgcolor: '#111114', color: '#fff', py: 4, px: 2 }}>
    <Container>
      <Divider sx={{ borderColor: '#333', mb: 3 }} />
      <Stack spacing={2} alignItems='center'>
        <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
          <Typography variant='body2' sx={{ fontWeight: 400 }}>
            © 2025 TradeMaster. all rights reserved
          </Typography>
          {footerLinks.map(link => (
            <MuiLink
              key={link.label}
              component={RouterLink}
              to={link.to}
              underline='none'
              color='inherit'
              sx={{
                fontWeight: 400,
                fontSize: 15,
                textTransform: 'lowercase',
                '&:hover': { color: theme => theme.palette.primary.main }
              }}
            >
              {link.label}
            </MuiLink>
          ))}
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
          {socialIcons.map(({ icon, url }, idx) => (
            <IconButton
              key={idx}
              component='a'
              href={url}
              target='_blank'
              rel='noopener'
              sx={{
                color: '#fff',
                '&:hover': { color: theme => theme.palette.primary.main }
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
        <Typography variant='body2' align='center' sx={{ fontWeight: 400, fontSize: 15, mt: 2 }}>
          futures and forex trading contains substantial risk and is not for every investor. an investor could
          potentially lose all or more than the initial investment. risk capital is money that can be lost without
          jeopardising ones' financial security or life style. only risk capital should be used for trading and only
          those with sufficient risk capital should consider trading. past performance is not necessarily indicative of
          future results.
          <br />
          <br />
          testimonials appearing on this website may not be representative of other clients or customers and is not a
          guarantee of future performance or success.
        </Typography>
      </Stack>
    </Container>
  </Box>
)
