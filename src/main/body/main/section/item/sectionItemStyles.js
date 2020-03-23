
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    '&:last-child': {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none'
    }
  },
  chip: {
    marginTop: '0.5rem',
    marginRight: '0.5rem',
    '&:last-child': {
      marginRight: 0
    },
    userSelect: 'none'
  },
  ul: {
    marginBottom: 0
  },
  chips: {
    marginTop: '0.5rem'
  },
  description: {
    marginTop: '0.5rem'
  },
  caption: {
    fontWeight: '500',
    opacity: 0.8
  }
});

export default styles;
