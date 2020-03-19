import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.5rem',
    '&:last-child': {
      marginBottom: 0
    }
  },
  header: {
    fontWeight: 'bold',
    '& a': {
      '&:hover': {
        textDecoration: 'none'
      }
    }
  },
  description: {
    paddingTop: '0.25rem'
  }
}));

export default styles;
