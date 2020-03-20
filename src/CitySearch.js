import React, { Component } from 'react';
import { getSuggestions } from './api';
import { InfoAlert } from './Alert'

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    infoText: ''
  };


  handleInputChanged = async (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    const apiSuggestions = await getSuggestions(value);
    console.log('Suggestions', apiSuggestions);
    if (Array.isArray(apiSuggestions)) this.setState({ suggestions: [...apiSuggestions] });
    if (Array.isArray(apiSuggestions) === false || apiSuggestions.length === 0) {
      this.setState({
        infoText: ' We can not find the city you are looking for. Please try another city',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
  };

  // handleInputChanged = event => {
  //   const value = event.target.value;
  //   this.setState({ query: value });
  //   getSuggestions(value).then(suggestions => {
  //     suggestions && this.setState({ suggestions })
  //     if (value && this.state.suggestions.length === 0) {
  //       this.setState({
  //         infoText: ' We can not find the city you are looking for. Please try another city',
  //       });
  //     } else {
  //       this.setState({
  //         infoText: '',
  //       });
  //     }
  //   })
  // };
//   handleInputChanged = event => {
//     const value = event.target.value;
//     this.setState({ query: value });
//     getSuggestions(value).then(suggestions => {
//      this.setState({ suggestions });

//     if (value && suggestions.length === 0 ){
//       this.setState({
//         infoText: ' We can not find the city you are looking for. Please try another city',
//       });
//     } else {
//       this.setState({
//         infoText: '',
//       });
//     }
//   })
// };

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  };

  render() {
    console.log('state', this.state);
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder='your city of choice'
        />

        <ul className="suggestions">
          {this.state.suggestions.map(item => (
            <li 
            key={item.name_string}
            onClick={() =>
              this.handleItemClicked(item.name_string, item.lat, item.lon)
            
            }>
              {item.name_string}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CitySearch;