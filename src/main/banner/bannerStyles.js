
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    maxHeight: '20%',
    position: 'relative',
    backgroundColor: '#4a4a96',
    padding: theme.spacing(2),
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    '&.mobile': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: '1rem'
  },
  intro: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    '&.mobile': {
      alignItems: 'center'
    }
  },
  subheader: {
    fontWeight: 'bold',
    marginTop: '0.5rem'
  },
  headerDesc: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: '1rem',
    '&.mobile': {
      textAlign: 'center'
    }
  },
  buttons: {
    marginTop: theme.spacing(1),
    '& a': {
      marginRight: theme.spacing(1),
      '&:last-child': {
        marginRight: 0
      }
    }
  }
}));

export default styles;
