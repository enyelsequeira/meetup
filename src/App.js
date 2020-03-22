import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
// import { getNewListOfEvents } from './api'
import moment from 'moment'
import  { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'




class App extends Component{
  state = {
    page: null,
    defaultCity: '',
    lat: null,
    lon: null,
  }
  
 
  componentDidMount() {
    getEvents()
      .then(response => {
        console.log('test');
        console.log(response.events);
        this.setState({ events: response })
      });
  }

  updateEvents = (lat, lon, page) => {
    if(lat && lon) {
   
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    }
    else if (page) {
          
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    }
    else {
    
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
      }
  }

  countEventsOnADate = date => {
    if(this.state.events === undefined) return 0;
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
     
    }
    return count;
  };


  getData = () =>{
    const next7Days =[];  // Create empty array for the next 7 days
    const currentDate = moment();  // Today
    //loop 7 times for the next 7 days

    for(let i =0; i < 7; i +=1){
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date

      const count = this.countEventsOnADate(dateString);  // Use the countEventsOnADate function to count #events on this date
      next7Days.push({ date: dateString, number: count}); // Add this date and number to the list
    }
    return next7Days
  }

  render() {
    // console.log('test', this.state)
    return (

      <div className="App">
      <CitySearch updateEvents={this.updateEvents} />
      {this.state.events && <NumberOfEvents 
        updateEvents={this.updateEvents}
        numberOfEvents={this.state.events.length}
        lat={this.state.lat} 
        lon={this.state.lon} />}

        <ResponsiveContainer height={400} >
        <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
            <XAxis type="number" dataKey="date" name="date"  />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter  data={this.getData()} fill="#8884d8" />
        </ScatterChart>

        </ResponsiveContainer>

       {console.log(this.state.events, 1)}
      {this.state.events && <EventList events={this.state.events} />}
    
    </div>
  );
}
}
export default App;