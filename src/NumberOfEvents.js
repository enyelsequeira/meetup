import React, { useState } from 'react';
import { ErrorAlert } from './Alert';
import { Grid, ListItem, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

const NumberOfEvents = (props) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [infoText, setInfoText] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
    props.updateEvents(null, null, value);

    if (value < 1) {
      setInfoText('number of Events must be greater than 1');
    } else {
      setInfoText('');
    }
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Typography variant="subtitle1" style={{ color: '#fffffe' }}>
          Number of Events
        </Typography>
        <Grid justify="center" item xs={12} sm={8} md={5} lg={10}>
          <Paper className={classes.paper}>
            <InputBase
              type="text"
              id="numberOfEvents__input"
              value={numberOfEvents}
              onChange={handleInputChanged}
              placeholder="Event Numbers"
            />
          </Paper>

          <ErrorAlert text={infoText} />
        </Grid>
      </Grid>
    </div>
    // <Grid container className="numberOfEvents">
    //   <label className="label">Number of Events </label>
    //   <input
    //     type="text"
    //     id="numberOfEvents__input"
    //     value={numberOfEvents}
    //     onChange={handleInputChanged}
    //   />
    //   <ErrorAlert className="error" text={infoText} />
    // </Grid>
  );
};

export default NumberOfEvents;

// import React, { Component } from 'react';
// import { ErrorAlert } from './Alert';

// class NumberOfEvents extends Component {
//   state = {
//     numberOfEvents: 32,
//     infoText: '',
//   };

//   handleInputChanged = (event) => {
//     const value = event.target.value;
//     this.setState({ numberOfEvents: value });
//     this.props.updateEvents(null, null, value);

//     if (value < 1) {
//       this.setState({
//         infoText: 'number of events must be 1 or greater',
//       });
//     } else {
//       this.setState({
//         infoText: '',
//       });
//     }
//   };
//   render() {
//     return (
//       <div className="numberOfEvents">
//         <label>Number of Events: </label>
//         <input
//           type="text"
//           id="numberOfEvents__input"
//           value={this.state.numberOfEvents}
//           onChange={this.handleInputChanged}
//         />
//         <ErrorAlert text={this.state.infoText} />
//       </div>
//     );
//   }
// }
// export default NumberOfEvents;
