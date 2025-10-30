import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@mui/material'

import App from './App.tsx'
import { theme } from './theme'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
