import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from "./CitySearch";
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api'
import { getNewListOfEvents} from './api'




class App extends Component{

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response.events, defaultCity: response.city.city, lat: response.city.lat, lon: response.city.lon }));
  }

  state = {
    events: [],
    defaultCity: '',
    lat: '',
    lon: ''
  }


  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

updateNumberOfEvents = (lat, lon, page) => {
  getNewListOfEvents(lat, lon, page).then(response => this.setState({ events: response.events }));
}


  
  render(){
    return(
      <div className="App">
         <CitySearch updateEvents={this.updateEvents} defaultCity={this.state.defaultCity} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />

      </div>
    );
  }
}

export default App
