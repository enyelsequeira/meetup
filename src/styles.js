import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 200,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    marginTop: 10,
    background: '#abd1c6',
    color: '#001e1d',
  },
}));
