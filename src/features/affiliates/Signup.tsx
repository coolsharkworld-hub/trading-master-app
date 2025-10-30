import { useState } from 'react'

import { Alert, Box, Button, Divider, Link, Paper, Stack, TextField, Typography } from '@mui/material'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        bgcolor: '#f5f5f5',
        px: 2
      }}
    >
      <Alert
        severity='info'
        sx={{
          width: '100%',
          mb: 3,
          bgcolor: '#e3f2fd',
          justifyContent: 'center',
          color: '#0d47a1',
          fontWeight: 500
        }}
      >
        You need to login or sign up before continuing.
      </Alert>

      <Box
        component='img'
        src='assets/logo.png'
        alt='trademaster Logo'
        sx={{
          width: 60,
          height: 60,
          borderRadius: 2,
          mb: 1
        }}
      />
      <Typography variant='h6' fontWeight={600} textAlign='center' sx={{ mb: 3 }}>
        TradeMaster partners
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          width: '100%',
          bgcolor: '#fff',
          borderRadius: 3
        }}
      >
        <Typography
          variant='body2'
          maxWidth={400}
          fontWeight={400}
          textAlign='center'
          sx={{ m: 'auto', lineHeight: 2 }}
          mb={3}
        >
          Welcome to TradeMaster's affiliate program — earn 30% commission every month for every new member you refer,
          for up to one year.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <form onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <Box>
              <Typography variant='body2' fontWeight={500} mb={0.5}>
                First Name
              </Typography>
              <TextField
                placeholder='Enter your first name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
                variant='outlined'
                InputLabelProps={{ shrink: false }}
              />
            </Box>

            <Box>
              <Typography variant='body2' fontWeight={500} mb={0.5}>
                Last Name
              </Typography>
              <TextField
                placeholder='Enter your last name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                required
                variant='outlined'
                InputLabelProps={{ shrink: false }}
              />
            </Box>

            <Box>
              <Typography variant='body2' fontWeight={500} mb={0.5}>
                Email
              </Typography>
              <TextField
                placeholder='Enter your email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                variant='outlined'
                InputLabelProps={{ shrink: false }}
              />
            </Box>

            <Box>
              <Typography variant='body2' fontWeight={500} mb={0.5}>
                Password
              </Typography>
              <TextField
                placeholder='Enter your password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                variant='outlined'
                InputLabelProps={{ shrink: false }}
              />
            </Box>

            <Box>
              <Typography variant='body2' fontWeight={500} mb={0.5}>
                Confirm Password
              </Typography>
              <TextField
                placeholder='Re-enter your password'
                name='confirmPassword'
                type='password'
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
                variant='outlined'
                InputLabelProps={{ shrink: false }}
              />
            </Box>

            <Button
              type='submit'
              variant='contained'
              fullWidth
              sx={{
                bgcolor: '#1976d2',
                py: 1.2,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { bgcolor: '#1565c0' }
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </form>

        <Typography variant='body2' textAlign='center' mt={3} color='text.secondary'>
          By signing up you agree to the{' '}
          <Link href='/service' underline='hover' fontWeight={500}>
            Terms of Service
          </Link>
        </Typography>
      </Paper>

      <Typography variant='body2' textAlign='center' my={3} color='text.secondary'>
        Already have an account?{' '}
        <Link href='/login' underline='hover' fontWeight={500}>
          Login
        </Link>
      </Typography>
    </Box>
  )
}
