import { Box, Typography, useTheme } from '@mui/material'

interface ReportItemProps {
  image: React.ReactNode
  subtitle: string
  description: string
  index?: number
}

const ReportItem = ({ image, subtitle, description, index }: ReportItemProps) => {
  const theme = useTheme()

  return (
    <Box textAlign='center'>
      <Box mb={3}>{image}</Box>
      <Typography
        variant='h5'
        sx={{
          fontWeight: 700,
          color: '#fff',
          fontSize: 16
        }}
      >
        {index !== undefined && (
          <Box component='span' sx={{ color: theme.palette.primary.main, mr: 1 }}>
            0{index + 1}
          </Box>
        )}
        {subtitle}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          color: theme.palette.grey[400],
          fontSize: 14
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default ReportItem
