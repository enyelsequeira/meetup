import React, { Component } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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
      <div className="event">
        <div className="event__details">
          <p className="event__name">Name: {this.props.event.name}</p>
          <p className="event__date">Date: {this.props.event.local_date}</p>
          <p className="event__Overview--groupName">
            Event Group:
            {this.props.event.group.name}
          </p>
          {this.props.event.venue && (
            <p className="event__Overview--venue">
              Location:
              {this.props.event.venue.name} | {this.props.event.venue.address_1}{' '}
              | {this.props.event.venue.city}
            </p>
          )}
        </div>
        <div className="event__chart">
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
          {!event.rsvp_limit && <p>{event.yes_rsvp_count} People coming</p>}
          {showDetails && (
            <button className="details-btn" onClick={this.handleShowDetails}>
              hide details
            </button>
          )}
          {!showDetails && (
            <button className="details-btn" onClick={this.handleShowDetails}>
              show details
            </button>
          )}
        </div>

        {showDetails && (
          <div className="event__information">
            <h3>Event Information</h3>
            <h4>
              <a href={this.props.event.link} target="blank">
                GoTo MeetUp
              </a>
            </h4>
            {/* {console.log(this.props.event.description)} */}
            <div
              className="eventInformation"
              dangerouslySetInnerHTML={{ __html: this.props.event.description }}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Event;
