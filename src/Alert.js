import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }
  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        <Typography variant="subtitle1" align="center">
          {this.props.text}
        </Typography>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'green';
  }
}

export { InfoAlert, ErrorAlert };
