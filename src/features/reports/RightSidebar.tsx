import { Add, Bookmark, FilterList, Star, Visibility } from '@mui/icons-material'
import { Box, Chip, Divider, IconButton, Stack, Typography } from '@mui/material'

import { Card } from '@shared/components/common'
import { watchListData } from '@shared/constants/reports'

const RightSidebar = () => {
  return (
    <Card
      variant='elevated'
      sx={{
        overflowY: 'auto',
        height: 'fit-content',
        maxHeight: 'calc(100vh - 200px)'
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Bookmark sx={{ color: 'primary.main', fontSize: 20 }} />
            <Typography variant='subtitle1' fontWeight={600}>
              Bookmarks
            </Typography>
          </Box>
          <Box>
            <IconButton size='small' onClick={() => (window.location.href = '/add-bookmark')}>
              <Add fontSize='small' sx={{ color: 'primary.main' }} />
            </IconButton>
            <IconButton size='small'>
              <FilterList fontSize='small' sx={{ color: 'text.secondary' }} />
            </IconButton>
          </Box>
        </Box>
        <Typography variant='caption' color='text.secondary'>
          Save your favorite analyses
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Visibility sx={{ color: 'success.main', fontSize: 20 }} />
            <Typography variant='subtitle1' fontWeight={600}>
              Watchlist
            </Typography>
          </Box>
          <Box>
            <IconButton size='small' onClick={() => (window.location.href = '/add-watchlist')}>
              <Add fontSize='small' sx={{ color: 'primary.main' }} />
            </IconButton>
            <IconButton size='small'>
              <FilterList fontSize='small' sx={{ color: 'text.secondary' }} />
            </IconButton>
          </Box>
        </Box>
        <Typography variant='caption' color='text.secondary' sx={{ mb: 2, display: 'block' }}>
          Track your active symbols
        </Typography>

        {watchListData.map((group, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Chip
              icon={<Star />}
              label={group.category}
              size='small'
              sx={{
                mb: 1,
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 600
              }}
            />
            <Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 1 }}>
              {group.description}
            </Typography>
            <Divider sx={{ my: 1 }} />

            {group.items && group.items.length > 0 ? (
              <Stack spacing={0.5}>
                {group.items.map(item => (
                  <Box
                    key={item}
                    sx={{
                      bgcolor: 'surface.secondary',
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 1,
                      px: 1.5,
                      py: 1,
                      borderRadius: 1,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: 'surface.tertiary',
                        borderColor: 'primary.main',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <Typography variant='body2' fontWeight={500}>
                      {item}
                    </Typography>
                    <Chip
                      label='Track'
                      size='small'
                      sx={{
                        height: 20,
                        fontSize: '0.65rem',
                        backgroundColor: 'primary.main',
                        color: 'white'
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            ) : (
              <Typography variant='body2' color='text.secondary' sx={{ fontStyle: 'italic', py: 1 }}>
                No items in this watchlist
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default RightSidebar
