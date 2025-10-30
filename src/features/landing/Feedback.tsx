import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'

interface FeedbackCard {
  text: string
  photoUrl: string
  username: string
  userId: string
}

interface Props {
  subtitle: string
  title: string
  description: string
  cards: FeedbackCard[]
}

const Feedback = ({ subtitle, title, description, cards }: Props) => {
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
      <Box
        sx={{
          mt: 10,
          mb: 10,
          width: '100%',
          height: '1px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #000000 0%, #555555 50%, #000000 100%)',
          opacity: 0.8
        }}
      />
      <Stack spacing={1} alignItems='center' maxWidth={800} width='100%' mb={6}>
        <Typography
          variant='body2'
          align='center'
          sx={{
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#1976d2',
            fontSize: { xs: 14, md: 16 }
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant='h2'
          align='center'
          sx={{
            fontWeight: 700,
            color: '#fff',
            fontSize: { xs: 32, md: 56 }
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='h6'
          align='center'
          sx={{
            color: 'GrayText',
            fontWeight: 400,
            fontSize: { xs: 16, md: 20 }
          }}
        >
          {description}
        </Typography>
      </Stack>

      <Grid container spacing={2} rowGap={8} maxWidth={800}>
        {cards.map((card, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                border: '1px solid gray',
                background: 'linear-gradient(180deg, #222222 0%, #111111 100%)',
                boxShadow: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
                }
              }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 400,
                  fontSize: { xs: 14, md: 16 }
                }}
              >
                "{card.text}"
              </Typography>

              <Stack direction='row' spacing={2} alignItems='center'>
                <Avatar src={card.photoUrl} alt={card.username} sx={{ width: 48, height: 48 }} />
                <Stack spacing={0.5}>
                  <Typography sx={{ color: '#fff', fontWeight: 600 }}>{card.username}</Typography>
                  <Typography sx={{ color: 'GrayText', fontSize: 12 }}>{card.userId}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Feedback
