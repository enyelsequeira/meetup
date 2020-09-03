import React, { useState } from 'react';
import { getSuggestions } from './api';
import { InfoAlert } from './Alert';
import { Grid, ListItem, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { GoSearch } from 'react-icons/go';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 500,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    marginTop: 30,
    background: '#abd1c6',
    color: '#001e1d',
  },
}));

const CitySearch = ({ updateEvents }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [infoText, setInfoText] = useState('');
  const classes = useStyles();

  const handleInputChanged = async (event) => {
    const value = event.target.value;
    setQuery(value);

    const places = await getSuggestions(value);

    const filteredPlaces = places.filter(({ city }) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );

    if (filteredPlaces.length && value) {
      setInfoText('');
      setSuggestions(filteredPlaces);
    } else {
      setInfoText(
        "Sorry we can't find the city you are looking for. Please try Again"
      );
      setSuggestions([]);
    }
  };

  const handleItemClicked = (value, lat, lon) => {
    setQuery(value);
    setSuggestions([]);
    updateEvents(lat, lon);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid justify="center" item xs={12} sm={8} md={5} lg={10}>
          <Paper className={classes.paper}>
            <GoSearch
              style={{
                verticalAlign: 'middle',
                color: '#001e1d',
                marginRight: '20px',
              }}
            />
            <InputBase
              type="text"
              className="city"
              className={classes.input}
              value={query}
              onChange={handleInputChanged}
              placeholder="Search For an Event"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
          <InfoAlert text={infoText} />
          <ul className="suggestions">
            {suggestions.length
              ? suggestions.map((item) => (
                  <ListItem
                    alignItems="center"
                    key={item.name_string}
                    onClick={() =>
                      handleItemClicked(item.name_string, item.lat, item.lon)
                    }
                  >
                    <Typography variant="subtitle2" className="listItem">
                      {item.name_string}
                    </Typography>
                  </ListItem>
                ))
              : null}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default CitySearch;
