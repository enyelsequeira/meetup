import React, { Component } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Grid, Typography, Button, Link } from '@material-ui/core';

class Event extends Component {
  state = {
    // event: [],
    showDetails: false,
  };
  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    {
      console.log(this.props);
    }
    const showDetails = this.state.showDetails;
    //new implementation
    const event = this.props.event;
    const data = [
      { name: 'people coming', value: event.yes_rsvp_count },
      { name: 'open slots', value: event.rsvp_limit - event.yes_rsvp_count },
    ];
    const colors = ['#8884d8', '#37c0ba'];

    // const createMarkup = () => ({__html: this.props.event.description});

    return (
      <div>
        <Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h6">
              Event Name: {this.props.event.name}
            </Typography>
            <Typography>Events Date: {this.props.event.local_date}</Typography>
            <Typography>
              Starting Time: {this.props.event.local_time}
            </Typography>
            {this.props.event.venue && (
              <Typography className="event__Overview--venue">
                Location:
                {this.props.event.venue.name} |{' '}
                {this.props.event.venue.address_1} |{' '}
                {this.props.event.venue.city}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {event.rsvp_limit && (
              <ResponsiveContainer height={300} width={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={40}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>
                  <Legend
                    iconSize={10}
                    iconType="triangle"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
            {!event.rsvp_limit && (
              <Typography>{event.yes_rsvp_count} People coming</Typography>
            )}
            {showDetails && (
              <Button
                style={{
                  background: '#f9bc60',
                  color: '#001e1d',
                  fontWeight: 'bolder',
                  marginTop: '10px',
                }}
                variant="contained"
                onClick={this.handleShowDetails}
              >
                hide details
              </Button>
            )}
            {!showDetails && (
              <Button
                style={{
                  marginTop: '10px',
                  background: '#f9bc60',
                  color: '#001e1d0',
                  fontWeight: 'bolder',
                }}
                variant="contained"
                onClick={this.handleShowDetails}
              >
                show details
              </Button>
            )}
          </Grid>
          {showDetails && (
            <div>
              <Typography
                variant="h5"
                style={{
                  color: '#fffffe',
                  marginBottom: '20px',
                  marginTop: '30px',
                }}
              >
                Event Information
              </Typography>
              <a
                style={{
                  background: '#f9bc60',
                  padding: '10px',
                  marginTop: '10px',
                  textDecoration: 'none',
                  color: '#001e1d',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                }}
                component="button"
                href={this.props.event.link}
                target="blank"
              >
                Go to Meet Up
              </a>
              <Typography
                style={{ color: '#abd1c6', textAlign: 'left' }}
                variant="subtitle1"
                dangerouslySetInnerHTML={{
                  __html: this.props.event.description,
                }}
              />
            </div>
          )}
        </Grid>
      </div>
    );
  }
}
export default Event;

//   <div className="event__chart">
//     {event.rsvp_limit && (
//       <ResponsiveContainer height={300} width={300}>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={40}
//             label
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={colors[index]} />
//             ))}
//           </Pie>
//           <Legend
//             iconSize={10}
//             iconType="triangle"
//             layout="horizontal"
//             verticalAlign="bottom"
//             align="center"
//           />
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     )}
//     {!event.rsvp_limit && <p>{event.yes_rsvp_count} People coming</p>}
//     {showDetails && (
//       <button className="details-btn" onClick={this.handleShowDetails}>
//         hide details
//       </button>
//     )}
//     {!showDetails && (
//       <button className="details-btn" onClick={this.handleShowDetails}>
//         show details
//       </button>
//     )}
//   </div>

//       {showDetails && (
//     <h3>Event Information</h3>
//     <h4>
//       <a href={this.props.event.link} target="blank">
//         GoTo MeetUp
//       </a>
//     </h4>
//     {/* {console.log(this.props.event.description)} */}
//     <div
//       className="eventInformation"
//       dangerouslySetInnerHTML={{ __html: this.props.event.description }}
//     ></div>
// )}
