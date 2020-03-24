
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    padding: '2rem',
    display: 'flex',
    '&.mobile': {
      flexDirection: 'column'
    }
  }
}));

export default styles;
