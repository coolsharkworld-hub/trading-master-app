import { Box } from '@mui/material'

import AllBlogs from '@features/blog/AllBlogs'
import BlogHead from '@features/blog/BlogHead'
import TopBlog from '@features/blog/TopBlog'

const BlogPage = () => {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <BlogHead />
      <TopBlog />
      <AllBlogs />
    </Box>
  )
}

export default BlogPage
