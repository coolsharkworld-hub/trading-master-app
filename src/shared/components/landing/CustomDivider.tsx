import { Box } from '@mui/material'

const HorizontalLine = () => {
  return (
    <Box
      sx={{
        mt: 10,
        mb: 2,
        width: '100%',
        height: '1px',
        borderRadius: '2px',
        background: 'linear-gradient(90deg, #000000 0%, #555555 50%, #000000 100%)',
        opacity: 0.8
      }}
    />
  )
}

export default HorizontalLine
