import { Container, Grid, Typography } from '@mui/material'

import BlogCard from '@shared/components/landing/BlogCard'
import { blogs } from '@shared/constants/blogs'

const AllBlogs = () => {
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
      <Typography
        variant='body2'
        textAlign='left'
        sx={{
          fontWeight: 700,
          color: 'white',
          fontSize: { xs: 20, md: 32 },
          mb: 4
        }}
      >
        all stay sharp editions
      </Typography>

      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <BlogCard image={blog.image} date={blog.date} title={blog.title} description={blog.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default AllBlogs
