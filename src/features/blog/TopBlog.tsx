import { Container } from '@mui/material'

import BigBlog from '@shared/components/landing/BigBlog'

const TopBlog = () => {
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
      <BigBlog
        image='assets/top-blog.avif'
        date='September 27, 2025'
        title='Ray Dalio: systematic trading principles that generated $55B profits'
        description='Ray Dalio built Bridgewater using systematic trading principles that generated $55B in profits. see how his data-driven approach removes emotions from trading.'
      />
    </Container>
  )
}

export default TopBlog
