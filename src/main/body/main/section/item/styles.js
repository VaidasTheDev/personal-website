
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
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
    marginRight: theme.spacing(1),
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
  headerWrapper: {
    display: 'flex'
  },
  caption: {
    marginLeft: 'auto'
  }
}));

export default styles;
