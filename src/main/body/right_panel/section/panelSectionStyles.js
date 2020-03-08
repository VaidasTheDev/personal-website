
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: '1rem',
    '&:last-child': {
      marginBottom: 0
    }
  },
  content: {
    padding: '0.75rem'
  },
  title: {
    paddingBottom: '0.5rem',
    fontWeight: '600',
    opacity: 1
  }
}));

export default styles;
