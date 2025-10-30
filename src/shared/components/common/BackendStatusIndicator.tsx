import { Box, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import axios from '@shared/services/axios'
import { tradingColors } from '@theme/tradingTheme'
import { useEffect, useState } from 'react'

const StatusDot = styled(Box)<{ status: 'online' | 'offline' | 'checking' }>(({ status }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  marginRight: 6,
  backgroundColor:
    status === 'online' ? tradingColors.success : status === 'offline' ? tradingColors.danger : tradingColors.warning,
  animation: status === 'checking' ? 'pulse 1.5s infinite' : 'none',
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 }
  }
}))

const StatusContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: 16,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
  }
})

const StatusText = styled(Typography)({
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  color: tradingColors.text.primary
})

export const BackendStatusIndicator = () => {
  const [status, setStatus] = useState<'online' | 'offline' | 'checking'>('checking')
  const [lastCheck, setLastCheck] = useState<Date>(new Date())

  const checkBackendHealth = async () => {
    try {
      const data = await axios({
        method: 'GET',
        url: '/health',
        errorMessage: 'Backend health check failed'
      })
      if (data) {
        setStatus('online')
      } else {
        setStatus('offline')
      }
    } catch (error) {
      setStatus('offline')
      console.warn('Backend health check failed:', error)
    }
    setLastCheck(new Date())
  }

  useEffect(() => {
    checkBackendHealth()

    const interval = setInterval(checkBackendHealth, 30000)

    return () => clearInterval(interval)
  }, [])

  const getTooltipText = () => {
    if (status === 'checking') return 'Checking backend connection...'
    if (status === 'online') {
      return `Backend is online\nLast checked: ${lastCheck.toLocaleTimeString()}`
    }
    return `Backend is offline\n\n⚠️ Start the backend server:\ncd trading-master-backend\nnpm run dev`
  }

  const getStatusLabel = () => {
    if (status === 'checking') return 'Checking...'
    if (status === 'online') return 'Backend Online'
    return 'Backend Offline'
  }

  return (
    <Tooltip title={<span style={{ whiteSpace: 'pre-line' }}>{getTooltipText()}</span>} arrow>
      <StatusContainer onClick={checkBackendHealth}>
        <StatusDot status={status} />
        <StatusText>{getStatusLabel()}</StatusText>
      </StatusContainer>
    </Tooltip>
  )
}

export default BackendStatusIndicator
