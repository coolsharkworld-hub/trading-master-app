import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface BlogCardProps {
  image: string
  date: string
  title: string
  description: string
}

const BigBlog = ({ image, date, title, description }: BlogCardProps) => {
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
        <Typography sx={{ color: 'gray', mb: 1, display: 'block' }}>{date}</Typography>
        <Typography component='div' sx={{ fontWeight: 400, mb: 1, fontSize: { md: 28, xs: 22 } }}>
          {title}
        </Typography>
        <Typography sx={{ color: '#aaa', maxWidth: 700 }}>{description}</Typography>
        <Typography
          variant='body2'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'white',
            mt: 4
          }}
        >
          <img
            src='assets/logo.png'
            alt='Reports'
            style={{ borderRadius: 12, height: 28, marginRight: 8, verticalAlign: 'middle' }}
          />
          trademaster
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BigBlog
