
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: '0.5rem',
    '&:last-child': {
      marginBottom: 0
    },
    width: '100%',
    justifyContent: 'flex-start'
  }
}));

export default styles;
