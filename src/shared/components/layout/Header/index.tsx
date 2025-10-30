import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  ClearAll as ClearAllIcon,
  Close as CloseIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Menu as MenuIcon
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Fab,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme
} from '@mui/material'
import { BackendStatusIndicator } from '@shared/components/common'
import { cacheService } from '@shared/services/cache'

interface Props {
  window?: () => Window
  children?: React.ReactElement<unknown>
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children ?? <Box />}
    </Slide>
  )
}

function ScrollTop(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')
    if (anchor) {
      anchor.scrollIntoView({ block: 'center' })
    }
  }

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  )
}

const navLinks = [
  { label: 'features', to: '/features' },
  { label: 'pricing', to: '/pricing' },
  { label: 'newsletter', to: '/newsletter' },
  { label: 'contact', to: '/contact' },
  { label: 'affiliates', to: '/affiliates' },
  { label: 'blog', to: '/blog' }
]

const logo = (
  <Box
    component={RouterLink}
    to='/'
    sx={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      mr: 4
    }}
  >
    <Box
      component='img'
      src='assets/logo.png'
      alt='trademaster Logo'
      sx={{
        height: 32,
        width: 'auto',
        marginRight: 1
      }}
    />
    <Box
      component='span'
      sx={{
        color: theme => theme.palette.primary.main,
        fontWeight: 700,
        fontSize: 22,
        fontStyle: 'italic'
      }}
    >
      TradeMaster
    </Box>
  </Box>
)

export const Header = (props: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open)

  const drawer = (
    <Box
      sx={{
        width: { xs: '70vw', sm: 320 },
        height: '100vh',
        bgcolor: 'rgba(18, 18, 18, 0.95)',
        background: 'linear-gradient(135deg, rgba(18, 18, 18, 0.98) 0%, rgba(30, 30, 30, 0.95) 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(10px)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.5)'
      }}
      role='presentation'
    >
      <Box
        sx={{
          p: 3,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.3)'
        }}
      >
        <Typography variant='h6' component='div' sx={{ fontWeight: 600, color: 'primary.main', fontStyle: 'italic' }}>
          TradeMaster
        </Typography>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, p: 2, mt: 1 }}>
        {navLinks.map(link => (
          <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={RouterLink}
              to={link.to}
              onClick={toggleDrawer(false)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                px: 2,
                color: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transform: 'translateX(8px)',
                  transition: 'all 0.3s ease',
                  borderLeft: '3px solid',
                  borderColor: 'primary.main'
                }
              }}
            >
              <ListItemText
                primary={link.label}
                sx={{
                  textTransform: 'capitalize',
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: 'inherit'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          p: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(0, 0, 0, 0.3)'
        }}
      >
        <Button
          fullWidth
          variant='contained'
          component={RouterLink}
          to='/reports'
          onClick={toggleDrawer(false)}
          sx={{
            py: 1.5,
            borderRadius: 2,
            fontWeight: 700,
            textTransform: 'capitalize',
            bgcolor: 'primary.main',
            color: 'white',
            fontSize: '1rem',
            '&:hover': {
              bgcolor: 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)'
            }
          }}
        >
          View Reports
        </Button>
      </Box>
    </Box>
  )

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
          <Toolbar>
            <Container
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {logo}

              {isMobile ? (
                <>
                  <Box sx={{ mr: 2 }}>
                    <BackendStatusIndicator />
                  </Box>
                  <IconButton
                    edge='end'
                    color='inherit'
                    aria-label='menu'
                    onClick={toggleDrawer(true)}
                    sx={{
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor='right'
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    sx={{
                      '& .MuiDrawer-paper': {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none'
                      }
                    }}
                    BackdropProps={{
                      sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)'
                      }
                    }}
                  >
                    {drawer}
                  </Drawer>
                </>
              ) : (
                <Stack direction='row' spacing={3} alignItems='center'>
                  <BackendStatusIndicator />
                  <Tooltip title='Reload Page'>
                    <IconButton
                      onClick={() => cacheService.reloadPage()}
                      sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
                      size='small'
                    >
                      <ClearAllIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                  <Stack direction='row' spacing={3}>
                    {navLinks.map(link => (
                      <Button
                        key={link.label}
                        component={RouterLink}
                        to={link.to}
                        sx={{
                          color: 'white',
                          textTransform: 'lowercase',
                          fontWeight: 500,
                          '&:hover': {
                            color: 'primary.light',
                            transform: 'translateY(-1px)'
                          }
                        }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Button
                      component={RouterLink}
                      to='/reports'
                      variant='contained'
                      sx={{
                        color: '#fff',
                        textTransform: 'lowercase',
                        fontWeight: 700,
                        px: 3,
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          transform: 'translateY(-2px)',
                          boxShadow: 4
                        }
                      }}
                    >
                      reports
                    </Button>
                  </Stack>
                </Stack>
              )}
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar id='back-to-top-anchor' />
      <ScrollTop {...props}>
        <Fab size='small' aria-label='scroll back to top' sx={{ bgcolor: 'primary.main' }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
