import EastIcon from '@mui/icons-material/East'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

const EmailSignup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        px: { xs: 8, md: 50 },
        py: 10
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          color: 'white'
        }}
      >
        <Typography variant='body1' color='grayText'>
          looking for more? sign up for insider updates
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <TextField
          variant='standard'
          placeholder='email'
          InputProps={{
            style: {
              color: 'white',
              paddingLeft: '8px'
            },
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton>
                  <EastIcon sx={{ color: 'white', fontSize: '14px' }} />
                </IconButton>
              </InputAdornment>
            )
          }}
          sx={{
            width: '100%',
            '& .MuiInput-underline:before': {
              borderBottomColor: 'white'
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white'
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default EmailSignup
