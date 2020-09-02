import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    padding: '0 5px',
    width: 400,
    height: 40,
    borderRadius: '15px',
    border: '1px solid red',
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      width: 180,
      marginRight: 35,
      height: 40,
    },
    [theme.breakpoints.down('sm')]: {
      width: 180,
      marginRight: 35,
      height: 40,
    },
    [theme.breakpoints.only('md')]: {
      // marginRight: '5px',
      width: 250,
      marginRight: 'auto',
      marginLeft: '10px',
      height: 40,
    },
  },

  input: {
    background: 'white',
    margin: 'auto',
    width: '80',
    color: '#e16162',
    borderRadius: '10px',
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
