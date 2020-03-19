
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    maxHeight: '20%',
    position: 'relative',
    backgroundColor: '#32305e',
    padding: theme.spacing(2),
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  },
  buttonLinkedIn: {
    backgroundColor: theme.palette.linkedIn.main
  },
  buttonGitHub: {
    backgroundColor: theme.palette.github.main
  },
  buttonStackOverflow: {
    backgroundColor: theme.palette.stackOverflow.main
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: '1rem'
  },
  intro: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  subheader: {
    fontWeight: 'bold',
    marginTop: '0.5rem'
  },
  headerDesc: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: '1rem'
  },
  buttons: {
    marginTop: theme.spacing(1),
    '& a': {
      marginRight: theme.spacing(1),
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  svg: {
    width: '20px',
    height: '20px',
    fill: 'blue',
    color: 'blue',
    marginLeft: '-4px',
    marginRight: '8px'
  }
}));

export default styles;
