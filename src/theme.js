import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const pwTheme = createMuiTheme({
  palette: {
    linkedIn: {
      main: '#2867B2'
    },
    github: {
      main: '#f6f8fa'
    },
    stackOverflow: {
      main: '#fff'
    },
    secondary: {
      main: '#2e8f62'
    }
  },
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`
  },
  overrides: {
    MuiTypography: {
      root: {
        letterSpacing: '0.5px !important'
      },
      subtitle1: {
        fontSize: '1.15rem',
        lineHeight: '1.25rem',
        fontWeight: '600'
      },
      subtitle2: {
        fontSize: '1rem',
        opacity: 0.95
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: '400'
      }
    },
    MuiCardContent: {
      root: {
        padding: theme.spacing(3),
        '&:last-child': {
          paddingBottom: theme.spacing(3)
        }
      }
    },
    MuiPaper: {
      root: {
        border: '1px solid rgba(0, 0, 0, 0.18)'
      }
    },
    MuiCardHeader: {
      root: {
        paddingBottom: 0
      }
    },
    MuiChip: {
      label: {
        fontWeight: '500',
        paddingBottom: '2px'
      }
    }
  }
});

export default pwTheme;
