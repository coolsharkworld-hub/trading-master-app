import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface BlogCardProps {
  image: string
  date: string
  title: string
  description: string
}

const BlogCard = ({ image, date, title, description }: BlogCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        bgcolor: '#151518',
        color: '#fff',
        border: '1px solid #333',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}
    >
      <CardMedia component='img' image={image} alt={title} sx={{ objectFit: 'cover' }} />

      <CardContent>
        <Typography
          sx={{
            color: 'gray',
            mb: 1,
            display: 'block',
            fontSize: { md: 14, xs: 12 }
          }}
        >
          {date}
        </Typography>
        <Typography component='div' sx={{ fontWeight: 400, mb: 1, fontSize: { md: 16, xs: 12 } }}>
          {title}
        </Typography>
        <Typography sx={{ color: '#aaa', maxWidth: 700, fontSize: { md: 14, xs: 12 } }}>{description}</Typography>
        <Typography
          variant='body2'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'left',
            color: 'white',
            mt: 2
          }}
        >
          <img
            src='assets/logo.png'
            alt='Reports'
            style={{ height: 24, borderRadius: 12, marginRight: 8, verticalAlign: 'middle' }}
          />
          trademaster
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BlogCard
