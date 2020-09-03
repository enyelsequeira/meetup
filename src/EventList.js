import React from 'react';
import Event from './Event';
import { Grid, ListItem } from '@material-ui/core';

const EventList = ({ events }) => {
  return (
    <div>
      <Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ul style={{ margin: '0', padding: '0' }}>
            {events.map((event) => (
              <ListItem style={{ border: '1px solid red' }} key={event.id}>
                <Event event={event} />
              </ListItem>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
    // <ul className="EventList">
    //   {events.map((event) => (
    //     <li className="city" key={event.id}>
    //       <Event event={event} />
    //     </li>
    //   ))}
    // </ul>
  );
};

export default EventList;
