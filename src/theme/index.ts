import { createTheme } from '@mui/material/styles'

const colors = {
  primary: {
    50: '#e8f4fd',
    100: '#d1e9fb',
    200: '#a3d2f7',
    300: '#74baf3',
    400: '#46a3ef',
    500: '#2563eb',
    600: '#1d4ed8',
    700: '#1e40af',
    800: '#1e3a8a',
    900: '#1e293b'
  },

  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87'
  },

  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    850: '#1a202c',
    900: '#0f172a',
    950: '#020617'
  },

  success: {
    50: '#f0fdf4',
    400: '#34d399',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d'
  },

  warning: {
    50: '#fffbeb',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309'
  },

  error: {
    50: '#fef2f2',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c'
  },

  chart: {
    positive: '#10b981',
    negative: '#f43f5e',
    neutral: '#6b7280',
    accent1: '#8b5cf6',
    accent2: '#06b6d4',
    accent3: '#f59e0b'
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary[500],
      light: colors.primary[400],
      dark: colors.primary[700],
      contrastText: '#ffffff'
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[400],
      dark: colors.secondary[700],
      contrastText: '#ffffff'
    },
    background: {
      default: colors.gray[950],
      paper: colors.gray[900]
    },
    surface: {
      primary: colors.gray[850],
      secondary: colors.gray[800],
      tertiary: colors.gray[700]
    },
    text: {
      primary: '#ffffff',
      secondary: colors.gray[300],
      disabled: colors.gray[500]
    },
    divider: colors.gray[700],
    success: {
      main: colors.success[500],
      light: colors.success[400],
      dark: colors.success[700]
    },
    warning: {
      main: colors.warning[500],
      light: colors.warning[400],
      dark: colors.warning[700]
    },
    error: {
      main: colors.error[500],
      light: colors.error[400],
      dark: colors.error[700]
    }
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      color: colors.gray[400]
    }
  },

  spacing: 8,

  shape: {
    borderRadius: 8
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          font-family: "Inter", "Roboto", "Helvetica", "Arial", sans-serif;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: ${colors.gray[600]};
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${colors.gray[500]};
        }
      `
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
          }
        },
        outlined: {
          borderColor: colors.gray[600],
          color: colors.gray[200],
          '&:hover': {
            borderColor: colors.primary[500],
            backgroundColor: 'rgba(37, 99, 235, 0.08)'
          }
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray[900],
          border: `1px solid ${colors.gray[700]}`,
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray[900],
          border: `1px solid ${colors.gray[700]}`
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.gray[950],
          borderBottom: `1px solid ${colors.gray[800]}`,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }
      }
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.gray[700]}`,
          padding: '12px 16px'
        },
        head: {
          backgroundColor: colors.gray[850],
          fontWeight: 600,
          fontSize: '0.875rem',
          color: colors.gray[200]
        },
        body: {
          fontSize: '0.875rem',
          color: colors.gray[100]
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.gray[850],
            borderRadius: 8,
            '& fieldset': {
              borderColor: colors.gray[600]
            },
            '&:hover fieldset': {
              borderColor: colors.gray[500]
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary[500]
            }
          },
          '& .MuiInputLabel-root': {
            color: colors.gray[400],
            '&.Mui-focused': {
              color: colors.primary[500]
            }
          },
          '& .MuiOutlinedInput-input': {
            color: colors.gray[100]
          }
        }
      }
    }
  }
})

export { colors }

declare module '@mui/material/styles' {
  interface Palette {
    surface: {
      primary: string
      secondary: string
      tertiary: string
    }
  }

  interface PaletteOptions {
    surface?: {
      primary: string
      secondary: string
      tertiary: string
    }
  }
}
