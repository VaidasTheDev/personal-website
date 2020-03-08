
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: '1rem',
    '&:last-child': {
      marginBottom: 0
    }
  }
}));

export default styles;
