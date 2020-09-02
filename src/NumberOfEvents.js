import React, { useState } from 'react';
import { ErrorAlert } from './Alert';
import { Grid } from '@material-ui/core';

const NumberOfEvents = (props) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [infoText, setInfoText] = useState('');

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
    <Grid container className="numberOfEvents">
      <label className="label">Number of Events </label>
      <input
        type="text"
        id="numberOfEvents__input"
        value={numberOfEvents}
        onChange={handleInputChanged}
      />
      <ErrorAlert className="error" text={infoText} />
    </Grid>
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
