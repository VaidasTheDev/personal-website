
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: '1rem',
    marginLeft: '1rem',
    width: '25%',
    '&.mobile': {
      marginLeft: 0,
      width: '100%'
    }
  }
}));

export default styles;
